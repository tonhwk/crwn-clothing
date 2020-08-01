import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyD4u32wQCziPCGFQdB4V_eeIyg10a26ysE",
  authDomain: "crnw-db-52327.firebaseapp.com",
  databaseURL: "https://crnw-db-52327.firebaseio.com",
  projectId: "crnw-db-52327",
  storageBucket: "crnw-db-52327.appspot.com",
  messagingSenderId: "923782075080",
  appId: "1:923782075080:web:c74d45f0cc60aff87b0bfd",
  measurementId: "G-RVWTLM5TKQ",
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
