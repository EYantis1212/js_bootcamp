// Get Saved Todos
const getSavedTodos = function () {
	const todosJSON = localStorage.getItem('todos');
	if (todosJSON !== null) {
		return JSON.parse(todosJSON);
	} else {
		return [];
	}
};
// Save Todos
const saveTodos = function (todos) {
	localStorage.setItem('todos', JSON.stringify(todos));
};
// Remove Todo
const removeTodo = function (id) {
	const todoIndex = todos.findIndex(function (todo) {
		return todo.id === id;
	});
	todos.splice(todoIndex, 1);
};
// Render Todos
const renderTodos = function (todos, filters) {
	// Filters Data by Filters Search Text
	const filteredTodos = todos.filter(function (todo) {
		//ToDo Create if Statement for filtering completed
		const filterMatch = todo.text
			.toLowerCase()
			.includes(filters.searchText.toLowerCase());
		const completedMatch = !filters.hideCompleted || !todo.completed;
		return filterMatch && completedMatch;
	});

	document.querySelector('#todo').innerHTML = '';

	document.querySelector('#todo').appendChild(generateSummary(filteredTodos));

	filteredTodos.forEach(function (todo) {
		document.querySelector('#todo').appendChild(generateTodoDOM(todo));
	});
};
// Generate TODO DOM
const generateTodoDOM = function (todo) {
	//Create elements
	const todoEl = document.createElement('div');
	const todoText = document.createElement('span');
	const todoCB = document.createElement('input');
	const todoBtn = document.createElement('button');
	//Set Elements
	// Completed Checkbox
	todoCB.setAttribute('type', 'checkbox');
	todoCB.checked = todo.completed;
	todoCB.addEventListener('change', function () {
		todo.completed = !todo.completed;
		saveTodos(todos);
		renderTodos(todos, filters);
	});
	// Remove Button
	todoBtn.textContent = 'x';
	todoBtn.addEventListener('click', function () {
		removeTodo(todo.id);
		saveTodos(todos);
		renderTodos(todos, filters);
	});
	todoText.textContent = todo.text;
	//Attach Elements
	todoEl.appendChild(todoCB);
	todoEl.appendChild(todoText);
	todoEl.appendChild(todoBtn);
	//Return Elements
	return todoEl;
};
// Generate Summary
const generateSummary = function (filteredTodos) {
	const incompleteTodos = filteredTodos.filter(function (todo, index) {
		return !todo.completed;
	});
	const summary = document.createElement('h2');
	summary.textContent = `You have ${incompleteTodos.length} things left to do`;
	return summary;
};
