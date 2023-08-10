document.addEventListener('DOMContentLoaded', function () {
  const addTaskButton = document.getElementById('addTaskButton');
  const taskModal = document.getElementById('taskModal');
  const taskForm = document.getElementById('taskForm');
  const taskList = document.getElementById('taskList');

  addTaskButton.addEventListener('click', function () {
    taskModal.style.display = 'block';
  });

  taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskCount = parseInt(document.getElementById('taskCount').value);
    const dueDate = new Date(document.getElementById('dueDate').value);

    for (let i = 1; i <= taskCount; i++) {
      const description = prompt(`Ingrese la descripción para la Tarea ${i}`);
      if (description !== null) {
        const taskItem = document.createElement('li');
        const now = new Date();
        const timeRemaining = dueDate - now;
        const hoursRemaining = Math.ceil(timeRemaining / (1000 * 60 * 60));

        taskItem.innerHTML = `<strong>${description}</strong> - Expira en ${hoursRemaining} horas
                              <button class="markDoneBtn">Marcar como Realizada</button>
                              <button class="deleteBtn">Eliminar</button>`;
        taskList.appendChild(taskItem);
      }
    }

    taskModal.style.display = 'none';
    taskForm.reset();
  });

  taskModal.querySelector('.close').addEventListener('click', function () {
    taskModal.style.display = 'none';
  });

  taskList.addEventListener('click', function (e) {
    if (e.target.classList.contains('markDoneBtn')) {
      const taskItem = e.target.parentNode;
      taskItem.style.textDecoration = 'line-through';
      e.target.remove();
    } else if (e.target.classList.contains('deleteBtn')) {
      e.target.parentNode.remove();
    }
  });
});
