//
document.getElementById("add").addEventListener("click", function() {
    var cng = document.getElementById("change");
    cng.classList.add("add");
});

document.getElementById("remove").addEventListener("click", function() {
    var rmv = document.getElementById("change")
    rmv.classList.remove("add");
});

document.getElementById("change").addEventListener("mouseover", function() {
    document.getElementById("change").style.color = "green";
})