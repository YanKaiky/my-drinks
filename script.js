document.getElementById('next').onclick = () => {
    let list = document.querySelectorAll('.item');

    document.getElementById('slide').appendChild(list[0])
}

document.getElementById('previous').onclick = () => {
    let list = document.querySelectorAll('.item');

    document.getElementById('slide').prepend(list[list.length - 1]);
}
