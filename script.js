//Get the input field and the list element from the HTML
const inputBox = document.getElementById('input-box');
const list = document.getElementById('list');

//Define the addTask function in js
function addTask(){
    if(inputBox.value === ''){ //Check if the input field is empty
        alert("Cannot be empty."); // if it's empty, display an alert
    }
    else {
        let task = inputBox.value; // if the input filed is not empty, retrieve the task and date
        let date = document.getElementById('date-input').value;
        let priority = document.getElementById('priority-checkbox').checked; // Check if the priority checkbox is checked

        // Create a new list element
        let li = document.createElement("li");

        // Set the output of the list item to be the task and date
        li.innerText = task + " - " + date;

        if (priority) {
            li.classList.add("priority");
        }

        // Add an event listener to toggle the "check" class when the list item is clicked
        li.addEventListener("click", function() {
            li.classList.toggle("check");
            storage(); // Call the storage function
        });

        // Create a delete button
        let span = document.createElement("span");
        span.innerText = "\u00d7"; //multiplication sign (×), Unicode character represented by '\u00d7'

        // Add an event listener to remove the list item when the delete sign is clicked
        span.addEventListener("click", function() {
            li.remove();
            storage(); // Call the storage function

        });

        // Append the delete button to the list item
        li.appendChild(span);

        // Append the list item to the list
        list.appendChild(li);

        // Clear the input filed
        inputBox.value = "";
        document.getElementById('date-input').value = "";

        storage(); // Call the storage function

    }
}

function storage(){ //need to call this storage() function every time we add any changes
    localStorage.setItem("data", list.innerText);
}



// Function to display the list content from local storage
function showList(){
    list.innerText = localStorage.getItem("data");
}

// Call the showList function to display the list content when the pages load
showList();
