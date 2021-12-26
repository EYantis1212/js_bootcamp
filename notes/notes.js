// MAIN NOTES ARRAY
const notes = getSavedNotes();

const filters = {
	searchText: '',
};

// SELECTORS AND LISTENERS

// Create Note
document.querySelector('#create-note').addEventListener('click', function (e) {
	notes.push({
		id: uuidv4(),
		title: '',
		body: '',
	});
	saveNotes(notes);
	renderNotes(notes, filters);
});

// Filter Notes
document.querySelector('#filter-input').addEventListener('input', function (e) {
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});
document.querySelector('#filter-by').addEventListener('change', function (e) {
	console.log(e.target.value);
});

renderNotes(notes, filters);
