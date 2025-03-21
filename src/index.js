document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');  // The form
  const taskList = document.querySelector('#tasks');  // The UL where tasks will appear

  // Event listener for the form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent default form submission

    const taskInput = document.querySelector('#new-task-description');  // Task input field
    const taskDescription = taskInput.value.trim();  // Get task description and trim any spaces

    if (taskDescription) {
      const taskItem = document.createElement('li');  // Create a new <li> element
      taskItem.textContent = taskDescription;  // Set the content to the task description

      taskList.appendChild(taskItem);  // Add the new task to the task list (DOM)

      taskInput.value = '';  // Clear the input field after submitting
    }
  });
});
