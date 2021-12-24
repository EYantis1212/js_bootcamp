// DATA
const todos = [
	{ text: 'Get oil changed on Fiat', completed: false },
	{ text: 'Get engine light diagnosed', completed: true },
	{ text: 'Remove weeds from backyard', completed: false },
	{ text: 'Seal Windows', completed: true },
	{ text: 'Clean hamster cage', completed: false },
];
const filters = {
	searchText: '',
};
// SELECTORS & LISTENERS
// Filter Input
document.querySelector('#filter-text').addEventListener('input', function (e) {
	filters.searchText = e.target.value;
	renderTodos(todos, filters);
});
// Create ToDo Form
document.querySelector('#create-todo').addEventListener('submit', function (e) {
	e.preventDefault();
	const newTodo = { text: e.target.createTodo.value, completed: false };
	e.target.createTodo.value = '';
	todos.push(newTodo);
	renderTodos(todos, filters);
});
// FILTER FUNCTION

const renderTodos = function (todos, filters) {
	// Filters Data by Filters Search Text
	const filteredTodos = todos.filter(function (todo) {
		return todo.text
			.toLowerCase()
			.includes(filters.searchText.toLowerCase());
	});
	// Filters completed for summary
	const incompleteTodos = filteredTodos.filter(function (todo, index) {
		return !todo.completed;
	});
	//Clears DIV of Data on filter
	document.querySelector('#todo').innerHTML = '';
	//Creates h2 with Summary Text
	const summary = document.createElement('h2');
	summary.textContent = `You have ${incompleteTodos.length} things left to do`;
	document.querySelector('#todo').appendChild(summary);
	//Adds filtered Data to HTML Div
	filteredTodos.forEach(function (todo) {
		const todoElement = document.createElement('p');
		todoElement.textContent = todo.text;
		document.querySelector('#todo').appendChild(todoElement);
	});
};
renderTodos(todos, filters);
