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
        document
            .querySelector(`[data-action="${id}"]`)
            ?.classList.add("pending");
        pending = id;
        timeout = setTimeout(clearPending, 1000);
    }
}

function getRank(i) {
    const score = players[i].score;
    return players.filter((p) => p.score > score).length + 1;
}

function getRankClass(rank) {
    return rank === 1
        ? "gold"
        : rank === 2
          ? "silver"
          : rank === 3
            ? "bronze"
            : "";
}

function playerHTML(p, i) {
    const rank = getRank(i);
    const noname = p.name.trim() ? "" : " noname";
    return `
        <article id="p${i}" class="${noname}">
            <output class="${getRankClass(rank)}">${rank}</output>
            <input type="text" value="${p.name}" placeholder="Name" enterkeyhint="done" data-index="${i}">
            <span>
                <button data-score="-" data-index="${i}"><img src="/assets/icons/gameassistant/minus.svg"></button>
                <input type="number" value="${p.score}" data-index="${i}" enterkeyhint="done">
                <button data-score="+" data-index="${i}"><img src="/assets/icons/gameassistant/plus.svg"></button>
            </span>
            <button data-action="del${i}"><img src="/assets/icons/gameassistant/user-xmark.svg"></button>
        </article>
    `;
}

function updateNoname(i) {
    const el = $("p" + i);
    el.classList.toggle("noname", !players[i].name.trim());
    updateButtons();
}

function updateButtons() {
    const named = players.filter((p) => p.name.trim()).length;
    $("random").disabled = named < 2;
    $("add").disabled = players.length >= 100;
    $("reset").disabled = players.length < 1;
}

function updateRanks() {
    document.querySelectorAll("#list output").forEach((el, j) => {
        const rank = getRank(j);
        el.textContent = rank;
        el.className = getRankClass(rank);
    });
}

function updateScore(i) {
    $("p" + i).querySelector('input[type="number"]').value = players[i].score;
    updateRanks();
}

function render() {
    updateButtons();
    $("list").innerHTML = players.length
        ? players.map((p, i) => playerHTML(p, i)).join("")
        : `<aside class="fadeIn"><p>Game Assistant</p><span>Double click to reset the match or delete a player.</span><span>Add players to start!</span></aside>`;
}

function add() {
    if (players.length >= 100) return;
    clearPending();
    const empty = $("list").querySelector("aside");
    if (empty) {
        empty.classList.add("fadeOut");
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
    if (!players.length) return;
    danger("reset", () => {
        document
            .querySelectorAll("#list > article")
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
        .querySelectorAll("#list > article")
        .forEach((el) => el.classList.remove("highlight"));
    const { i } = named[Math.floor(Math.random() * named.length)];
    const el = $("p" + i);
    el.classList.add("highlight");
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    randomTimeout = setTimeout(() => el?.classList.remove("highlight"), 2000);
}

document.addEventListener("DOMContentLoaded", render);

document.addEventListener("click", (e) => {
    const target = e.target.closest("button");
    if (!target) {
        if (!e.target.closest("[data-action]")) clearPending();
        return;
    }

    if (target.id === "random") random();
    else if (target.id === "add") add();
    else if (target.id === "reset") reset();
    else if (target.dataset.action?.startsWith("del"))
        del(+target.dataset.action.replace("del", ""));
    else if (target.dataset.score) {
        const i = +target.dataset.index;
        players[i].score += target.dataset.score === "+" ? 1 : -1;
        save();
        updateScore(i);
    }
});

document.addEventListener("input", (e) => {
    const i = +e.target.dataset.index;
    if (e.target.type === "text") {
        players[i].name = e.target.value;
        save();
        updateNoname(i);
    } else if (e.target.type === "number") {
        players[i].score = +e.target.value;
        save();
        updateRanks();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.tagName === "INPUT") e.target.blur();
});

document.addEventListener(
    "focus",
    (e) => {
        if (e.target.type === "number") e.target.select();
    },
    true,
);
