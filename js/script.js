
function btnMenu() {
    document.querySelector('.header__navbar').classList.add('active');
    document.querySelector('.header__bgNavbar').classList.add('active');
}

function btnClose() {
    document.querySelector('.header__navbar').classList.remove('active');
    document.querySelector('.header__bgNavbar').classList.remove('active');
}

// Khi kéo chuột
var search = document.querySelector('.header__search__input');
window.onscroll = () => {

    if (window.scrollY > 100) {
        search.classList.add('active');
    } else {
        search.classList.remove('active');
    }

}

// click menu

function home() {

    document.querySelector('.header__navbar__li__home').classList.add('active');
    document.querySelector('.header__navbar__li__posts').classList.remove('active');
    document.querySelector('.header__navbar__li__personal').classList.remove('active');

    document.querySelector('.section__container__home').classList.add('active');
    document.querySelector('.section__container__posts').classList.remove('active');
    document.querySelector('.section__container__personal').classList.remove('active');

}

function posts() {

    document.querySelector('.header__navbar__li__home').classList.remove('active');
    document.querySelector('.header__navbar__li__posts').classList.add('active');
    document.querySelector('.header__navbar__li__personal').classList.remove('active');

    document.querySelector('.section__container__home').classList.remove('active');
    document.querySelector('.section__container__posts').classList.add('active');
    document.querySelector('.section__container__personal').classList.remove('active');
}

function personal() {

    document.querySelector('.header__navbar__li__home').classList.remove('active');
    document.querySelector('.header__navbar__li__posts').classList.remove('active');
    document.querySelector('.header__navbar__li__personal').classList.add('active');

    document.querySelector('.section__container__home').classList.remove('active');
    document.querySelector('.section__container__posts').classList.remove('active');
    document.querySelector('.section__container__personal').classList.add('active');
}

// Xử lí khi click vào nút 3 chấm phần posts
// Hiện
function postsHienFuntion() {
    document.querySelector('.fa__ellipsis__funtion').classList.add('active');
}

// Ẩn
function postsAnFuntion() {
    document.querySelector('.fa__ellipsis__funtion').classList.remove('active');
}

// Xử lí khi ấn vào đăng bài
function btnUpCaption() {
    document.querySelector('.section__container__posts__modal__upPosts').classList.remove('active');
}

function btnCloseCaption() {
    document.querySelector('.section__container__posts__modal__upPosts').classList.add('active');
}

/* Xử lí khi ấn vào cập nhật ảnh bìa */
function btnUpdateBanner() {
    document.querySelector('.section__container__personal__modal__updateImg').classList.remove('active');
}

function btnCloseUpdateBanner() {
    document.querySelector('.section__container__personal__modal__updateImg').classList.add('active');
}

// Xử lí khi click vào ảnh
function handalImg() {
    document.querySelector('.watch__photo').classList.remove('active');
}

function closeHandalImg() {
    document.querySelector('.watch__photo').classList.add('active');
}
