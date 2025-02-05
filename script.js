let entry = document.getElementById("entry")
entry.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("userName").value;
    let types = document.getElementsByName(`options`)
    for (i = 0; i < types.length; i++){
        if (types[i].checked){
            let type = types[i].id
            if (type == "swiss"){
                document.getElementById('certificate').style.backgroundImage="url(/images/swissCheese.png)";
            } else if (type =="cactus") {
                document.getElementById('certificate').style.backgroundImage="url(/images/cactus.png)";
            } else {
                document.getElementById('certificate').style.backgroundImage="url(/images/pear.png)";
            }
        }

    }
    console.log(name);
    document.getElementById("certifName").textContent = `According to the department of Food Science, you, ${name}, are hereby a certified:`;
});




























