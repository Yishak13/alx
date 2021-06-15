const burger = document.querySelector('.burger');
const menu = document.querySelector('.social');

burger.addEventListener('click', function () {
	menu.classList.toggle('block')
});

const profile_pic = document.querySelector(".profile_pic");

profile_pic.addEventListener("click", function(){
	profile_pic.classList.toggle("bigger")
})