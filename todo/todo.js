const todos = [
	{ text: 'Get oil changed on Fiat', completed: false },
	{ text: 'Get engine light diagnosed', completed: true },
	{ text: 'Remove weeds from backyard', completed: false },
	{ text: 'Seal Windows', completed: true },
	{ text: 'Clean hamster cage', completed: false },
];

function removeTodo(arr, text) {
	const index = arr.findIndex(function (todo, index) {
		return todo.text.toLowerCase() === text.toLowerCase();
	});
	console.log(index);
	arr.splice(index, 1);
}

console.log(todos);
function getTodo(todos) {
	return todos.filter(function (todo) {
		return !todo.completed;
	});
}
console.log(getTodo(todos));

function sortCompleted(todos) {
	return todos.sort(function (item1, item2) {
		if (item1.completed && !item2.completed) {
			return 1;
		} else if (!item1.completed && item2.completed) {
			return -1;
		} else return 0;
	});
}
console.log(sortCompleted(todos));
