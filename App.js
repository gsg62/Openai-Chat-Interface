import { ToastProvider } from "react-native-toast-notifications";
import ErrorBoundary from "react-native-error-boundary";
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from "react-native-exception-handler";
import HomeScreen from "./app/src/components/Home/HomeScreen";
import ErrorScreen from "./app/src/components/Error/ErrorScreen";
import {
  handleJSErrorForErrorBoundary,
  exceptionNativeHandler,
  exceptionJSHandler,
} from "./app/src/components/Error/ErrorHandlers";

setNativeExceptionHandler(exceptionNativeHandler);
setJSExceptionHandler((error, isFatal) => {
  exceptionJSHandler(error);
}, true);

export default function App() {
  return (
    <ErrorBoundary
      onError={handleJSErrorForErrorBoundary}
      FallbackComponent={ErrorScreen}
    >
      <ToastProvider>
        <HomeScreen />
      </ToastProvider>
    </ErrorBoundary>
  );
}
