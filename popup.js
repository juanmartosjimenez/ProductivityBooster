// Initialize button with user's preferred color

document.getElementById("options").addEventListener("click", () =>{
    /*
    console.log("options_button clicked");
    chrome.tabs.create({'url': "/options.html"});
     */
    save();
});


function save(){
    let urls = ["nytimes", "marca"];
    chrome.storage.sync.set({'urls': urls});
    chrome.storage.sync.get('urls', (result) => {
        console.log(result);
        alert(result['urls']);
    });
}

