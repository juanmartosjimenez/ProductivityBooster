// Initialize button with user's preferred color

document.getElementById("options").addEventListener("click", () =>{
    console.log("options_button clicked");
    chrome.tabs.create({'url': "/options.html"});
});

chrome.storage.onClick = function () {
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


}

function save(){
    let urls = ["nytimes", "marca"];
    chrome.storage.sync.set({'urls': urls});
}

