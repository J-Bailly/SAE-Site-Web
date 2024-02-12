function getLeSaviezVous(){
    const titres =[
        "Premier programmeur:",
        "Origine du terme 'bug':",
        "Ratio de programmeurs par genre:",
        "Langages de programmation les plus populaires:",
        "Évolution des salaires:",
        "Phénomène Open Source:",
        "Cybersécurité:",
        "Télétravail:",
        "Informatique quantique:",
        "Éthique et responsabilité:"
    ];
    const textes = [
        "Ada Lovelace est souvent considérée comme la première programmeuse de l'histoire. Au 19ème siècle, elle a développé un algorithme destiné à être exécuté par la machine analytique de Charles Babbage, ce qui en fait la première à concevoir un programme informatique.",
        "Le terme 'bug', utilisé pour décrire une erreur dans un programme informatique, a été popularisé lorsque Grace Hopper, une programmeuse renommée, a trouvé un véritable insecte (un papillon) coincé dans le relais d'un ordinateur en 1947.",
        "Bien que la diversité dans le domaine de la programmation augmente, il existe toujours un déséquilibre significatif entre les sexes. Selon certaines estimations, environ 80 à 90% des programmeurs sont des hommes.",
        "Les langages de programmation les plus populaires changent constamment, mais des langages tels que Python, JavaScript, Java et C++ sont parmi les plus utilisés dans l'industrie.",
        "Les salaires des professionnels de l'informatique ont tendance à être parmi les plus élevés dans de nombreux pays, en raison de la demande croissante de compétences en technologie et de la pénurie de main-d'œuvre qualifiée.",
        "L'Open Source a considérablement influencé l'industrie informatique. Des projets comme Linux, Apache et MySQL ont été essentiels pour le développement d'Internet et sont tous des logiciels Open Source.",
        "Avec l'essor d'Internet, la cybersécurité est devenue une préoccupation majeure pour de nombreuses entreprises et organisations. Les experts en sécurité informatique sont en forte demande pour protéger les données et les systèmes contre les cyberattaques.",
        "L'industrie informatique a été l'une des premières à adopter le télétravail de manière généralisée. Avant la pandémie de COVID-19, de nombreuses entreprises tech offraient déjà des options de travail à distance à leurs employés.",
        "Bien que toujours émergente, l'informatique quantique promet de révolutionner de nombreux aspects de l'informatique, offrant des capacités de calcul exponentiellement plus puissantes que les ordinateurs classiques.",
        "Avec le développement rapide de la technologie, les questions éthiques et de responsabilité dans le domaine de l'informatique sont de plus en plus importantes. Les professionnels de l'informatique sont de plus en plus encouragés à réfléchir aux implications éthiques de leur travail."
    ];
    const i = Math.floor(Math.random()*titres.length);
    const titre = titres[i];
    const texte = textes[i];
    return [titre,texte];
}

window.addEventListener("load", function(){
    let lesaviezvous = getLeSaviezVous();
    const titre = lesaviezvous[0];
    const texte = lesaviezvous[1];
    this.document.getElementById("lesaviezvous-h").innerHTML = titre;
    this.document.getElementById("lesaviezvous-p").innerHTML = texte;
})