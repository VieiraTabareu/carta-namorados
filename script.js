const start = new Date("2024-05-10T17:17:00");

function updateCounter(){
    const now = new Date();

    // Diferença em milissegundos
    const diff = now - start;

    // Cálculo de anos, meses, dias, horas
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

    const restAfterYears = diff % (1000 * 60 * 60 * 24 * 365.25);
    const months = Math.floor(restAfterYears / (1000 * 60 * 60 * 24 * 30));

    const restAfterMonths = restAfterYears % (1000 * 60 * 60 * 24 * 30);
    const days = Math.floor(restAfterMonths / (1000 * 60 * 60 * 24));

    const restAfterDays = restAfterMonths % (1000 * 60 * 60 * 24);
    const hours = Math.floor(restAfterDays / (1000 * 60 * 60));

    document.getElementById("counter").innerHTML = 
        `${years} Anos, ${months} Meses, ${days} Dias e ${hours} Horas junto!`;
}

setInterval(updateCounter, 1000);
updateCounter();