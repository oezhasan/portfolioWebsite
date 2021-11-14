const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");


console.log(sections)
navLinksArray = Array.from(navLinks)
sectionsArray = Array.from(sections);



navLinksArray.forEach((link)=>{

    link.addEventListener("click", function(link){
        updateNavbar(this)

        this.classList.add("nav-link-selected");   
    })
    
});
console.log(sectionsArray[0])


window.onscroll = function(){

    
    if (sectionsArray[0].getBoundingClientRect().bottom > 0){
        updateNavbar(navLinksArray[0]);
    }
    else if(sectionsArray[1].getBoundingClientRect().bottom > 0){
        updateNavbar(navLinksArray[1]);
    }
    else if(sectionsArray[2].getBoundingClientRect().bottom > 0){
        updateNavbar(navLinksArray[2]);
    
    }
}


function updateNavbar(current){
    navLinksArray.forEach((navLink) => {
        if (navLink === current){
            navLink.classList.add("nav-link-selected");   
        }
        else{
            navLink.classList.remove("nav-link-selected");   
        }
    })
}
