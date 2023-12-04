function change() {
    let v = document.getElementById("nao");
    let y = Math.floor(Math.random()*500)+1;
    let x = Math.floor(Math.random()*500)+1;
    v.style.left = y + "px";
    v.style.top = x + "px";
}

function uhu () {
    let x = document.getElementById("uhu");
    x.innerHTML = "HOJE TEM CU NEGADAAAAAAAA";
    x.style.fontSize = "150px";
    document.getElementById("sim").style.display = "none";
    document.getElementById("nao").style.display = "none";

}