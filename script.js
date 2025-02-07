let entry = document.getElementById("entry");
// Creates a variable representing the form in which values are entered.
const date = new Date();
// Gets the date from the computer
let day = date.getDate();
// Gets the day from the date constant
let month = date.getMonth() + 1;
// Gets the month from the date constant
let year = date.getFullYear();
// Gets the year from the date constant
const swissCheese = new Object();
    swissCheese.awardName = "Swiss Cheese Plant";
    swissCheese.awardImage = "/images/swissCheese.png"
    swissCheese.giver = "Chad (The Man) Brown";
    swissCheese.desc = "What even is that? Are you proud of this?"
// assigns an object that represents the swiss cheese certificate
const cactusAward = new Object();
    cactusAward.awardName = "Cactus";
    cactusAward.awardImage = "/images/cactus.png"
    cactusAward.giver = "Will";
    cactusAward.desc = "You're a Cactus. That's Cool."
// assigns an object that represents the cactus certificate
const pearAward = new Object();
    pearAward.awardName = "Pear";
    pearAward.awardImage = "/images/pear.png"
    pearAward.giver = "John Johnson IIIVXX";
    pearAward.desc = "You're a Pear. Congrats!!"
// assigns an object that represents the pear certificate
entry.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("userName").value;
    // assigns the value of the name variable based on the inputted name by the user
    let types = document.getElementsByName(`options`)
    // creates a list of all of the options in the radio buttons
    let todayDate = `${month}-${day}-${year}`;
    // combines the values of month, day, and year into the todayDate value
    document.getElementById(`date`).textContent = todayDate;
    // puts the value of todayDate onto the certificate
    for (i = 0; i < types.length; i++){
        if (types[i].checked){
            let type = types[i].id
            if (type == "swiss"){
                document.getElementById('background').src = swissCheese.awardImage;
                document.getElementById(`awardName`).textContent = swissCheese.awardName;
                document.getElementById(`giver`).textContent = swissCheese.giver;
                document.getElementById(`description`).textContent = swissCheese.desc;
                // I know this repeats and I could've used a function, but I only realized that in the last 2 hours of the project and I needed to work on other things. So sue me.
            } else if (type =="cactus") {
                document.getElementById('background').src = cactusAward.awardImage;
                document.getElementById(`awardName`).textContent = cactusAward.awardName;
                document.getElementById(`giver`).textContent = cactusAward.giver;
                document.getElementById(`description`).textContent = cactusAward.desc;
            } else {
                document.getElementById('background').src = pearAward.awardImage;
                document.getElementById(`awardName`).textContent = pearAward.awardName;
                document.getElementById(`giver`).textContent = pearAward.giver;
                document.getElementById(`description`).textContent = pearAward.desc;
            }
        }

    }
    console.log(name);
    document.getElementById("certifName").textContent = `According to the department of Food Science, you, ${name}, are hereby a certified:`;
    // puts the name of the user into the certificate
});





















