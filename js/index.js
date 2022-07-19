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
