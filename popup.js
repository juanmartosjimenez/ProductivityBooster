// Initialize button with user's preferred color

generate();
document.getElementById("options").addEventListener("click", () =>{
    console.log("options_button clicked");
    chrome.tabs.create({'url': "/options.html"});
});

function generate() {
    console.log("onload generating list");
    chrome.storage.sync.get('urls', (result) =>{
        let out = result['urls'];
        console.log(out);
        let linkList = document.getElementById("link-list");
        out.forEach(function (item, index) {
            console.log("adding link" + item);
            let newItem = document.createElement('dt');
            newItem.appendChild(document.createTextNode(item));
            linkList.appendChild(newItem);
        });
    });

    chrome.storage.sync.get('todoList', (result) =>{
        let out = result['todoList'];
        console.log(out);
        let linkList = document.getElementById("todo-list");
        for (const [key, value] of Object.entries(out)){
            console.log("adding key " + key + " adding item " + value);
            let newItem = document.createElement('dt');
            newItem.appendChild(document.createTextNode(key + " Time " + value));
            linkList.appendChild(newItem);
        }
    });


}

function save(){
    let urls = ["nytimes", "marca"];
    chrome.storage.sync.set({'urls': urls});
}

