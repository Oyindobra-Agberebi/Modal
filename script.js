let modalView = document.getElementById('modal');

let submitBtn = document.getElementById('btn')

let closeBtn = document.getElementById('close')

submitBtn.addEventListener('click', function () {
    modalView.style.display = "block";
})


closeBtn.addEventListener('click', function () {
    modalView.style.display = "none"
})