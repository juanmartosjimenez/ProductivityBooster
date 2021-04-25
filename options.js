window.onload = function() {
    document.getElementById("addBtn").addEventListener("click", AddWebsite);
    document.getElementById("addTodoBtn").addEventListener("click", AddTodo);

    chrome.storage.sync.get('urls', (result) => {
        let out = result['urls'];
        if (typeof(out) != 'undefined'){
            displayWebsites(out);
        }
    });
    chrome.storage.sync.get('todoList', (result) => {
        let out = result['todoList'];
        if (typeof(out) != 'undefined'){
            displayTodo(out);
        }
    });
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
    chrome.storage.sync.get('urls', (result) => {
        let out = result['urls'];
        if (typeof(out) != 'undefined'){
            let curWebsite = document.getElementById('myInput').value;
            if (out.includes(curWebsite)) {
                let index = out.indexOf(curWebsite);
                if (index > -1) {
                    out.splice(index, 1);
                }
            }
            else {
                out.push(curWebsite); // adding element to array
            }
            chrome.storage.sync.set({"urls": out});
            document.getElementById('myInput').value = ''; // Making the text box blank
            displayWebsites(out); // displaying the array elements
        }
        else {
            let curWebsite = document.getElementById('myInput').value;
            let newArr = [];
            newArr.push(curWebsite);
            chrome.storage.sync.set({"urls": newArr});
            displayWebsites(newArr);
            document.getElementById('myInput').value = ''; // Making the text box blank

        }
    });
}

function displayWebsites(arrayOfWeb) {
    let str = '';
    for (let i = 0; i < arrayOfWeb.length; i++) {
        str += '<li>' + arrayOfWeb[i] +  '</li>';  // adding each element with key number to letiable
    }
    document.getElementById('myUL').innerHTML = str; // Display the elements of the array
    // set event listeners for recently created buttons
}

function AddTodo(){
    chrome.storage.sync.get('todoList', (result) => {
        let out = result['todoList'];
        if (typeof(out) != 'undefined'){
            let todoItem = document.getElementById('itemTodo').value;
            let todoTime = document.getElementById('timeTodo').value;

            if (todoTime < .1 || todoItem === "") {
                alert("Please enter valid time (greater that .1 hours) and valid todo item.");
            }
            else {
                out[todoItem] = todoTime;
            }

            chrome.storage.sync.set({"todoList": out});
            document.getElementById('timeTodo').value = ''; // Making the text box blank
            document.getElementById('itemTodo').value = ''; // Making the text box blank
            displayTodo(out); // displaying the dict elements
        }
        else {
            let todoItem = document.getElementById('itemTodo').value;
            let todoTime = document.getElementById('timeTodo').value;
            let newDict = {};
            if (todoTime < .1 || todoItem === "") {
                alert("Please enter valid time (greater that .1 hours) and valid todo item.");
            }
            else {
                newDict[todoItem] = todoTime;
            }
            chrome.storage.sync.set({"todoList": newDict});
            displayTodo(newDict);
            document.getElementById('timeTodo').value = ''; // Making the text box blank
            document.getElementById('itemTodo').value = ''; // Making the text box blank
        }
    });
}

function displayTodo(dictTodo) {
    let str = '';
    str = '';
    for(let i in dictTodo) {
        str += '<li>' + 'item:' + i + ' expected time:' + dictTodo[i]  +  '</li>';
    }

    document.getElementById('myTodoUL').innerHTML = str; // Display the elements of the array
}



