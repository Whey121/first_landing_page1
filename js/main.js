(function(){
    const header=document.querySelector('.header');
    window.onscroll=() => {
        if(window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else{
            header.classList.remove('header__active');
        }
    };
}());



// Burger
(function(){
    const burgerItem=document.querySelector('.burger');
    const menu=document.querySelector('.header__nav');
    const menuClose=document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', ()=>{
    menu.classList.add('header__nav-active');
    });
    menuClose.addEventListener('click', ()=>{
        menu.classList.remove('header__nav-active');
        });
}());