import { initFirestore } from '@auth/firebase-adapter';
import admin from 'firebase-admin';
import { signInWithCustomToken } from 'firebase/auth';
import { auth } from './firebase';

let app;

if (!admin.apps.length){
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
    })
  });
}

const adminDb = initFirestore({
  credential: admin.credential.cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
  })
})

const adminAuth = admin.auth(app);

async function syncFirebaseAuth(session : any) {
  if (session && session.firebasetoken) {
    try {
      await signInWithCustomToken(auth, session.firebasetoken)
    } catch (error) {
      console.error('Error signing in with custom token:', error)
    }
  } else {
    auth.signOut()
  }
}

export { adminAuth, adminDb, syncFirebaseAuth };

