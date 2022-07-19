// Global variables

const arrayOfNotes = [];
const cardColors = [
  '#ffab91',
  '#ffcc80',
  '#e7ed9b',
  '#81deea',
  '#cf94da',
  '#9a5e6d',
  '#564353',
  '#d88270',
  '#fcb667',
  '#f9f871',
];

// Get the target elements

const notesSection = document.querySelector('.notes-section');
const noteForm = document.querySelector('.note-form');
const clearFormButton = document.querySelector('.clear-form');
const saveNoteButton = document.querySelector('.save-note');
const titleInput = document.querySelector('.form-group .title');
const descriptionInput = document.querySelector('.form-group .description');

// Helpers

const getRandomColorFromArray = function (array) {
  if (Array.isArray(array) && array.length) {
    return array[Math.floor(Math.random() * array.length)];
  } else {
    return '#ffffff';
  }
}

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
      color: getRandomColorFromArray(cardColors),
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
  noteCard.style.backgroundColor = noteData.color;
  noteHeader.classList.add('header');
  noteHeader.textContent = noteData.title;
  noteDescription.classList.add('description');
  noteDescription.innerHTML = noteData.description?.replace(/\n/g, '<br />');  
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
