import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Comment: Unused code
const firebaseConfig = firebase.initializeApp({
    apiKey: 'AIzaSyDrQ_apTwKNFQk1XgyS35IkBTmVYU3-pqE',
    authDomain: 'react-movies-82cd8.firebaseapp.com',
    projectId: 'react-movies-82cd8',
    storageBucket: 'react-movies-82cd8.appspot.com',
    messagingSenderId: '782890543979',
    appId: '1:782890543979:web:2e737fe41f8b54870f3a2e',
});

export const initFirebase = () => firebase.initializeApp({
    apiKey: 'AIzaSyDrQ_apTwKNFQk1XgyS35IkBTmVYU3-pqE',
    authDomain: 'react-movies-82cd8.firebaseapp.com',
    projectId: 'react-movies-82cd8',
    storageBucket: 'react-movies-82cd8.appspot.com',
    messagingSenderId: '782890543979',
    appId: '1:782890543979:web:2e737fe41f8b54870f3a2e',
});

export default firebase;
