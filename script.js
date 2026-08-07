// Starter script for Our Little Universe

document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.getElementById("startBtn");
    const content = document.getElementById("content");

    if (startBtn) {

        startBtn.addEventListener("click", function () {

            content.classList.remove("hidden");

            startBtn.style.display = "none";

        });

    }

});
