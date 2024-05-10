export function exceptionNativeHandler(error) {
  console.log("native error: ", error);
  // do native error handling here
}

export function exceptionJSHandler(error) {
  console.log("js error: ", error);
  // do js error handling here
}

export function handleJSErrorForErrorBoundary(error, stackTrace) {
  // Show error locally in debug
  console.error("stackTrace: ", stackTrace);
  console.error("error from boundary: ", error);
  // do error handling
}
