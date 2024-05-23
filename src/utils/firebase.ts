/* eslint-disable @typescript-eslint/no-explicit-any */
import { firebaseConfig } from "@/config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export class FirebaseApp {
  static firebaseApp: any | unknown | undefined;
  static db: any | undefined;

  static init() {
    this.firebaseApp = initializeApp(firebaseConfig);
    this.db = getFirestore(this.firebaseApp);
  }
}
