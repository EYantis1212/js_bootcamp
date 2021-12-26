// DATA
let todos = getSavedTodos();
const filters = {
	searchText: '',
	hideCompleted: false,
};

// SELECTORS & LISTENERS
// Filter Input
document.querySelector('#filter-text').addEventListener('input', function (e) {
	filters.searchText = e.target.value;
	renderTodos(todos, filters);
});
// Hide Completed Checkbox
document
	.querySelector('#hide-completed')
	.addEventListener('change', function (e) {
		filters.hideCompleted = e.target.checked;
		renderTodos(todos, filters);
	});
// Create ToDo Form
document.querySelector('#create-todo').addEventListener('submit', function (e) {
	e.preventDefault();
	todos.push({
		id: uuidv4(),
		text: e.target.createTodo.value,
		completed: false,
	});
	saveTodos(todos);
	renderTodos(todos, filters);
	e.target.createTodo.value = '';
});

// FILTER FUNCTION

// DATA STORAGE

renderTodos(todos, filters);

// EXTRA
// { text: 'Get oil changed on Fiat', completed: false },
// 	{ text: 'Get engine light diagnosed', completed: true },
// 	{ text: 'Remove weeds from backyard', completed: false },
// 	{ text: 'Seal Windows', completed: true },
// 	{ text: 'Clean hamster cage', completed: false },
