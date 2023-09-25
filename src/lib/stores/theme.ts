import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Dark & light theme store
type DarkTheme = boolean;

const getTheme = () => {
	if (browser) {
		if (
			localStorage['data-theme'] === 'dark' ||
			(!('data-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};

function createDarkTheme() {
	const { subscribe, set, update } = writable<DarkTheme>(getTheme());

	return {
		subscribe,
		set,
		toggle: () => {
			update((x) => !x);
		}
	};
}

export const darkTheme = createDarkTheme();

darkTheme.subscribe((value) => {
	if (browser) {
		value
			? document.documentElement.setAttribute('data-theme', 'dark')
			: document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('data-theme', value ? 'dark' : 'light');
	}
});
