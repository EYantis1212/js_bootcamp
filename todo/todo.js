const todos = [
	{ text: 'Get oil changed on Fiat', completed: false },
	{ text: 'Get engine light diagnosed', completed: true },
	{ text: 'Remove weeds from backyard', completed: false },
	{ text: 'Seal Windows', completed: true },
	{ text: 'Clean hamster cage', completed: false },
];

// SELECTORS
const paragraphs = document.querySelectorAll('p');

document.querySelector('#add-todo').addEventListener('click', function (e) {
	const newTodoPara = document.createElement('p');
	newTodoPara.textContent = newTodo;
	document.querySelector('#todo').appendChild(newTodoPara);
});

const newTodo = document
	.querySelector('#new-todo')
	.addEventListener('input', function (e) {
		const newTodoText = e.target.value;
		return newTodoText;
	});
console.log(newTodo);
// POPULATE

// ADD TODO FUNCTION

// Summary Line Function
const summary = todos.filter(function (todo, index) {
	return !todo.completed;
});
const newH2 = document.createElement('h2');
newH2.textContent = `You have ${summary.length} things left to do`;
document.querySelector('#todo').appendChild(newH2);

// List Function
const newParagraph = todos.forEach(function (todo) {
	const newP = document.createElement('p');
	newP.textContent = todo.text;
	document.querySelector('#todo').appendChild(newP);
});

// function removeTodo(arr, text) {
// 	const index = arr.findIndex(function (todo, index) {
// 		return todo.text.toLowerCase() === text.toLowerCase();
// 	});
// 	console.log(index);
// 	arr.splice(index, 1);
// }

// console.log(todos);
// function getTodo(todos) {
// 	return todos.filter(function (todo) {
// 		return !todo.completed;
// 	});
// }
// console.log(getTodo(todos));

// function sortCompleted(todos) {
// 	return todos.sort(function (item1, item2) {
// 		if (item1.completed && !item2.completed) {
// 			return 1;
// 		} else if (!item1.completed && item2.completed) {
// 			return -1;
// 		} else return 0;
// 	});
// }
// console.log(sortCompleted(todos));
