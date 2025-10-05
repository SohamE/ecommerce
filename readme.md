### On page refresh the user state is lost however the token still exist in the cookies. How to retain the user data on page refresh if the token exists.

Have a check auth apiendpoint at server end which the frontend will call during the main page load and check with the user token in cookie. If the token is valid the check auth api endpoint will return the user data and we can update the user state hence re-logging the user.

### How to typehint the api responses

Create a generic ApiResponse type and have the data which changes depending on api endpoint. Check file _frontend/src/types/api.ts_
