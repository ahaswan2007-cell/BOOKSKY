var popup= document.querySelector(".popup")
var popupbox = document.querySelector(".popup-box")
var button= document.getElementById("add button")
button.addEventListener("click",function(){
    
    popup.style.display="block"
     
popupbox.style.display="block"

})

var cancelpopup= document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
 event.preventDefault()
popup.style.display="none"
     
popupbox.style.display="none"

})

var container = document.querySelector(".container")
var booktitle = document.getElementById("book-title-input")
var author = document.getElementById("AUTHOR")
var decription = document.getElementById("AUTHOR- DESCRIPTION")
var addbook = document.getElementById("add-btn")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div =document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML= `<h2>${booktitle.value}</h2>
        <h5>${author.value}</h5>
        <p>${decription.value}</p>
        <button onclick="deletebook(event)">delete</button>`
    
    container.append(div)
    popup.style.display="none"
     
    popupbox.style.display="none"


})
function deletebook(event)
{
    event.target.parentElement.remove()
}