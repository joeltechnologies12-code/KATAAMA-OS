
const clock = document.getElementById("clock");
const appWindow = document.getElementById("window");
const windowTitle = document.getElementById("window-title");
const windowContent = document.getElementById("window-content");

function updateClock() {
    clock.textContent = new Date().toLocaleString();
}

updateClock();
setInterval(updateClock, 1000);

function openApp(name) {
    appWindow.classList.remove("hidden");

    if (name === "about") {
        windowTitle.textContent = "About KATAAMA OS";
        windowContent.textContent =
            "KATAAMA OS is an operating-system project by JOEL TECHNOLOGIES INTERNATIONAL. Founder: Joel Abaho Kataama.";
    }

    if (name === "notes") {
        windowTitle.textContent = "Notes";
        windowContent.innerHTML = `
            <p>Write your notes below:</p>
            <textarea id="notes-area"
                placeholder="Start typing your notes..."></textarea>
            <p><button id="save-notes">Save notes on this page</button></p>
            <p id="notes-status"></p>
        `;

        document.getElementById("save-notes").onclick = () => {
            document.getElementById("notes-status").textContent =
                "Notes are currently in this open page only.";
        };
    }

    if (name === "calculator") {
        windowTitle.textContent = "Calculator";
        windowContent.innerHTML = `
            <p>Enter two numbers to add them.</p>
            <input id="number-one" type="number" placeholder="First number">
            <input id="number-two" type="number" placeholder="Second number">
            <button id="calculate">Add numbers</button>
            <h3 id="answer">Answer: —</h3>
        `;

        document.getElementById("calculate").onclick = () => {
            const a = Number(document.getElementById("number-one").value);
            const b = Number(document.getElementById("number-two").value);

            document.getElementById("answer").textContent =
                "Answer: " + (a + b);
        };
    }

    if (name === "terminal") {
        windowTitle.textContent = "KATAAMA Terminal";
        windowContent.innerHTML = `
            <p>Welcome to the prototype terminal.</p>
            <p>Try: help, about, clear</p>
            <input id="terminal-input" placeholder="Type a command">
            <button id="run-command">Run</button>
            <pre id="terminal-output"></pre>
        `;

        const input = document.getElementById("terminal-input");
        const output = document.getElementById("terminal-output");

        document.getElementById("run-command").onclick = () => {
            const command = input.value.trim().toLowerCase();

            if (command === "help") {
                output.textContent = "Available commands: help, about, clear";
            } else if (command === "about") {
                output.textContent = "KATAAMA OS prototype by Joel Technologies.";
            } else if (command === "clear") {
                output.textContent = "";
            } else {
                output.textContent = "Unknown command. Type help.";
            }

            input.value = "";
        };
    }
}

document.querySelectorAll(".app").forEach((button) => {
    button.addEventListener("click", () => {
        openApp(button.dataset.app);
    });
});

document.getElementById("close-window").onclick = () => {
    appWindow.classList.add("hidden");
};

document.getElementById("home-button").onclick = () => {
    appWindow.classList.add("hidden");
};