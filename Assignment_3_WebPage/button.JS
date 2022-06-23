
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
var counter3 = 0
var counter4 = 0
var counter5 = 0
var counter6 = 0
function openPicture(imageID){
    //var counter2 = JSON.parse(localStorage.getItem('counter2'))
    if (imageID == 'Image 1') {
        counter2 = counter2 + 1
        if (counter2 % 2== 1){
       image = document.getElementById("BImage1")
       
        image.src = "http://www.outgrabe.net/bird00.jpg"
        }
    
       alert(imageID)
      
    }
    if (imageID == 'Image 2'){
        counter3 = counter3 + 1
        if (counter2 % 2 == 1){
            image = document.getElementById("BImage2")
            
             image.src = "http://www.outgrabe.net/bird01.jpg"
             }

        alert(imageID)
        
     }
     if (imageID == 'Image 3'){
        counter4 = counter4 + 1
        if (counter2 % 2 == 1){
            image = document.getElementById("BImage3")
            
             image.src = "http://www.outgrabe.net/bird02.jpg"
             }
     
        alert(imageID)
       
     }
     if (imageID == 'Image 4'){
        counter5 = counter5 + 1
        if (counter2 % 2 == 1){
            image = document.getElementById("BImage4")
            
             image.src = "http://www.outgrabe.net/bird03.jpg"
             }
     
        alert(imageID)
        
     }
     if (imageID == 'Image 5'){
        counter6 = counter6 + 1
        if (counter2 % 2 == 1){
            image = document.getElementById("BImage5")
            
             image.src = "http://www.outgrabe.net/bird04.jpg"
             }
     
        alert(imageID)
        
     }
    if (counter2 % 2 == 0 ){
        image = document.getElementById("BImage1")
        image.src = ""
     }
     if (counter3 % 2 == 0 ){
        image = document.getElementById("BImage2")
        image.src = ""
     }
     if (counter4 % 2 == 0 ){
        image = document.getElementById("BImage3")
        image.src = ""
     }
     if (counter5 % 2 == 0 ){
        image = document.getElementById("BImage4")
        image.src = ""
     }
     if (counter6 % 2 == 0 ){
        image = document.getElementById("BImage5")
        image.src = ""
     }

     
     alert(counter2)
     //localStorage.setItem('counter2' , counter2)
    
    
    //alert(imageID)
}
