
function darktheme(){
    var counter = 0
    var counter = JSON.parse(localStorage.getItem('counter'))
    var element = document.body
    counter = counter + 1

    if (counter % 2 == 0){
        var element = document.body
        element.classList.toggle("dark") 
    }

    if (counter % 2 == 1){
        element.classList.remove("dark") 
        element.classList.add(":root")
    }
    document.body.style.backgroundColor = element

    localStorage.setItem('counter' , counter)
   // alert(counter)
    return counter
         
    }

function getTheme(){
    var counter = JSON.parse(localStorage.getItem('counter'))
    if (counter % 2 == 0){
        var element = document.body
        element.classList.toggle("dark") 

    }

    if (counter % 2 == 1){
            element.classList.remove("dark") 
        }

}
var counter2 = 0
function openPicture(imageID){
    //var counter2 = JSON.parse(localStorage.getItem('counter2'))
    counter2 = counter2 + 1
    if (imageID == 'Image 1'){
       image = document.getElementById("BImage1")
       if (counter2 % 2 == 1){
        image.src = "http://www.outgrabe.net/bird00.jpg"
    }
       alert(imageID)
       document.get
    }
    if (counter2 % 2 == 0){
        image = document.getElementById("BImage1")
        image.src = ""
     }
     alert(counter2)
     //localStorage.setItem('counter2' , counter2)
    
    
    //alert(imageID)
}
