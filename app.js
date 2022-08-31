const education = document.querySelector("#education");
const recentProjects = document.querySelector("#recent-projects");
const skill = document.querySelector("#skill");
const bio = document.querySelector("#bio");

const educationInfo = document.querySelector("#education-info");
const skillInfo = document.querySelector("#skill-info");
const projectsInfo = document.querySelector("#projects-info");
const bioInfo = document.querySelector("#bio-info");

const aboutMe = document.querySelector("#about-me");


const removeH3s = function() {
    const h3Education = document.querySelector("#h3Education");
    const h3Projects = document.querySelector("#h3Projects");
    const h3Skill = document.querySelector("#h3Skill");
    education.removeChild(h3Education);
    recentProjects.removeChild(h3Projects);
    skill.removeChild(h3Skill);
}

const smallerAboutDivs = function() {
    education.style.height = "100px";
    recentProjects.style.height = "100px";
    skill.style.height = "100px";
    bio.style.height = "100px";

    education.style.width = "10%";
    recentProjects.style.width = "10%";
    skill.style.width = "10%";
    bio.style.width = "10%";
};

const educationActive = function(){
    educationInfo.style.display = "flex";
    skillInfo.style.display = "none";
    projectsInfo.style.display = "none";
    bioInfo.style.display = "none";
    aboutMe.innerText = "EDUCATION"

};

const skillActive = function(){
    educationInfo.style.display = "none";
    skillInfo.style.display = "flex";
    projectsInfo.style.display = "none";
    bioInfo.style.display = "none";
    aboutMe.innerText = "SKILL SET"

};

const projectsActive = function() {
    educationInfo.style.display = "none";
    skillInfo.style.display = "none";
    projectsInfo.style.display = "flex";
    bioInfo.style.display = "none";
    aboutMe.innerText = "PROJECTS"
};

const bioActive = function(){
    educationInfo.style.display = "none";
    skillInfo.style.display = "none";
    projectsInfo.style.display = "none";
    bioInfo.style.display = "flex";
    aboutMe.innerText = "BIO"

};

education.addEventListener("click", function() {
    smallerAboutDivs();
    educationActive();

});

recentProjects.addEventListener("click", function() {
    smallerAboutDivs();   
    projectsActive();
});

skill.addEventListener("click", function() {
    smallerAboutDivs();
    skillActive();
    
});

bio.addEventListener("click", function() {
    smallerAboutDivs();
    bioActive();
    
});

