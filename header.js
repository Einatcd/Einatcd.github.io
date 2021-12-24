fetch('header.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_header");
    let name = oldelem.getAttribute("name")
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
    document.getElementById(name).classList.add("active");
})
