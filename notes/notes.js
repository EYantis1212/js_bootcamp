// MAIN NOTES ARRAY
const notes = [
	{
		title: 'Career Goal',
		body: 'I want to become a developer',
	},
	{
		title: 'Habits I want to have',
		body: 'Learn something, brush teeth, and eat right, everyday',
	},
	{
		title: 'Sealing windows',
		body: 'Look up prices to order siding to seal windows',
	},
	{
		title: 'Call Dixie',
		body: 'Call Dixie and let her know the news about VA program',
	},
];
// MAIN FUNCTIONS OBJECTS
const filters = {
	searchText: '',
};
const renderNotes = function (notes, filters) {
	const filteredNotes = notes.filter(function (note) {
		return note.title
			.toLowerCase()
			.includes(filters.searchText.toLowerCase());
	});
	document.querySelector('#notes').innerHTML = '';
	filteredNotes.forEach(function (note) {
		const noteElement = document.createElement('p');
		noteElement.textContent = note.title;
		document.querySelector('#notes').appendChild(noteElement);
	});
};
renderNotes(notes, filters);
// SELECTORS AND LISTENERS
document.querySelector('#create-note').addEventListener('click', function (e) {
	e.target.textContent = 'WEEEE!';
});
document.querySelector('#remove-all').addEventListener('click', function (e) {
	document.querySelectorAll('.note').forEach(function (note) {
		note.remove();
	});
});
document.querySelector('#filter-input').addEventListener('input', function (e) {
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});
