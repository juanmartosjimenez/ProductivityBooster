const data = []; // creating array

function add_element() {
    if (data.includes(document.getElementById('t1').value)) {
        var val = data.indexOf(document.getElementById('t1').value);
        if (index > -1) {
            data.splice(index, 1);
        }
    }
    else {
        data.push(document.getElementById('t1').value); // adding element to array
    }
    document.getElementById('t1').value = ''; // Making the text box blank
    disp(); // displaying the array elements
}

function disp() {
    var str = '';
    str = 'current elements in data array : ' + data.length + '<br>';
    for (i = 0; i < data.length; i++) {
        str += i + ':' + data[i] + "<br >";  // adding each element with key number to variable
    }

    document.getElementById('disp').innerHTML = str; // Display the elements of the array
}