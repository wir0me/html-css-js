window.addEventListener('load', () => {
  let toDoEntry = document.getElementById('todo-entry');
  let addTaskButton = document.getElementById('add-task');
  let taskList = document.getElementById('task-section');
  let checkButton = document.getElementsByClassName('check-button');
  let deleteButton = document.getElementsByClassName('delete-button');

  let completeTaskCount = 0;
  let pendingTaskCount = 0;


  addTaskButton.addEventListener('click', addToDoEntry);

  function addToDoEntry() {
    let userTask = toDoEntry.value;
    
    if (!userTask) {
      alert('Please enter a task.');
      return;
    }

    //task block
    let taskBlock = document.createElement('div');
    taskBlock.classList.add('task-block');

    //check button
    let checkButtonContainer = document.createElement('div');
    checkButtonContainer.classList.add('check-button-container');

    let checkButton = document.createElement('button');
    checkButton.classList.add('check-button');

    // check SVG element
    const checkButtonSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const checkIconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const checkPolyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');

    checkButtonSVG.setAttribute('width', '24');
    checkButtonSVG.setAttribute('height', '24');
    checkButtonSVG.setAttribute('viewBox', '0 0 24 24');
    checkButtonSVG.setAttribute('stroke-width', '2');
    checkButtonSVG.setAttribute('stroke', 'currentColor');
    checkButtonSVG.setAttribute('fill', 'none');
    checkButtonSVG.setAttribute('stroke-linecap', 'round');
    checkButtonSVG.setAttribute('stroke-linejoin', 'round');

    iconPath.setAttribute('d', 'M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9')

    checkIconPath.setAttribute('stroke', 'none');
    checkIconPath.setAttribute('d', 'M0 0h24v24H0z');
    checkIconPath.setAttribute('fill', 'none');

    checkPolyline.setAttribute('points', '9 11 12 14 20 6');

    // append check button
    checkButtonSVG.appendChild(checkPolyline);
    checkButtonSVG.appendChild(checkIconPath);
    checkButtonSVG.appendChild(iconPath);
    checkButton.appendChild(checkButtonSVG);
    checkButtonContainer.appendChild(checkButton);
    taskBlock.appendChild(checkButtonContainer);
    taskList.appendChild(taskBlock);

    // task content
    let taskContainer = document.createElement('div');
    taskContainer.classList.add('task-title-container');

    let taskTitle = document.createElement('p');
    taskTitle.classList.add('task-title');

    // append task content
    taskTitle.textContent = userTask;
    taskContainer.appendChild(taskTitle);
    taskBlock.appendChild(taskContainer);

    // delete button
    const deleteButtonContainer = document.createElement('div');
    deleteButtonContainer.classList.add('delete-button-container');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');

    // delete SVG element
    const deleteSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const deletePath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const deletePath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const deletePath3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const deletePath4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const deletePath5 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    // delete SVG attributes
    deleteSVG.setAttribute('width', '24');
    deleteSVG.setAttribute('height', '24');
    deleteSVG.setAttribute('viewBox', '0 0 24 24');
    deleteSVG.setAttribute('stroke-width', '2');
    deleteSVG.setAttribute('stroke', 'currentColor');
    deleteSVG.setAttribute('fill', 'none');
    deleteSVG.setAttribute('stroke-linecap', 'round');
    deleteButton.setAttribute('stroke-linejoin', 'round');

    deletePath1.setAttribute('stroke', 'none');
    deletePath1.setAttribute('d', 'M0 0h24v24H0z');
    deletePath1.setAttribute('fill', 'none');

    deletePath2.setAttribute('d', 'M4 7h16');
    deletePath3.setAttribute('d', 'M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12')
    deletePath4.setAttribute('d', 'M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3')
    deletePath5.setAttribute('d', 'M10 12l4 4m0 -4l-4 4');

    // append delete button
    deleteSVG.appendChild(deletePath1);
    deleteSVG.appendChild(deletePath2);
    deleteSVG.appendChild(deletePath3);
    deleteSVG.appendChild(deletePath4);
    deleteSVG.appendChild(deletePath5);
    deleteButton.appendChild(deleteSVG);
    deleteButtonContainer.appendChild(deleteButton);
    taskBlock.appendChild(deleteButtonContainer);

    taskList.appendChild(taskBlock);
    pendingTaskCount += 1;
    let taskStatus = 'pending';
    render();

    deleteButton.addEventListener('click', deleteTask);

    function deleteTask() {
      taskList.removeChild(taskBlock);
      if (taskStatus == 'pending') {
        pendingTaskCount -= 1;
      } else if (taskStatus == 'complete') {
        pendingTaskCount -= 0;
      }

      render();
    }

    checkButton.addEventListener('click', taskCompleted);

    function taskCompleted() {
      taskTitle.style.color = 'var(--font-color2)';
      taskStatus = 'complete';
      pendingTaskCount--;
      completeTaskCount++;

      render();
    }

    function render() {
      let pendingTask = document.getElementById('pending-task-count');
      pendingTask.textContent = pendingTaskCount;

      let completeTask = document.getElementById('complete-task-count');
      completeTask.textContent = completeTaskCount;
    }
  }
})

