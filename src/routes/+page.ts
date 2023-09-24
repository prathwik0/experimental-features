import type { PageLoad } from './$types';
import { db } from '$lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const load = (async () => {
	const quiz = collection(db, 'Quiz');
	const quizSnapshot = await getDocs(quiz);
	const quizList = quizSnapshot.docs.map((doc) => doc.data());
	console.log(quizList);
	const questions = quizList[0].list;
	return { item: quizList };
}) satisfies PageLoad;
