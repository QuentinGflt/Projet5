const daysEl = document.getElementById("days");  // récupère p pour afficher donnée
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const newYears = '1 Jan 2022 UTC+2'; //attribution données 


function countdown() {

    const newYearsDate = new Date(newYears); // récupération des données pour mettre au format Date
    const currentDate = new Date(); 

    const totalSeconds = (newYearsDate - currentDate) / 1000; // total en seconde du temps entre date actuel et date d'arrivée

    const days = Math.floor(totalSeconds / 3600 / 24); // /3600 pour obetnir heures puis /24 pour obtenir 1journée
    const hours = Math.floor(totalSeconds / 3600) % 24; // /3600 pour obtenir heures puis % 24 pour obtenir temps avant fin journée
    const mins = Math.floor(totalSeconds / 60) % 60; // /60 pour obtenir 1min puis % 60 pour obtenir temps avant fin de l'heure
    const seconds = Math.floor(totalSeconds) % 60; // %60 pour obtenir temps avant fin de la minute
 
    
    daysEl.innerHTML = days; 
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

// 
function formatTime(time) {
    return time < 10 ? `0${time}` : time;  // pour afficher les heures, minutes, secondes au format 00 et pas 0 quand valeur < 10
}


countdown();

setInterval(countdown, 1000); // pour actualiser fonction toute les secondes (1000)