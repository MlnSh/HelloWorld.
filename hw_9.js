const btnRemove = document.querySelector('.firstBtn');
const titleEl = document.querySelector('.title');

btnRemove.addEventListener('click', function (e) {
    titleEl.classList.toggle('title'); 
});

const btnColorChange = document.querySelector('.colorChange');
btnColorChange.addEventListener('click', function (e) {
    const p = document.querySelector('.p');
    p.classList.toggle('p-colored');
});

const changeTextBtn = document.querySelector('.changeBtn');
changeTextBtn.addEventListener('click', function (e) {
    titleEl.textContent = 'Привет, мир!'
})

const desc = document.querySelectorAll('.description');
desc.forEach(description =>
    description.textContent = 'Измененный текст'
)

const addP = document.querySelector('.thirdBtn');
addP.addEventListener('click', function (e) {
    const newP = document.createElement('p');
    newP.textContent = 'Новый абзац';
    document.body.appendChild(newP);    
})

const removeFirstEl = document.querySelector('.removeBtn');
removeFirstEl.addEventListener('click', function(e) {
    const desc = document.querySelector('.description');
    desc.remove()
} )

