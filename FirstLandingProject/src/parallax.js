let left_phone = document.getElementsByClassName('main__page__textinfo__group__phone_target')
let right_phone = document.getElementsByClassName('main__page__textinfo__group__phone_app')
let alarm = document.getElementsByClassName('main__page__textinfo__group__alarm')

window.addEventListener('scroll', () => {
    let { scrollY } = window;
    left_phone[0].style.top = 95 + 0.6 * scrollY + 'px';
    left_phone[0].style.left = -434 + 0.09 * scrollY + 'px';
    right_phone[0].style.top = -35 +  0.4 * scrollY + 'px';
    alarm[0].style.top = -126 - 0.3 * scrollY + 'px';

});