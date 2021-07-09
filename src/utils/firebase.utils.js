import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyCWep7fknAxMD0_UulsxLdL1ghHCsywYgU",
    authDomain: "shop-c3cdd.firebaseapp.com",
    projectId: "shop-c3cdd",
    storageBucket: "shop-c3cdd.appspot.com",
    messagingSenderId: "364703062346",
    appId: "1:364703062346:web:178d1f320f3ec0632249b3",
    measurementId: "G-249ZKL3GV4"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase