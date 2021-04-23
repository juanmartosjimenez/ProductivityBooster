document.getElementById("addButton").addEventListener("click", AddWebsite);
document.getElementById("addTodo").addEventListener("click", AddTodo);

const webData = []; // creating array for Websites
const todoData = {}; //creating dictionary for todoItems

function AddWebsite(){
    let curWebsite = document.getElementById('t1').value;
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
    document.getElementById('t1').value = ''; // Making the text box blank
    displayWebsites(); // displaying the array elements
    //setting event listeners
}

function RemoveWebsite() {
    //webData.splice(document.getElementById().value, 1);
    displayWebsites();
}

function displayWebsites() {
    let str = '';
    for (let i = 0; i < webData.length; i++) {
        str +=  webData[i] + '<button id="website' + i + '" value=' + i + '>X</button><br>';  // adding each element with key number to variable
    }
    document.getElementById('display').innerHTML = str; // Display the elements of the array
    // set event listeners for recently created buttons
    for (let a = 0; a < webData.length; a++) {
        let website = webData[a] + a;
        document.getElementById(website).addEventListener("click", RemoveWebsite);
    }
}

function AddTodo(){
    let todoItem = document.getElementById('itemTodo').value;
    let todoTime = document.getElementById('timeTodo').value;
    if (todoTime < .1 || todoItem == "") {
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
    str = 'current elements in todoData array : ' + '<br>';
    for(let i in todoData) {
        str += i + ": " + todoData[i] + "<br />";
    }

    document.getElementById('displayTodo').innerHTML = str; // Display the elements of the array
}

