let entry = document.getElementById("entry");
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
entry.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("userName").value;
    let types = document.getElementsByName(`options`)
    let todayDate = `${month}-${day}-${year}`;
    document.getElementById(`date`).textContent = todayDate;
    for (i = 0; i < types.length; i++){
        if (types[i].checked){
            let type = types[i].id
            if (type == "swiss"){
                document.getElementById('certificate').style.backgroundImage="url(/images/swissCheese.png)";
                document.getElementById(`awardName`).textContent = `Swiss Cheese Plant`
            } else if (type =="cactus") {
                document.getElementById('certificate').style.backgroundImage="url(/images/cactus.png)";
                document.getElementById(`awardName`).textContent = `Cactus`
            } else {
                document.getElementById('certificate').style.backgroundImage="url(/images/pear.png)";
                document.getElementById(`awardName`).textContent = `Pear`
            }
        }

    }
    console.log(name);
    document.getElementById("certifName").textContent = `According to the department of Food Science, you, ${name}, are hereby a certified:`;
});




























