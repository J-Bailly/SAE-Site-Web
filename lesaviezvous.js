function getLeSaviezVous(){
    const lines = [
        "Les métiers de l'informatique sont très bien !",
        "1/4 des étudiants sortant du BUT Informatique intègre directement une entreprise."
    ];
    var line = lines[Math.floor(Math.random()*lines.length)]
    return line;
}

window.addEventListener("load", function(){
    this.document.getElementById("lesaviezvous").innerHTML = getLeSaviezVous();
})