let items = document.querySelectorAll('.slider .list .item');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let thumbnails = document.querySelectorAll('.thumbnails .item');

let count = items.length;
let index = 0;

const updateIndex = (increment) => {
    index = index + increment;

    if (index < 0) index = count - 1;
    if (index >= count) index = 0;
}

previous.onclick = () => {
    updateIndex(-1);

    showSlider();
}

next.onclick = () => {
    updateIndex(1);

    showSlider();
}

const showSlider = () => {
    let activeIndex = document.querySelector('.slider .list .item.active');
    let activeThumbnail = document.querySelector('.thumbnails .item.active');

    if (activeIndex) activeIndex.classList.remove('active');

    if (activeThumbnail) activeThumbnail.classList.remove('active');

    items[index].classList.add('active');
    thumbnails[index].classList.add('active');
}

thumbnails.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
        index = i;
        showSlider();
    });
})

let refreshInterval = setInterval(() => {
    next.click()
}, 3000);
