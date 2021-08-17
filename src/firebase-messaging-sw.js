/* eslint-disable */
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
//  importScripts('https://www.gstatic.com/firebasejs/8.3.3/firebase-analytics.js');
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

firebase.initializeApp({
  apiKey: "AIzaSyDl9q3ZaPe2XsUPy34igTAl0CowV9VuYTc",
  authDomain: "sample-push-notif-6773b.firebaseapp.com",
  databaseURL: "https://sample-push-notif-6773b-default-rtdb.firebaseio.com",
  projectId: "sample-push-notif-6773b",
  storageBucket: "sample-push-notif-6773b.appspot.com",
  messagingSenderId: "277287690276",
  appId: "1:277287690276:web:d020fb62f2e95846eaf8b1",
  measurementId: "G-B1LG454F1P"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.


self.addEventListener(
  'notificationclick',
  function (event) {

  
    event.notification.close();
    // fcp_options.link field from the FCM backend service goes there, but as the host differ, it not handled by Firebase JS Client sdk, so custom handling
    if (
      event.notification &&
      event.notification.data &&
      event.notification.data.FCM_MSG &&
      event.notification.data.FCM_MSG.notification
    ) {
      console.log(event.notification);
    
    }
  },
  false,
);

const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically
// and you should use data messages for custom notifications.
// For more info see:
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const { body, title } = payload.notification;
  const notificationTitle = title;
  const notificationOptions = {
    body,
    // icon: './logo_circle.png',
    icon: './src/assets/logo_circle.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);

});
