import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDdijAoRio7kUflJB1SHQrUE0Jq_GYrJ9U',
  authDomain: 'social-app-e7cbe.firebaseapp.com',
  projectId: 'social-app-e7cbe',
  storageBucket: 'social-app-e7cbe.appspot.com',
  messagingSenderId: '453895060361',
  appId: '1:453895060361:web:761844505c8c777ad03f58',
};

const firebase = Firebase.initializeApp(config);

export { Firebase, firebase };
