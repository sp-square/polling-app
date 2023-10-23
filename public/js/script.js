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

async function handleSubmit(e) {
	e.preventDefault();
	const question = document.querySelector('.question').value;
	const options = Array.from(document.querySelectorAll('.options')).map(
		(option) => option.value
	);

	// Assign a unique id to the question
	const dbIds = await fetch('/ids');
	const { ids } = await dbIds.json();
	const id = ids.length === 0 ? 1 : Math.max(...ids) + 1;

	const response = await fetch('/', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({ id, question, options }),
	});
}

addBtnEl.addEventListener('click', addOption);
submitBtnEl.addEventListener('click', handleSubmit);
