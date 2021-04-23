// Initialize button with user's preferred color

document.getElementById("options").addEventListener("click", () =>{
    console.log("options_button clicked");
    chrome.tabs.create({'url': "/options.html"});
});

document.onload = function () {
    let linkList = document.getElementById("link-list");
    let newItem = document.createElement('dt');
    newItem.appendChild(document.createTextNode("test"));
    linkList.appendChild(newItem);
}

function save(){
    let urls = ["nytimes", "marca"];
    chrome.storage.sync.set({'urls': urls});
    chrome.storage.sync.get('urls', (result) => {
        console.log(result);
        alert(result['urls']);
    });
}

