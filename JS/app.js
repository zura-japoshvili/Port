
let hide = false; 
function explorerClickFunc() {
    let arrow = document.getElementById("arrow");
    let explorer_ul = document.getElementById("explorer-ul");
    if(hide == false){
        explorer_ul.style.visibility = "hidden";
        arrow.style.transform = "rotate(-90deg)";
        arrow.style.transitionDuration = "0.5s";
        hide = true;
    }else{
        explorer_ul.style.visibility = "visible";
        arrow.style.transform = "rotate(0deg)";
        hide = false;
    }
}


function resetPagesValues(arg){
    home_content = document.getElementById("main-content-home");
    main_skills = document.getElementById("main-content-skills");
    house_icon = document.getElementById("house_icon");
    home_content.style.display = "none";
    house_icon.classList.remove("a-side-active-page");
    home_jsx.classList.remove("nav-active-page");

    about_icon = document.getElementById("about_icon");
    home_jsx = document.getElementById("home_jsx");
    about_html = document.getElementById("about_html");
    main_skills.style.display = "none";
    about_icon.classList.remove("a-side-active-page")
    about_html.classList.remove("nav-active-page")

    const page  = arg;
    pageHidderFunc(page);
}
function pageHidderFunc(page){
    const hidder = page;
    if(hidder === "home"){
        window.home_content.style.display = "flex"
        window.house_icon.classList.add("a-side-active-page");
        window.home_jsx.classList.add("nav-active-page");
    }else if(hidder === "about"){
        window.main_skills.style.display = "flex";
        window.about_icon.classList.add("a-side-active-page");
        window.about_html.classList.add("nav-active-page");
    }

}