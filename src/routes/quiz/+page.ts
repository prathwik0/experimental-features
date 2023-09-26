import type { PageLoad } from './$types';

import { db } from '$lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const load = (async () => {
	const quizRef = collection(db, 'Quiz');
	const quizSnapshot = await getDocs(quizRef);

	const quizList = quizSnapshot.docs.map((doc) => doc.data());

	return { quizList };
}) satisfies PageLoad;
