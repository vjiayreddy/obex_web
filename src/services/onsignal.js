const initOneSignalNotification = () => {
  window.OneSignal = window.OneSignal || [];
  OneSignal.push(function () {
    OneSignal.init({
      appId: process.env.NEXT_PUBLIC_ONE_SIGNAL_KEY,
      notifyButton: {
        enable: true,
      },
      allowLocalhostAsSecureOrigin: true,
      serviceWorkerParam: {
        scope: "/",
      },
      serviceWorkerPath: "/OneSignalSDKWorker.js",
      serviceWorkerUpdaterPath: "/OneSignalSDKUpdaterWorker.js",
    });
  });
  return () => {
    window.OneSignal = undefined;
  };
};

export default initOneSignalNotification;
