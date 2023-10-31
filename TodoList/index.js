const input = document.querySelector('.tab');
const addButton = document.querySelector('.addToDo');
const todoContainer = document.querySelector('.todo');
const countDisplay = document.querySelector('.count');
const removeButton = document.querySelector('.removeChecked');
let completedCount = 0;
let totalCount = 0;

addButton.addEventListener('click', function (e) {
  e.preventDefault();
  const paragraph1 = document.createElement('div');
  const paragraph2 = document.createElement('div');
  const cont = document.createElement('div');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  paragraph1.appendChild(checkbox);
  const text = document.createTextNode(input.value);
  paragraph1.appendChild(text);
  const editButton = document.createElement('button');
  editButton.textContent = '✒️';
  paragraph2.appendChild(editButton);
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❎';
  paragraph2.appendChild(deleteButton);
  cont.appendChild(paragraph1);
  cont.appendChild(paragraph2);
  todoContainer.appendChild(cont);
  input.value = '';
  totalCount++;
  updateCountDisplay();
  checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
      cont.style.textDecoration = 'line-through';
      completedCount++;
    } else {
      cont.style.textDecoration = 'none';
      completedCount--;
    }
    updateCountDisplay();
  });
  editButton.addEventListener('click', function () {
    const editText = prompt('Edit task:', text.textContent);
    if (editText !== null) {
      text.textContent = editText;
    }
  });
  deleteButton.addEventListener('click', function () {
    todoContainer.removeChild(cont);
    totalCount--;
    if (checkbox.checked) {
      completedCount--;
    }
    updateCountDisplay();
  });
});

function updateCountDisplay() {
  countDisplay.textContent = `${completedCount} of ${totalCount} tasks done`;
  const completionRatio = completedCount / totalCount;
  if (completionRatio < 0.25) {
    countDisplay.style.backgroundimage = '#ff6347';
  } else if (completionRatio < 0.5) {
    countDisplay.style.backgroundColor = '#ffd700';
  } else if (completionRatio < 0.75) {
    countDisplay.style.backgroundColor = '#7cfc00';
  } else {
    countDisplay.style.backgroundColor = '#00ff7f';
  }
  //countDisplay.style.backgroundimage='linear-gradient(to right,yellow completionRatio%,transparent)';
}

removeButton.addEventListener('click', function () {
  const checkboxes = todoContainer.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      const cont = checkbox.parentNode.parentNode;
      todoContainer.removeChild(cont);
      totalCount--;
      if (checkbox.checked) {
        completedCount--;
      }
    }
  });
  updateCountDisplay();
});
