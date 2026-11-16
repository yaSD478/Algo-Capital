/* AlgoCapital — Firebase Cloud Messaging service worker
   Keep this file in the SAME folder as index.html (site root).
   It receives push notifications while the website is closed. */
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAT80uw41i4WpDPeTWh1fAnAqRreC1FpVQ",
  authDomain: "algocapital-new.firebaseapp.com",
  projectId: "algocapital-new",
  storageBucket: "algocapital-new.firebasestorage.app",
  messagingSenderId: "543684627865",
  appId: "1:543684627865:web:140c2e068a9fc181fa9708"
});

// Notifications sent from Firebase Console (with title + text) are shown
// automatically by Firebase in the background — nothing else needed here.
firebase.messaging();
