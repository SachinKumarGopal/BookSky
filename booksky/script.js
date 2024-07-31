var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click" ,function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var cancelbutton=document.getElementById("cancel-book")
cancelbutton.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})
var cantainer = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-desctiption-input")
addbook.addEventListener("click", function(){
    
    var div=document.createElement("div")
    div.setAttribute("class", "bok-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h4>${bookauthorinput.value}</h4>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    cantainer.append(div)
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    
})
function deletebook(event){
    event.target.parentElement.remove()

}