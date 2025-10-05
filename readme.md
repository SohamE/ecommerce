### On page refresh the user state is lost however the token still exist in the cookies. How to retain the user data on page refresh if the token exists.

Have a check auth apiendpoint at server end which the frontend will call during the main page load and check with the user token in cookie. If the token is valid the check auth api endpoint will return the user data and we can update the user state hence re-logging the user.

### How to typehint the api responses

Create a generic ApiResponse type and have the data which changes depending on api endpoint. Check file _frontend/src/types/api.ts_

### Better folder structures

## current

```
src/
├── api/ # API calls
│ ├── auth.ts
│ ├── users.ts
│ ├── posts.ts
│ ├── axiosInstance.ts
│ └── index.ts # Barrel export
├── components/ # All components
│ ├── common/ # Shared components
│ │ ├── Button/
│ │ ├── Input/
│ │ └── Modal/
│ ├── layout/
│ │ ├── Header/
│ │ ├── Footer/
│ │ └── Navbar/
│ ├── features/ # Feature-specific components
│ │ ├── auth/
│ │ │ ├── LoginForm/
│ │ │ └── SignupForm/
│ │ └── profile/
│ └── ErrorBoundary/
├── context/ # React Context
│ ├── AuthContext/
│ │ ├── index.tsx
│ │ └── authReducer.ts
│ └── ThemeContext/
├── hooks/ # Custom hooks
│ ├── useAuth.ts
│ ├── useDebounce.ts
│ └── useLocalStorage.ts
├── pages/ # Page components
│ ├── Home/
│ ├── Login/
│ ├── Signup/
│ ├── Dashboard/
│ └── Profile/
├── lib/ # Utility functions
│ ├── utils.ts
│ ├── cn.ts
│ └── validators.ts
├── types/ # TypeScript types
│ ├── index.ts
│ ├── user.types.ts
│ ├── auth.types.ts
│ └── api.types.ts
├── constants/ # Constants
│ ├── routes.ts
│ ├── api.constants.ts
│ └── config.ts
├── assets/ # Static files
│ ├── images/
│ └── icons/
├── styles/ # Global styles
│ └── globals.css
├── router/ # Routes
│ └── index.tsx
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

## Feature based

```
src/
├── features/ # Feature-based organization
│ ├── auth/
│ │ ├── api/
│ │ │ ├── login.ts
│ │ │ ├── signup.ts
│ │ │ └── index.ts
│ │ ├── components/
│ │ │ ├── LoginForm/
│ │ │ │ ├── index.tsx
│ │ │ │ └── LoginForm.test.tsx
│ │ │ └── SignupForm/
│ │ ├── hooks/
│ │ │ └── useAuth.ts
│ │ ├── pages/
│ │ │ ├── Login.tsx
│ │ │ └── Signup.tsx
│ │ ├── types/
│ │ │ └── auth.types.ts
│ │ └── context/
│ │ ├── AuthContext.tsx
│ │ └── authReducer.ts
│ ├── users/
│ ├── posts/
│ └── ...
├── components/ # Shared/common components
│ ├── ui/ # Reusable UI components
│ │ ├── Button/
│ │ ├── Input/
│ │ └── Modal/
│ ├── layout/
│ │ ├── Header/
│ │ ├── Footer/
│ │ └── Sidebar/
│ └── ErrorBoundary/
├── lib/ # Utility functions & helpers
│ ├── utils.ts
│ ├── cn.ts # Class name utilities
│ ├── formatters.ts
│ └── validators.ts
├── hooks/ # Global custom hooks
│ ├── useDebounce.ts
│ ├── useLocalStorage.ts
│ └── useMediaQuery.ts
├── services/ # External services (optional, or keep as 'api')
│ ├── api.ts
│ └── analytics.ts
├── types/ # Global type definitions
│ ├── index.ts
│ ├── api.types.ts
│ └── common.types.ts
├── constants/ # App-wide constants
│ ├── routes.ts
│ └── config.ts
├── assets/ # Static assets
│ ├── images/
│ ├── icons/
│ └── fonts/
├── styles/ # Global styles
│ ├── globals.css
│ └── variables.css
├── router/ # Route configuration
│ ├── index.tsx
│ └── routes.ts
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```
