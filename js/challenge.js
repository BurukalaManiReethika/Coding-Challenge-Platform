const params =
new URLSearchParams(window.location.search);

const challengeId =
parseInt(params.get("id"));

const title =
document.getElementById("problemTitle");

const difficulty =
document.getElementById("problemDifficulty");

const description =
document.getElementById("problemDescription");

const codeEditor =
document.getElementById("codeEditor");

const outputBox =
document.getElementById("outputBox");

fetch("data/problems.json")
.then(res => res.json())
.then(data => {

    const problem =
    data.find(item => item.id === challengeId);

    if(problem){

        title.textContent =
        problem.title;

        difficulty.textContent =
        problem.difficulty;

        difficulty.className =
        "difficulty " + problem.difficulty;

        description.textContent =
        problem.description;

    }

});

document
.getElementById("runBtn")
.addEventListener("click", () => {

    const code =
    codeEditor.value.trim();

    if(code === ""){

        outputBox.innerHTML =
        "⚠ Please write some code.";

        return;

    }

    outputBox.innerHTML =
    "🚀 Code executed successfully (Demo Mode)";

});

document
.getElementById("submitBtn")
.addEventListener("click", () => {

    let solvedProblems =
    JSON.parse(
    localStorage.getItem("solvedProblems")
    ) || [];

    if(!solvedProblems.includes(challengeId)){

        solvedProblems.push(challengeId);

        localStorage.setItem(
            "solvedProblems",
            JSON.stringify(solvedProblems)
        );

        updateStreak();

        outputBox.innerHTML =
        "🎉 Problem marked as solved!";

    }else{

        outputBox.innerHTML =
        "✅ Already solved.";

    }

});

function updateStreak(){

    const today =
    new Date().toDateString();

    const streakData =
    JSON.parse(
    localStorage.getItem("streakData")
    ) || {
        streak:0,
        lastDate:null
    };

    if(streakData.lastDate !== today){

        streakData.streak++;

        streakData.lastDate = today;

        localStorage.setItem(
            "streakData",
            JSON.stringify(streakData)
        );

    }

}

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(
        document.body.classList.contains("dark")
    ){

        localStorage.setItem(
            "theme",
            "dark"
        );

        themeBtn.textContent =
        "☀️ Light Mode";

    }else{

        localStorage.setItem(
            "theme",
            "light"
        );

        themeBtn.textContent =
        "🌙 Dark Mode";

    }

});

window.addEventListener("load", () => {

    const theme =
    localStorage.getItem("theme");

    if(theme === "dark"){

        document.body.classList.add("dark");

        themeBtn.textContent =
        "☀️ Light Mode";

    }

});
