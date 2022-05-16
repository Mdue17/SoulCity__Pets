const sign_in_btn = document.querySelector('#sign-in-button');
const sign_up_btn = document.querySelector('#sign-up-button');
const contaiiner = document.querySelector('.container')

sign_up_btn.addEventListener('click', ()=>{
    contaiiner.classList.add('sign-up-mode')
});

sign_in_btn.addEventListener('click', ()=>{
    contaiiner.classList.remove('sign-up-mode')
});