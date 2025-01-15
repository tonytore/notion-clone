"use server"

import { admin_db } from "@/firebase-admin"
import { auth } from "@clerk/nextjs/server"

export async function createNewDocument() {
    const {sessionClaims} = await auth()

    const docCollectionRef = admin_db.collection('documents')
    const docRef = await docCollectionRef.add({
        title: "New tonytor Document chapter one",
       
    })
    await admin_db.collection('users').doc(sessionClaims?.email!).collection('rooms').doc(docRef.id).set({
        userId: sessionClaims?.email,
        role:"owner",
        createdAt: new Date(),
        roomId: docRef.id,
    });
    return {docId: docRef.id,}
}
    
