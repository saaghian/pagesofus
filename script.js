// ==================================
// 1. OPENING DAN MASUK KE WEBSITE
// ==================================

const startButton = document.getElementById("startButton");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

startButton.addEventListener("click", function () {
    opening.classList.add("hidden");
    mainContent.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ==================================
// 2. TOMBOL LANJUT KE BAGIAN BERIKUTNYA
// ==================================

const nextButtons = document.querySelectorAll("[data-target]");

nextButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const targetId = button.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ==================================
// 3. PENGHITUNG HARI BERSAMA
// ==================================

// Ubah tanggal ini jika tanggal jadian kalian berbeda.
const relationshipDate = new Date("2026-05-09T00:00:00");

function updateDayCounter() {
    const today = new Date();

    const startDate = new Date(
        relationshipDate.getFullYear(),
        relationshipDate.getMonth(),
        relationshipDate.getDate()
    );

    const currentDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );

    const difference = currentDate - startDate;

    const dayCount = document.getElementById("dayCount");

    if (difference < 0) {
        dayCount.textContent = "0";
        return;
    }

    const totalDays = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    ) + 1;

    dayCount.textContent = totalDays.toLocaleString("id-ID");
}

updateDayCounter();


// ==================================
// 4. TOMBOL KEMBALI KE AWAL
// ==================================

const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", function () {
    mainContent.classList.add("hidden");
    opening.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const hearts = ["♡", "♥", "💕", "୨୧"];
    heart.innerHTML = hearts[
        Math.floor(Math.random() * hearts.length)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 15) + "px";
    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 700);