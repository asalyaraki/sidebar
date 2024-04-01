let _menu = document.getElementById("menu");
let _sidebar = document.getElementById('sideMenu')

let i = 3
function showMenu() {
    if(i % 2){
        
        
        _sidebar.style.transform='translateX(0px)'
        
    }else{
        
        
        _sidebar.style.transform='translateX(-500px)'
        
    }
    i++
}

function _close(){
    _sidebar.style.transform='translateX(-500px)'
    i++
}
