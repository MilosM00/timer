"use strict"


const timer = document.querySelector(`.timer`);
const buttonStart = document.querySelector(`.start`);

const hours = document.querySelector(`.hours`);
const minutes = document.querySelector(`.minutes`);
const seconds = document.querySelector(`.seconds`);


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