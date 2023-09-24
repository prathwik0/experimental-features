import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyAE3hLM3cSxphMiKqPKehA4ZD7z2e1CAJo',
	authDomain: 'tasc-backend.firebaseapp.com',
	projectId: 'tasc-backend',
	storageBucket: 'tasc-backend.appspot.com',
	messagingSenderId: '975898974217',
	appId: '1:975898974217:web:66b4fa09e511beae1140d8',
	measurementId: 'G-5346V3PPZW'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
