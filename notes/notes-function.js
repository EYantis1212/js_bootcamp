// Read existing notes from lacalstorage
const getSavedNotes = function () {
	const notesJSON = localStorage.getItem('notes');
	if (notesJSON !== null) {
		return JSON.parse(notesJSON);
	} else {
		return [];
	}
};

// Save Notes to Storage
const saveNotes = function (notes) {
	localStorage.setItem('notes', JSON.stringify(notes));
};

// Remove a Note Function
const removeNote = function (id) {
	const noteIndex = notes.findIndex(function (note) {
		return note.id === id;
	});
	notes.splice(noteIndex, 1);
};
// Generate Note Dom
const generateNoteDOM = function (note) {
	const noteEl = document.createElement('div');
	const noteButton = document.createElement('button');
	const noteTextLink = document.createElement('a');

	// Remove Note Button
	noteButton.textContent = 'x';
	noteButton.addEventListener('click', function () {
		removeNote(note.id);
		saveNotes(notes);
		renderNotes(notes, filters);
	});
	// Note Link Setup
	noteTextLink.setAttribute('href', `/edit.html#${note.id}`);
	noteTextLink.innerHTML = note.title;
	// Setup Note Title Text
	if (note.title.length > 0) {
		noteTextLink.innerHTML = note.title;
	} else {
		noteTextLink.innerHTML = 'Untitled Note';
	}
	noteEl.appendChild(noteButton);
	noteEl.appendChild(noteTextLink);

	return noteEl;
};

// Render Notes Function

const renderNotes = function (notes, filters) {
	const filteredNotes = notes.filter(function (note) {
		return note.title
			.toLowerCase()
			.includes(filters.searchText.toLowerCase());
	});
	document.querySelector('#notes').innerHTML = '';
	filteredNotes.forEach(function (note) {
		const noteElement = generateNoteDOM(note);
		document.querySelector('#notes').appendChild(noteElement);
	});
};
