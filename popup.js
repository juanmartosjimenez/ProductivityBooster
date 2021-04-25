// Initialize button with user's preferred color

window.onload= function(){
    generate();
    document.getElementById("options").addEventListener("click", () =>{
        console.log("options_button clicked");
        chrome.tabs.create({'url': "/options.html"});
    });

    document.getElementById("reset-data").addEventListener("click", ()=>{
        console.log("Storage reset");
        chrome.storage.sync.clear();
        window.location.href="popup.html";
        chrome.tabs.reload();
    });
}


function generate() {
    console.log("onload generating list");
    chrome.storage.sync.get('urls', (result) =>{
        let out = result['urls'];
        let linkList = document.getElementById("link-list");
        if (typeof(out) == 'undefined' || out.length === 0){
            console.log("no links added");
            let newItem = document.createElement('dt');
            newItem.appendChild(document.createTextNode("No blocked websites yet!"));
            linkList.appendChild(newItem);
        } else {
            let str = "";
            out.forEach(function (item, index) {
                console.log("adding link " + item);
                str += '<li>' + out[index] +  '</li>';
            });
            document.getElementById('myUL').innerHTML = str;
        }
    });

    chrome.storage.sync.get('todoList', (result) =>{
        let out = result['todoList'];
        let linkList = document.getElementById("todo-list");
        if (typeof(out) == 'undefined' || Object.keys(out).length === 0){
            console.log("No items added");
            let newItem = document.createElement('dt');
            newItem.appendChild(document.createTextNode("Congratulations you have no todo items!"));
            linkList.appendChild(newItem);
        } else {
            let str = '';
            for (const [key, value] of Object.entries(out)){
                console.log("adding key " + key + " adding item " + value);
                str += '<li>' + 'item:' + key + ' expected time:' + value  +  '</li>';
            }
            document.getElementById('myTodoUL').innerHTML = str;
        }

    });
}


