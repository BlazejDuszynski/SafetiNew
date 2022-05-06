const offerFadeInItems = document.querySelectorAll(".offer__item");
 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("offer__item--transitioned", entry.isIntersecting)
    })
}, {
    threshold: 0.5
})

offerFadeInItems.forEach(offerFadeInItem => {
    observer.observe(offerFadeInItem);
});