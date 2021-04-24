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
    });
}


function generate() {
    console.log("onload generating list");
    chrome.storage.sync.get('urls', (result) =>{
        let out = result['urls'];
        let linkList = document.getElementById("link-list");
        if (typeof(out) == 'undefined'){
            console.log("no links added");
            let newItem = document.createElement('dt');
            newItem.appendChild(document.createTextNode("No blocked websites yet!"));
            linkList.appendChild(newItem);
        } else {
            out.forEach(function (item, index) {
                console.log("adding link " + item);
                let newItem = document.createElement('dt');
                newItem.appendChild(document.createTextNode(item));
                linkList.appendChild(newItem);
            });
        }
    });

    chrome.storage.sync.get('todoList', (result) =>{
        let out = result['todoList'];
        let linkList = document.getElementById("todo-list");
        if (typeof(out) == 'undefined'){
            console.log("No items added");
            let newItem = document.createElement('dt');
            newItem.appendChild(document.createTextNode("Congratulations you have no todo items!"));
            linkList.appendChild(newItem);
        } else {
            for (const [key, value] of Object.entries(out)){
                console.log("adding key " + key + " adding item " + value);
                let newItem = document.createElement('dt');
                newItem.appendChild(document.createTextNode(key + " Time " + value));
                linkList.appendChild(newItem);
            }
        }

    });
}


