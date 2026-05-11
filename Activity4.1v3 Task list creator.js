//Adding a task
const submitTask = document.querySelector(".SubmitTask");
submitTask.addEventListener("click", checkValue);
function checkValue(){
    //Create Variable recording selected task
    var selectedTask = document.querySelector(".TaskInput").value;
    if(selectedTask == ""){
        alert("Please input task");
    } else {
        addTask();
    }
}

function addTask(){
    //Create Variable to represent master task list container (useful for removals)
    //const TaskListBody = document.getElementById("TaskListBody");
    //Create Variable recording selected task
    var selectedTask = document.querySelector(".TaskInput").value;
    //Clear the input field
    document.querySelector('.TaskInput').value = '';
    //Crate new Li element
    var newItem = document.createElement("li");
    //Add class attribute to Li
    newItem.setAttribute("class","TaskListItem")
    //Create element to hold text for Li
    var newTaskTitle = document.createElement("h3");
    //Append Li text holder (h3)
    newItem.appendChild(newTaskTitle);
    //Create text content for the added task
    var newItemText = document.createTextNode(selectedTask);
    //Add text content to Li
    newTaskTitle.appendChild(newItemText);
    //Find ul element
    var taskListBody = document.querySelector("ul.TaskListBody");
    //Add Li to ul
    taskListBody.appendChild(newItem);
    //Create Div for checkbox and its label
    var newDiv = document.createElement("div");
    //Append Div to Li
    newItem.appendChild(newDiv);
    //Create Task Complete? checkbox, step 1 label element
    var newCheckboxLabel = document.createElement("label");
    //Create Task Complete? checkbox, step 2 label text
    var newCheckboxLabelText = document.createTextNode("Task Completed? ");
    //Create Task Complete? checkbox, step 3 add label text
    newCheckboxLabel.appendChild(newCheckboxLabelText);
    //Create Task Complete? checkbox, step 4 append Label
    newDiv.appendChild(newCheckboxLabel);
    //Create Task Complete? checkbox, step 5 create checkbox itself
    var newCheckbox = document.createElement("input");
    //Create Task Complete? checkbox, step 6 add relevant attributes to checkbox
    newCheckbox.setAttribute("type","checkbox");
    newCheckbox.setAttribute("value","yes");
    newCheckbox.setAttribute("class","TaskCheckbox")
    //Create Task Complete? checkbox, step 7 append checkbox
    newDiv.appendChild(newCheckbox);
    //Edit task section, Step 1 div for edit section
    var editDiv = document.createElement("div");
    //Edit task section, Step 2 append Div
    newDiv.appendChild(editDiv);
    //Edit task section, Step 3, create Edit Task:
    var editTask = document.createElement("p");
    //Edit task section, Step 4, create text for Edit Task:
    var editTaskText = document.createTextNode("Edit task:")
    //Edit task section, Step 5, append text
    editTask.appendChild(editTaskText);
    //Edit task section, Step 5a, append text element to Div
    editDiv.appendChild(editTask);
    //Edit task section, Step 6, create textbox
    var editTextBox = document.createElement("input");
    //Edit task section, Step 7, add attributes to input
    editTextBox.setAttribute("type", "text");
    editTextBox.setAttribute("class", "EditTextBox");
    //Edit task section, Step 8, append Textbox to Div
    editDiv.appendChild(editTextBox);
    //Edit task section, Step 9, create edit button
    var editButton = document.createElement("button");
    //Edit task section, Step 9a, create class for button
    editButton.setAttribute("class", "EditButton");
    //Edit task section, Step 10, create text for button
    var editButtonText = document.createTextNode("Submit Change");
    //Edit task section, Step 11, append text to button
    editButton.appendChild(editButtonText);
    //Edit task section, Step 12, append button to Div
    editDiv.appendChild(editButton);
    //Edit task section, Step 13, create click function for edit button
    editButton.onclick = () => {var editRequest = editTextBox.value; 
        document.querySelector('.EditTextBox').value = ''; 
        console.log(editRequest); 
        newTaskTitle.textContent = editRequest;
    }
    //Create removal button
    var removalButton = document.createElement("button");
    //Add class attribute to button
    removalButton.setAttribute("class","SubmitRemoval")
    //Create text for button
    var removalButtonText = document.createTextNode("Remove Task");
    //Append text to button
    removalButton.appendChild(removalButtonText);
    //Append removalButton to Li
    newItem.appendChild(removalButton);
    //Add onclick to button
    removalButton.onclick = () => newDiv.parentElement.remove();
    //Functionality for editing tasks
};
