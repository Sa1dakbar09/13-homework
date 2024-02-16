const btnEL = document.querySelector('#btn');
const close_btnEL = document.querySelector('#close');
const menuEL = document.querySelector('#menu_el');
const reg_btn = document.querySelector('#Registar');
const addbock = document.querySelector('#addblock');
const reg_close_btn = document.querySelector('#reg_close');
const formEl = document.querySelector('#form');

btnEL.addEventListener('click', () => {
    menuEL.style.display = 'block';
    menuEL.style.marginLeft = '0';
});
close_btnEL.addEventListener('click', () => { menuEL.style.display = 'none' });

reg_btn.addEventListener('click', () => {
    addbock.style.display = 'block'
    document.querySelector('header').style.filter = 'blur(5px)';
    document.querySelector('.banner').style.filter = 'blur(5px)';
    document.querySelector('body').style.overflow = 'hidden';

    document.querySelector('.banner').addEventListener('click', () => {
        addbock.style.display = 'none'
        document.querySelector('header').style.filter = 'none';
        document.querySelector('.banner').style.filter = 'none';
        document.querySelector('body').style.overflow = 'auto';
    })
});

reg_close_btn.addEventListener('click', () => {
    addbock.style.display = 'none'
    document.querySelector('header').style.filter = 'none';
    document.querySelector('.banner').style.filter = 'none';
    document.querySelector('body').style.overflow = 'auto';
});

{
    formEl.addEventListener('submit', (e) => {
        addbock.style.display = 'none'
        document.querySelector('header').style.filter = 'none';
        document.querySelector('.banner').style.filter = 'none';
        document.querySelector('body').style.overflow = 'auto';
        e.preventDefault();
        document.querySelector('#int1').value;
        document.querySelector('#int2').value;
        document.querySelector('#int3').value;
        let obj = {
            user: document.querySelector('#int1').value,
            email: document.querySelector('#int2').value,
            password: document.querySelector('#int3').value
        }
        localStorage.setItem('data-' + obj.user, JSON.stringify(obj));
        document.querySelector('#int1').value = '';
        document.querySelector('#int2').value = '';
        document.querySelector('#int3').value = '';
    })
}
;