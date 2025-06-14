const start = new Date("2025-05-10T17:17:00");

function updateCounter() {
  const now = new Date();

  // Diferença em milissegundos
  const diff = now - start;

  // Cálculo de anos, meses, dias, horas, minutos, segundos
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const restAfterYears = diff % (1000 * 60 * 60 * 24 * 365.25);

  const months = Math.floor(restAfterYears / (1000 * 60 * 60 * 24 * 30));
  const restAfterMonths = restAfterYears % (1000 * 60 * 60 * 24 * 30);

  const days = Math.floor(restAfterMonths / (1000 * 60 * 60 * 24));
  const restAfterDays = restAfterMonths % (1000 * 60 * 60 * 24);

  const hours = Math.floor(restAfterDays / (1000 * 60 * 60));
  const restAfterHours = restAfterDays % (1000 * 60 * 60);

  const minutes = Math.floor(restAfterHours / (1000 * 60));
  const restAfterMinutes = restAfterHours % (1000 * 60);

  const seconds = Math.floor(restAfterMinutes / 1000);

  document.getElementById("counter").innerHTML =
    `${years} anos, ${months} mês, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

setInterval(updateCounter, 1000);
updateCounter();