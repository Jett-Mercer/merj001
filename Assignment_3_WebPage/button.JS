
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

function openPicture(){
    
}
