const formEl = document.querySelector('form');
const labelEls = document.querySelectorAll('form label');
const buttonsEl = document.getElementById('buttons');
const addBtnEl = document.getElementById('add');
const submitBtnEl = document.getElementById('submit');

labelEls.forEach((labelEl) => {
	labelEl.innerHTML =
		`<i class="fa-solid fa-arrow-right"></i>` + labelEl.innerHTML;
});

function addOption() {
	const newOption = document.createElement('label');
	newOption.innerHTML =
		`<i class="fa-solid fa-arrow-right"></i>` +
		`<input type="text" class="options" placeholder="..." required/>`;
	formEl.insertBefore(newOption, buttonsEl);
}

function handleSubmit(e) {
	e.preventDefault();
	console.log('submit');
}

addBtnEl.addEventListener('click', addOption);
submitBtnEl.addEventListener('click', handleSubmit);
