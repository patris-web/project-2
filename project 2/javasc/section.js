function showsection(sectionid){
    document.querySelectorAll("section").forEach(section =>
    {
        section.style.display = "none";
    })
    document.getElementById(sectionid).style.display = "block";    
}

showsection('Login-section');