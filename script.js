"use strict"


const buttonStart = document.querySelector(`.start`);

const displayHours = document.querySelector(`.display-hours`);
const displayMinutes = document.querySelector(`.display-minutes`);
const displaySeconds = document.querySelector(`.display-seconds`);

const hours = document.querySelector(`.hours`);
const minutes = document.querySelector(`.minutes`);
const seconds = document.querySelector(`.seconds`);


let startTimer = null;
let activeTimer = false;
const sound = new Audio(`timer-sound.mp3`);
sound.loop = true;

const addHours = function(id){
    const select = id;
    const hour = 23;

    for(let i = 0; i <= hour; i++){
        select.options[select.options.length] = new Option(i < 10 ? `0` + i : i);
    }
};
addHours(hours);

const addMinutes = function(id){
    const select = id;
    const minute = 59;

    for(let i = 0; i <= minute; i++){
        select.options[select.options.length] = new Option(i < 10 ? `0` + i : i);
    }
};
addMinutes(minutes);

const addSeconds = function(id){
    const select = id;
    const second = 59;

    for(let i = 0; i <= second; i++){
        select.options[select.options.length] = new Option(i < 10 ? `0` + i : i);
    }
};
addMinutes(seconds);


buttonStart.addEventListener(`click`, () =>{
    if(activeTimer === false){
        displayHours.textContent = hours.value;
        displayMinutes.textContent = minutes.value;
        displaySeconds.textContent = seconds.value;

        hours.disabled = true;
        minutes.disabled = true;
        seconds.disabled = true;

        buttonStart.textContent = `STOP`;

        const countdown = function(){
            
            if(displaySeconds.textContent === `00` && displayMinutes.textContent === `00` && displayHours.textContent === `00`){
                displayHours.textContent = `00`;
                displayMinutes.textContent = `00`;
                displaySeconds.textContent = `00`;

                sound.play();
            }

            else if(displaySeconds.textContent !== `00`){
                displaySeconds.textContent--;
            }

            else if(displayMinutes.textContent !== `00` && displaySeconds.textContent === `00`){
                displaySeconds.textContent = `59`;
                displayMinutes.textContent--;
            }

            else if(displayHours.textContent !== `00` && displayMinutes.textContent === `00`){
                displayMinutes.textContent = `59`;
                displaySeconds.textContent = `59`;
                displayHours.textContent--;
            }

            switch(displaySeconds.textContent){
                case `0`: displaySeconds.textContent = `00`; break;
                case `1`: displaySeconds.textContent = `01`; break;
                case `2`: displaySeconds.textContent = `02`; break;
                case `3`: displaySeconds.textContent = `03`; break;
                case `4`: displaySeconds.textContent = `04`; break;
                case `5`: displaySeconds.textContent = `05`; break;
                case `6`: displaySeconds.textContent = `06`; break;
                case `7`: displaySeconds.textContent = `07`; break;
                case `8`: displaySeconds.textContent = `08`; break;
                case `9`: displaySeconds.textContent = `09`; break;
        
                default: displaySeconds.textContent;  
            }

            switch(displayMinutes.textContent){
                case `0`: displayMinutes.textContent = `00`; break;
                case `1`: displayMinutes.textContent = `01`; break;
                case `2`: displayMinutes.textContent = `02`; break;
                case `3`: displayMinutes.textContent = `03`; break;
                case `4`: displayMinutes.textContent = `04`; break;
                case `5`: displayMinutes.textContent = `05`; break;
                case `6`: displayMinutes.textContent = `06`; break;
                case `7`: displayMinutes.textContent = `07`; break;
                case `8`: displayMinutes.textContent = `08`; break;
                case `9`: displayMinutes.textContent = `09`; break;
        
                default: displayMinutes.textContent;  
            }

            switch(displayHours.textContent){
                case `0`: displayHours.textContent = `00`; break;
                case `1`: displayHours.textContent = `01`; break;
                case `2`: displayHours.textContent = `02`; break;
                case `3`: displayHours.textContent = `03`; break;
                case `4`: displayHours.textContent = `04`; break;
                case `5`: displayHours.textContent = `05`; break;
                case `6`: displayHours.textContent = `06`; break;
                case `7`: displayHours.textContent = `07`; break;
                case `8`: displayHours.textContent = `08`; break;
                case `9`: displayHours.textContent = `09`; break;
        
                default: displayHours.textContent;  
            }


        };

        const startInterval = function(){
            startTimer = setInterval(function(){
                countdown();
            }, 1000);
        };
        startInterval();

        activeTimer = true;
    }
    else{
        hours.disabled = false;
        minutes.disabled = false;
        seconds.disabled = false;

        displayHours.textContent = `00`;
        displayMinutes.textContent = `00`;
        displaySeconds.textContent = `00`;

        buttonStart.textContent = `START`;
        
        activeTimer = false;
        clearInterval(startTimer);
        sound.pause();
    }
});

