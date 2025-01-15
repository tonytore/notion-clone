import { initializeApp,getApps,getApp,cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';



// Your service account key JSON file
const serviceAccount = require('./service_key.json');

// Initialize Firebase Admin SDK
const app = getApps.length === 0 ? initializeApp({
    credential: cert(serviceAccount),
    databaseURL: 'https://tonytor-notion-clone-default-rtdb.europe-west1.firebasedatabase.app'
}):getApp()

const admin_db = getFirestore(app);

export  {app as adminApp,admin_db }