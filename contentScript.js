function alertMessage(){
    console.log("ContentScript.js");
    alert("This is a test message");
    document.body.innerHTML = "I am a carrot";
    document.write(Date());
}

function checkWhitelist(){
    chrome.storage.sync.get('urls', (result) => {
        let out = result['urls'];
        out.forEach()
    });
}

alertMessage();