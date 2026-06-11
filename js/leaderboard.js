const leaderboardBody =
document.getElementById("leaderboardBody");

const solvedProblems =
JSON.parse(
localStorage.getItem("solvedProblems")
) || [];

const streakData =
JSON.parse(
localStorage.getItem("streakData")
) || {
    streak:0
};

document.getElementById("userSolved")
.textContent =
solvedProblems.length;

document.getElementById("userStreak")
.textContent =
streakData.streak;

const leaderboard = [

{
    rank:1,
    name:"You",
    solved:solvedProblems.length,
    badge:getBadge(solvedProblems.length)
},

{
    rank:2,
    name:"Alex",
    solved:12,
    badge:"🥈 Intermediate"
},

{
    rank:3,
    name:"Sarah",
    solved:9,
    badge:"🥉 Beginner"
},

{
    rank:4,
    name:"John",
    solved:7,
    badge:"🥉 Beginner"
},

{
    rank:5,
    name:"Emma",
    solved:5,
    badge:"🥉 Beginner"
}

];

leaderboard.sort(
(a,b)=>b.solved-a.solved
);

leaderboard.forEach((user,index)=>{

user.rank=index+1;

if(user.name==="You"){

document.getElementById("userRank")
.textContent =
"#"+user.rank;

}

leaderboardBody.innerHTML += `
<tr>

<td>${user.rank}</td>

<td>${user.name}</td>

<td>${user.solved}</td>

<td>${user.badge}</td>

</tr>
`;

});

function getBadge(count){

if(count >= 25){
return "🥇 Expert";
}

if(count >= 10){
return "🥈 Intermediate";
}

return "🥉 Beginner";

}

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

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

window.addEventListener("load",()=>{

const theme =
localStorage.getItem("theme");

if(theme==="dark"){

document.body.classList.add("dark");

themeBtn.textContent =
"☀️ Light Mode";

}

});
