document.getElementById("addButton").addEventListener("click", myFunction);

const data = []; // creating array

function myFunction(){
    if (data.includes(document.getElementById('t1').value)) {
        const index = data.indexOf(document.getElementById('t1').value);
        if (index > -1) {
            data.splice(index, 1);
        }
    }
    else {
        data.push(document.getElementById('t1').value); // adding element to array
    }
    chrome.storage.sync.set({"urls": data});
    document.getElementById('t1').value = ''; // Making the text box blank
    display(); // displaying the array elements
}

function display() {
    let str = '';
    str = 'current elements in data array : ' + data.length + '<br>';
    for (let i = 0; i < data.length; i++) {
        str += i + ':' + data[i] + "<br >";  // adding each element with key number to variable
    }

    document.getElementById('display').innerHTML = str; // Display the elements of the array
}