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

document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById("titulo");
    const text = element.textContent;
    element.textContent = "";

    const cursor = document.createElement("span");
    cursor.className = "cursor";
    element.appendChild(cursor);

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            element.textContent = text.substring(0, i + 1);
            element.appendChild(cursor);
            i++;
            setTimeout(typeWriter, 40); 
        } else {
            setTimeout(() => {
                i = 0;
                element.textContent = "";
                element.appendChild(cursor);
                typeWriter();
            }, 3000); 
        }
    }
    typeWriter();
});