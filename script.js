
function insertAfter(referenceNode, newNode) {
   referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
   
 }
 window.onerror = function(message, url, lineNumber) {  
   return true; // prevents browser error messages  
};
let img_url=""
setInterval(function(){ 
   //Check if the Element is already added or not 
if(document.getElementById("whatsapp-web-id-created")==null){
   //get the location to add the Download Icon
    let element=((document.getElementsByClassName("_35Bca"))[0])
    //check if the status is Video or Image
     if( ((document.getElementsByClassName("_19K91"))[0]))
     {

         img_url=((document.getElementsByClassName("_19K91")[0].children)[0]).currentSrc
      
     }
     else 
   {
         img_url=(((test.getElementsByTagName("video"))[0]).src) 
    }
        let btn = document.createElement("img");
        btn.setAttribute("id", "whatsapp-web-id-created");
        btn.setAttribute("src", "https://i.imgur.com/Dmy72eY.png");
        btn.setAttribute("height", "45px");
        btn.setAttribute("width", "40px");
        btn.innerHTML = 'This is a test';
        let link = document.createElement("a")
        link.setAttribute("href", img_url);
        link.setAttribute("download","");
        link.setAttribute("title","⚠ Watch Full Video Before Downloading to Avoid Errors");
        link.appendChild(btn)
      insertAfter(element.children[0],link)  
    }
 }, 200);
