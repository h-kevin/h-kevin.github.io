// Global variables

const arrayOfNotes = [];

// Get the target elements

const notesSection = document.querySelector('.notes-section');
const noteForm = document.querySelector('.note-form');
const clearFormButton = document.querySelector('.clear-form');
const saveNoteButton = document.querySelector('.save-note');
const titleInput = document.querySelector('.form-group .title');
const descriptionInput = document.querySelector('.form-group .description');

// Event handlers

const onFormSubmit = function (e) {
  e.preventDefault();
};

const onClearNote = function (e) {
  e.preventDefault();

  titleInput.value = '';
  descriptionInput.value = '';
}

const onSaveNote = function (e) {
  e.preventDefault();

  const title = titleInput.value;
  const description = descriptionInput.value;

  if (title === '' || description === '') {
    return;
  } else {
    arrayOfNotes.push({
      title,
      description,
    });
  }

  onClearNote(e);
  renderNotes(arrayOfNotes);
}

// Assigning event listeners

noteForm.addEventListener('submit', onFormSubmit);
saveNoteButton.addEventListener('click', onSaveNote);
clearFormButton.addEventListener('click', onClearNote);

// Render functions

const renderNoteCard = function (noteData) {
  const noteCard = document.createElement('div');
  const noteHeader = document.createElement('h3');
  const noteDescription = document.createElement('p');

  noteCard.classList.add('note-card');
  noteHeader.classList.add('header');
  noteHeader.textContent = noteData.title;
  noteDescription.classList.add('description');
  noteDescription.textContent = noteData.description;  
  noteCard.append(noteHeader, noteDescription);

  return noteCard;
};

const renderNotes = function () {
  const notes = arrayOfNotes.map(function (note) {
    return renderNoteCard(note);
  });

  notesSection.replaceChildren(...notes);
}

// Execution

renderNotes(arrayOfNotes);
