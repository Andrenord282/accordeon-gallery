const carts = document.querySelectorAll('.cart');
const arrowRight = document.querySelector('.arrow__right');
const arrowLeft = document.querySelector('.arrow__left');
let num = 0;

// Работа акардиона при клике на картинку
for (let cart of carts) {
    // Функция убирает активность с картинки
    function clearActiveClass() {
        carts.forEach((cart) => {
            cart.classList.remove('active')
        })
    }    
    // Слушаем событие при клике на картинку
    cart.addEventListener('click', () => {
        // Убираем активность если на кликнутой картинки она есть
        if(cart.classList.contains('active')){
            cart.classList.remove('active')
        }else{
            // Добавляем активность если на кликнутой картинки ее нет
            clearActiveClass();
            cart.classList.add('active');
        }
    });
}



// Cчетчик картинок
function showCart (n) {
    if (n == carts.length) {
        num = 0;
    }
    if (n < 0) {
        num = carts.length -1;
    }
    carts.forEach(cart => cart.classList.remove('active'));
    carts[num].classList.add('active');
}

// Cчетчик номер картинки
function moveCart(n){
    carts.forEach((cart,i) =>{
        if(cart.classList.contains('active')){
            num = i;
        }
    })
    showCart(num+=n)
}

// Навигация на стрелки по картинкам
arrowRight.addEventListener('click', () =>{
    moveCart(1);
})
arrowLeft.addEventListener('click', () =>{
    moveCart(-1);
})
