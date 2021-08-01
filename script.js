var cheese = document.querySelectorAll(".square")
var showAll = document.querySelector("#showAll")
var hideAll = document.querySelector("#hideAll")
showAll.addEventListener("click", function () {
    cheese.forEach(function (element) {
        element.style.display = "block"
    })
})
hideAll.addEventListener("click", function () {
    cheese.forEach(function (element) {
        element.style.display = "none"
    })
})
var filter = document.querySelector("#filter")

filter.addEventListener("keyup", function () {
    var colorName = filter.value
    cheese.forEach(function (element) {
        if (element.classList.contains(colorName)) {
            element.style.display = "block"
        }
        else {
            element.style.display = "none"
        }
    })
})


cheese.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        element.style.width = "250px";
        element.style.height = "200px";
    });
});
cheese.forEach(function (element) {
    element.addEventListener("mouseout", function () {
        element.style.width = "230px";
        element.style.height = "`180px";
    });
});