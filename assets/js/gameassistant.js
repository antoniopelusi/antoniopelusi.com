const $ = (id) => document.getElementById(id);
let players = JSON.parse(localStorage.getItem("players") || "[]");
let pending = null;
let timeout = null;
let randomTimeout = null;

const save = () =>
    localStorage.setItem(
        "players",
        JSON.stringify(players.filter((p) => p.name.trim())),
    );

function clearPending() {
    clearTimeout(timeout);
    document
        .querySelectorAll(".pending")
        .forEach((el) => el.classList.remove("pending"));
    pending = null;
}

function danger(id, action) {
    if (pending === id) {
        clearPending();
        action();
    } else {
        clearPending();
        document.querySelector(`[data-id="${id}"]`)?.classList.add("pending");
        pending = id;
        timeout = setTimeout(clearPending, 1000);
    }
}

function getRank(i) {
    const score = players[i].score;
    return players.filter((p) => p.score > score).length + 1;
}

function getRankClass(rank) {
    if (rank === 1) return "gold";
    if (rank === 2) return "silver";
    if (rank === 3) return "bronze";
    return "";
}

function playerHTML(p, i) {
    const rank = getRank(i);
    const noname = p.name.trim() ? "" : " noname";
    return `
        <div id="p${i}" class="${noname}">
            <span class="rank ${getRankClass(rank)}">${rank}</span>
            <input type="text" value="${p.name}" oninput="players[${i}].name=this.value;save();updateNoname(${i})" placeholder="Name" enterkeyhint="done">
            <span class="score-group">
                <button class="score-minus" onclick="players[${i}].score--;save();updateScore(${i})"><img src="/assets/icons/gameassistant/minus.svg"></button>
                <input type="number" value="${p.score}" oninput="players[${i}].score=+this.value;save();updateRanks()" onfocus="this.select()" enterkeyhint="done">
                <button class="score-plus" onclick="players[${i}].score++;save();updateScore(${i})"><img src="/assets/icons/gameassistant/plus.svg"></button>
            </span>
            <button data-id="del${i}" onclick="del(${i})"><img src="/assets/icons/gameassistant/user-xmark.svg"></button>
        </div>
    `;
}

function updateNoname(i) {
    const el = $("p" + i);
    if (players[i].name.trim()) el.classList.remove("noname");
    else el.classList.add("noname");
    updateButtons();
}

function updateButtons() {
    const named = players.filter((p) => p.name.trim()).length;
    $("random").disabled = named < 2;
    $("add").disabled = players.length >= 100;
    $("reset").disabled = named < 1;
}

function updateRanks() {
    document.querySelectorAll(".rank").forEach((el, j) => {
        const rank = getRank(j);
        el.textContent = rank;
        el.className = "rank " + getRankClass(rank);
    });
}

function updateScore(i) {
    $("p" + i).querySelector('input[type="number"]').value = players[i].score;
    updateRanks();
}

const emptyLines = [
    "Game Assistant",
    "Double click to reset the match or delete a player",
    "Add players to start",
];

function render() {
    updateButtons();
    $("list").innerHTML = players.length
        ? players.map((p, i) => playerHTML(p, i)).join("")
        : `<span class="empty"><p>${emptyLines[0]}</p>${emptyLines
              .slice(1)
              .map((l) => `<span>${l}</span>`)
              .join("")}</span>`;
}

function add() {
    if (players.length >= 100) return;
    clearPending();
    const empty = $("list").querySelector(".empty");
    if (empty) {
        empty.classList.add("emptyFadeOut");
        setTimeout(() => empty.remove(), 200);
    }
    players.push({ name: "", score: 0 });
    save();
    updateButtons();
    const div = document.createElement("div");
    div.innerHTML = playerHTML(players[players.length - 1], players.length - 1);
    const newEl = div.firstElementChild;
    newEl.classList.add("fadeIn");
    $("list").appendChild(newEl);
    newEl.querySelector('input[type="text"]').focus();
}

function del(i) {
    danger("del" + i, () => {
        const el = $("p" + i);
        el.classList.add("fadeOut");
        setTimeout(() => {
            players.splice(i, 1);
            save();
            render();
        }, 200);
    });
}

function reset() {
    if (!players.filter((p) => p.name.trim()).length) return;
    danger("reset", () => {
        document
            .querySelectorAll("#list > div")
            .forEach((el) => el.classList.add("fadeOut"));
        setTimeout(() => {
            players = [];
            save();
            render();
        }, 200);
    });
}

function random() {
    const named = players
        .map((p, i) => ({ p, i }))
        .filter(({ p }) => p.name.trim());
    if (named.length < 2) return;
    clearPending();
    clearTimeout(randomTimeout);
    document
        .querySelectorAll("#list > div")
        .forEach((el) => el.classList.remove("highlight"));
    const { i } = named[Math.floor(Math.random() * named.length)];
    const el = $("p" + i);
    el.classList.add("highlight");
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    randomTimeout = setTimeout(() => el?.classList.remove("highlight"), 2000);
}

document.addEventListener("DOMContentLoaded", render);
document.addEventListener("click", (e) => {
    if (!e.target.closest("[data-id]") && !e.target.closest("#reset"))
        clearPending();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.tagName === "INPUT") e.target.blur();
});
