alert("welcom to the future of animals")

// Seleccionamos la imagen por su ID
document.addEventListener("DOMContentLoaded", function () {
    let img = document.getElementById("imagen");
    let imgb = document.getElementById("imagenb");
    let imgc = document.getElementById("imagenc");


    let imgOriginal = img.src;
    let imgNueva = "tigre2.png";

    let imgOriginalb = imgb.src;
    let imgNuevab = "ajo2.png";

    let imgOriginalc = imgc.src;
    let imgNuevac = "panda2.png";


    img.addEventListener("mouseenter", function () {
        img.src = imgNueva;
    });


    img.addEventListener("mouseleave", function () {
        img.src = imgOriginal;
    });

    imgb.addEventListener("mouseenter", function () {
        imgb.src = imgNuevab;
    });


    imgb.addEventListener("mouseleave", function () {
        imgb.src = imgOriginalb;
    });

    imgc.addEventListener("mouseenter", function () {
        imgc.src = imgNuevac;
    });


    imgc.addEventListener("mouseleave", function () {
        imgc.src = imgOriginalc;
    });
});
