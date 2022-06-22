
function darktheme(){
    var counter = 0
    if (counter % 2 === 1){
        var element = document.body
        element.classList.toggle("dark") 
    }
    if (counter % 2 === 0){
        var element = document.body
        element.classList = ("light") 
    }
    counter = counter + 1
    return counter
}