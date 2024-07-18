function replaceAndPrint() {
    const link = document.getElementById("linkString").value.toLowerCase();
    let newString = link.replace("youtube", "facebook");
    console.log(newString);
}