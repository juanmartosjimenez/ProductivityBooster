window.onload = function() {
    document.getElementById("addBtn").addEventListener("click", AddWebsite);
    document.getElementById("addTodoBtn").addEventListener("click", AddTodo);
}


function GetUrls() {
    let retVal = [];
    chrome.storage.sync.get('urls', (result) => {
        let out = result['urls'];
        if (typeof(out) != 'undefined'){
            retVal = out;
        }
    });
    return retVal;
}

function GetTodo() {
    let retVal = {};
    chrome.storage.sync.get('urls', (result) => {
        let out = result['urls'];
        if (typeof(out) != 'undefined'){
            retVal = out;
        }
    });
    return retVal;
}

const webData = GetUrls(); // creating array for Websites
const todoData = GetTodo(); //creating dictionary for todoItems

function AddWebsite(){
    let curWebsite = document.getElementById('myInput').value;
    if (webData.includes(curWebsite)) {
        let index = webData.indexOf(curWebsite);
        if (index > -1) {
            webData.splice(index, 1);
        }
    }
    else {
        webData.push(curWebsite); // adding element to array
    }
    chrome.storage.sync.set({"urls": webData});
    document.getElementById('myInput').value = ''; // Making the text box blank
    displayWebsites(); // displaying the array elements
}



function displayWebsites() {
    let str = '';
    for (let i = 0; i < webData.length; i++) {
        str += '<li>' + webData[i] +  '</li>';  // adding each element with key number to letiable
    }
    document.getElementById('myUL').innerHTML = str; // Display the elements of the array
    // set event listeners for recently created buttons
}

function AddTodo(){
    let todoItem = document.getElementById('itemTodo').value;
    let todoTime = document.getElementById('timeTodo').value;
    if (todoTime < .1 || todoItem === "") {
        alert("Please enter valid time (greater that .1 hours) and valid todo item.")
    }
    else {
        todoData[todoItem] = todoTime;
    }
    chrome.storage.sync.set({"todoList": todoData});
    document.getElementById('timeTodo').value = ''; // Making the text box blank
    document.getElementById('itemTodo').value = ''; // Making the text box blank
    displayTodo(); // displaying the array elements
}

function displayTodo() {
    let str = '';
    str = '';
    for(let i in todoData) {
        str += '<li>' + 'item:' + i + ' expected time:' + todoData[i]  +  '</li>';
    }

    document.getElementById('myTodoUL').innerHTML = str; // Display the elements of the array
}



