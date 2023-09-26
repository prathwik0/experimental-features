import type { PageLoad } from './$types';

import { db } from '$lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const load = (async ({ params }) => {
	const docRef = doc(db, 'Quiz', params.slug, 'questionnaire', params.slug);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		const data = docSnap.data();
		return { data };
	} else {
		console.error("Couldn't fetch the quiz.");
		return {};
	}
}) satisfies PageLoad;
