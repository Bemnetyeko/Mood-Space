function goToTools() {
    const section = document.getElementById("toolsSection");
    section.scrollIntoView({ behavior: "smooth"});
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth'});
    } else { 
        console.warn(`Element with id '${id}' not found.`);
    }
}