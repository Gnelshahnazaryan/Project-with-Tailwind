const btn = document.getElementById("nav-btn")
const nav = document.getElementById("menu")

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})


function scrollDown(loc) {
    var location = document.getElementById(loc)
    if (location !== null) {
        location.scrollIntoView({ behavior: 'smooth', block: 'start' });
        event.preventDefault();

    }
}

AOS.init({
    duration: 1000,
    offset: 200,
    once: true
});
