const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
	if (window.scrollY > 200) {
		nav.classList.add('scrolled');
	} else {
		nav.classList.remove('scrolled');
	}
});