const toggler = document.querySelector(".btn");
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

function listclick(t) {
    t.classList.toggle("active");
    var img = t.getElementsByTagName("img");
    img[0].src.replace("default", "active");
    document.querySelector(".list-group-item div img").src.replace("default", "active");
}