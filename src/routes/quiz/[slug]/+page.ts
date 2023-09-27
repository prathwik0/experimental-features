import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

import { db } from '$lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const load : PageLoad = (async ({ params }) => {
	const docRef = doc(db, 'Quiz', params.slug, 'questionnaire', params.slug);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		const list = docSnap.data().list;

		let answers = [];
		
		for (let i = 0; i < list.length; i++) {
			answers.push({answered: false, answer: ''});
		}
		
		return {
			list: [ ...list ], 
			answers: [ ...answers ],
		};
	} else {
		throw error(404, 'No such quiz!');
	}
})
