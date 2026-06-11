

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        themeBtn.textContent = "☀️ Light Mode";
    }else{
        localStorage.setItem("theme","light");
        themeBtn.textContent = "🌙 Dark Mode";
    }

});


window.addEventListener("load", () => {

    const theme = localStorage.getItem("theme");

    if(theme === "dark"){
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️ Light Mode";
    }

});

// Progress Data

const solved = JSON.parse(
    localStorage.getItem("solvedProblems")
) || [];

const totalChallenges = 50;

document.getElementById("solvedChallenges").textContent =
    solved.length;

document.getElementById("totalChallenges").textContent =
    totalChallenges;

const progress =
    Math.round((solved.length / totalChallenges) * 100);

document.getElementById("progressPercent").textContent =
    progress + "%";
