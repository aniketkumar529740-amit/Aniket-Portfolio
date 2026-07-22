/** About More Text  */

let btn = document.querySelector("#read-more");
let moretext = document.querySelector("#moretext");



btn.addEventListener("click", () => {
 moretext.classList.toggle("show");

 if(moretext.classList.contains("show")){
 btn.innerText = "read less";
 }
 else{
  btn.innerText = "read more";
 }
}) ;


// view more projects 

let button = document.querySelector("#more-projects");
let project = document.querySelectorAll(".hidden-box");

button.addEventListener("click", () =>{

    project.forEach((eachproject) => {
    eachproject.classList.toggle("show")
    })


    if(project[0].classList.contains("show")){
    button.innerText = "View less Projects"}
    else{
        button.innerText = "View All Projects" }

});


// scroll button

const scrollbtn = document.querySelector("#scroll-btn");

window.addEventListener("scroll",() => {
    if(window.scrollY > 200){
        scrollbtn.style.display = "block";
    } else{
        scrollbtn.style.display = "none";
    }
});

scrollbtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behaviour: "smooth"
    })
})





