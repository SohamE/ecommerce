// components/ErrorAlert.tsx
import { Alert, AlertTitle } from "@mui/material";

interface ErrorAlertProps {
  error: String | null;
  onClose?: () => void;
}

const ErrorAlert = ({ error, onClose }: ErrorAlertProps) => {
  if (!error) return null;

  return (
    <Alert severity="error" onClose={onClose} sx={{ mb: 2 }}>
      <AlertTitle>Error</AlertTitle>
      {error}
    </Alert>
  );
};

export default ErrorAlert;
