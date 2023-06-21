const endDate = "21 June 2023 10:20 PM"
document.getElementById("enddate").innerText = endDate;
const inputs = document.querySelectorAll("input");


function clock() {
    const end = new Date(endDate);
    const curr = new Date(); //always in miliseconds
    const diff = (end - curr) / 1000 //in seconds 
    if (diff < 0) {
        return
    }
    console.log(diff)

    //Days calculation:-
    inputs[0].value = Math.floor(diff / 3600 / 24); //math.floor for getting the accurte number and not any decimal number

    //Hours Calculator:- remaining hours after days
    inputs[1].value = Math.floor(diff / 3600) % 24;

    //Min Calculator:- remaining min after hours
    inputs[2].value = Math.floor(diff / 60) % 60;

    //Seconds Calculator:- remaining sec after min
    inputs[3].value = Math.floor(diff) % 60;
}

clock();


//to refresh every seconds
setInterval(
    () => {
        clock();
    }, 1000
)