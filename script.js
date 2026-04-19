window.onload = function () {
    let display = document.getElementById("display");

    window.appendValue = function(value) {
        display.value += value;
    }

    window.clearDisplay = function() {
        display.value = "";
    }

    window.calculate = function() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    // Button click animation
    let buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.style.transform = "scale(0.9)";
            setTimeout(() => {
                btn.style.transform = "scale(1)";
            }, 100);
        });
    });
}