document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTaskButton');
  const taskList = document.getElementById('taskList');

  addTaskButton.addEventListener('click', addTask);
  taskList.addEventListener('click', manageTask);

  function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
          const li = document.createElement('li');
          li.innerHTML = `
              <span>${taskText}</span>
              <div>
                  <button class="complete-btn">Complete</button>
                  <button class="delete-btn">Delete</button>
              </div>
          `;
          taskList.appendChild(li);
          taskInput.value = '';
      }
  }

  function manageTask(e) {
      if (e.target.classList.contains('complete-btn')) {
          const li = e.target.parentElement.parentElement;
          li.classList.toggle('completed');
      }
      if (e.target.classList.contains('delete-btn')) {
          const li = e.target.parentElement.parentElement;
          taskList.removeChild(li);
      }
  }
});
