
function setName(){
    

    var counter = JSON.parse(localStorage.getItem('counter'))
    var nameCounter = counter

    var my_name = localStorage.getItem('my_name')
    var change = document.getElementById('hello_user')
    change.innerHTML= "Hello " + my_name

    getTheme()

}

function saveName(){
    my_name = document.getElementsByName('user_name')[0].value
    


    localStorage.setItem('my_name' , my_name)
    localStorage.setItem("namesTheme", counter)
    var saved_name = localStorage.getItem('my_name')
    var counter = JSON.parse(localStorage.getItem('counter'))
}



function darktheme(){
    var counter = 0
    var counter = JSON.parse(localStorage.getItem('counter'))
    var element = document.body
    counter = counter + 1

    if (counter % 2 == 0){
        var element = document.body
        element.classList.toggle("darktheme") 
    }

    if (counter % 2 == 1){
        element.classList.remove("darktheme") 
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
        element.classList.toggle("darktheme") 

    }

    if (counter % 2 == 1){
            element.classList.remove("darktheme") 
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

        document.getElementById('img1Txt').textContent = 'Pardalote by fir0002 (CC-by-NC)';
        }
    
       //alert(imageID)
      
    }
    if (imageID == 'Image 2'){
        counter3 = counter3 + 1
        if (counter3 % 2 == 1){
            image = document.getElementById("BImage2")
            
             image.src = "http://www.outgrabe.net/bird01.jpg"

             document.getElementById('img2Txt').textContent = 'Purple swamp hen by Toby Hudson (CC-by-SA)';
             }

       // alert(imageID)
        
     }
     if (imageID == 'Image 3'){
        counter4 = counter4 + 1
        if (counter4 % 2 == 1){
            image = document.getElementById("BImage3")
            
             image.src = "http://www.outgrabe.net/bird02.jpg"

             document.getElementById('img3Txt').textContent = 'White-headed Stilt by JJ Harrison (CC-by-SA)';
             }
     
        //alert(imageID)
       
     }
     if (imageID == 'Image 4'){
        counter5 = counter5 + 1
        if (counter5 % 2 == 1){
            image = document.getElementById("BImage4")
            
             image.src = "http://www.outgrabe.net/bird03.jpg"

             document.getElementById('img4Txt').textContent = 'Inland Thornbill by Peter Jacobs (CC-by-SA)';
             }
     
        //alert(imageID)
        
     }
     if (imageID == 'Image 5'){
        counter6 = counter6 + 1
        if (counter6 % 2 == 1){
            image = document.getElementById("BImage5")
            
             image.src = "http://www.outgrabe.net/bird04.jpg"

             document.getElementById('img5Txt').textContent = 'Rose Robin by JJ Harrison (CC-by-SA)';
             }
     
        //alert(imageID)
        
     }
    if (counter2 % 2 == 0 ){
        image = document.getElementById("BImage1")
        image.src = ""
        document.getElementById('img1Txt').textContent = '';
     }
     if (counter3 % 2 == 0 ){
        image = document.getElementById("BImage2")
        image.src = ""
        document.getElementById('img2Txt').textContent = '';
     }
     if (counter4 % 2 == 0 ){
        image = document.getElementById("BImage3")
        image.src = ""
        document.getElementById('img3Txt').textContent = '';
     }
     if (counter5 % 2 == 0 ){
        image = document.getElementById("BImage4")
        image.src = ""
        document.getElementById('img4Txt').textContent = '';
     }
     if (counter6 % 2 == 0 ){
        image = document.getElementById("BImage5")
        image.src = ""
        document.getElementById('img5Txt').textContent = '';
     }

}
