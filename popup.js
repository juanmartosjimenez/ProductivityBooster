// Initialize button with user's preferred color

generate();
document.getElementById("options").addEventListener("click", () =>{
    console.log("options_button clicked");
    chrome.tabs.create({'url': "/options.html"});
});

function generate() {
    function appendList(out, typeList){
        console.log(out);
        let linkList = document.getElementById(typeList);
        out.forEach(function (item, index) {
            console.log("adding item " + item);
            let newItem = document.createElement('dt');
            newItem.appendChild(document.createTextNode(item));
            linkList.appendChild(newItem);
        });
    }
    console.log("onload generating list");
    chrome.storage.sync.get('urls', (result) =>{
        let out = result['urls'];
        appendList(out, 'link-list');

    });

    chrome.storage.sync.get('todoList', (result) =>{
        let out = result['todoList'];
        console.log(out);
        appendList(out, "todo-list")
    });


}

function save(){
    let urls = ["nytimes", "marca"];
    chrome.storage.sync.set({'urls': urls});
}

