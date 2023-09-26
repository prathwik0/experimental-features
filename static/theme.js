//Prevent FOUC related to theme (light & dark mode)

/* sets class = dark (Use with Tailwind & daisyUI) */
if (localStorage.getItem('data-theme') === 'dark') {
	document.documentElement.setAttribute('data-theme', 'dark');
} else if (localStorage.getItem('data-theme') === 'light') {
	document.documentElement.setAttribute('data-theme', 'light');
} else if (
	!localStorage.getItem('data-theme') &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	document.documentElement.setAttribute('data-theme', 'dark');
} else {
	document.documentElement.setAttribute('data-theme', 'light');
}
