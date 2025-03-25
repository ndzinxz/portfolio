function toggleMenu() {
    var menu = document.getElementById("menu");
    var main = document.getElementById("main");
    
    if (menu.style.left === "-250px") {
        menu.style.left = "0";
        main.style.marginLeft = "250px";
    } else {
        menu.style.left = "-250px";
        main.style.marginLeft = "0";
    }
}