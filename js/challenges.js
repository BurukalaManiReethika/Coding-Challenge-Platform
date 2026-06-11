let allProblems = [];

const challengeContainer =
    document.getElementById("challengeContainer");

const searchInput =
    document.getElementById("searchInput");

fetch("data/problems.json")
    .then(res => res.json())
    .then(data => {

        allProblems = data;

        displayProblems(allProblems);

    });

function displayProblems(problems){

    challengeContainer.innerHTML = "";

    problems.forEach(problem => {

        challengeContainer.innerHTML += `

        <div class="card">

            <h3>${problem.title}</h3>

            <p>${problem.description}</p>

            <span class="difficulty ${problem.difficulty}">
                ${problem.difficulty}
            </span>

            <br><br>

            <a
             href="challenge.html?id=${problem.id}"
             class="btn"
            >
             Solve
            </a>

        </div>

        `;

    });

}

searchInput.addEventListener("input", () => {

    const keyword =
        searchInput.value.toLowerCase();

    const filtered =
        allProblems.filter(problem =>
            problem.title
                .toLowerCase()
                .includes(keyword)
        );

    displayProblems(filtered);

});

document.querySelectorAll(".filter-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        const level =
            button.dataset.filter;

        if(level === "All"){
            displayProblems(allProblems);
            return;
        }

        const filtered =
            allProblems.filter(problem =>
                problem.difficulty === level
            );

        displayProblems(filtered);

    });

});

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        themeBtn.textContent =
            "☀️ Light Mode";
    }else{
        localStorage.setItem("theme","light");
        themeBtn.textContent =
            "🌙 Dark Mode";
    }

});

window.addEventListener("load", () => {

    if(localStorage.getItem("theme")==="dark"){

        document.body.classList.add("dark");

        themeBtn.textContent =
            "☀️ Light Mode";

    }

});
