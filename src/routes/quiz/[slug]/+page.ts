import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

import { db } from '$lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

function shuffle(array: any[]) {
	var i = array.length,
		j = 0,
		temp;

	while (i--) {
		j = Math.floor(Math.random() * (i + 1));

		// swap randomly chosen element with current element
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
}

function rg(n: number) {
	let arr = [...Array(n).keys()];
	return shuffle(arr);
}

export const load: PageLoad = async ({ params }) => {
	const docRef = doc(db, 'Quiz', params.slug, 'questionnaire', params.slug);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		const list = docSnap.data().list;

		let answers = [];

		for (let i = 0; i < list.length; i++) {
			answers.push({ answered: false, answer: '', order: rg(list[i].options.length) });
		}

		return {
			list: [...list],
			answers: [...answers]
		};
	} else {
		throw error(404, 'No such quiz!');
	}
};
