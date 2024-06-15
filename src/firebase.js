// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const messaging = getMessaging(app);

export const getPushToken = async (setToken) => {
  // const permission = await Notification.requestPermission();
  // if (permission === "granted") {
  //   return getToken(messaging, {
  //     vapidKey: "",
  //   })
  //     .then((currentToken) => {
  //       if (currentToken) {
  //         setToken(currentToken);
  //       } else {
  //         setToken(null);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("An error occurred while retrieving token. ", err);
  //     });
  // }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    // onMessage(messaging, (payload) => {
    //   resolve(payload);
    // });
  });
