/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generadorDeExcusas() {
    const who = obtenerWhoAleatoria();
    const action = obtenerActionAleatoria();
    const what = obtenerWhatAleatoria();
    const when = obtenerWhenAleatoria();
    const excusa = generarExcusa(who, action, what, when);
    return excusa;
  }
  function obtenerWhoAleatoria() {
    const tiposDeWho = new Array(
      "The dog",
      "My grandma",
      "The mailman",
      "My bird"
    );
    const whoPosition = Math.floor(Math.random() * tiposDeWho.length);
    return tiposDeWho[whoPosition];
  }
  function obtenerActionAleatoria() {
    const tiposDeAction = new Array("ate", "peed", "crushed", "broke");
    const actionPosition = Math.floor(Math.random() * tiposDeAction.length);
    return tiposDeAction[actionPosition];
  }
  function obtenerWhatAleatoria() {
    const tiposDeWhat = new Array("my homework", "my phone", "the car");
    const whatPosition = Math.floor(Math.random() * tiposDeWhat.length);
    return tiposDeWhat[whatPosition];
  }
  function obtenerWhenAleatoria() {
    const tiposDeWhen = new Array(
      "this morning",
      "yesterday",
      "last night",
      "just now"
    );
    const whenPosition = Math.floor(Math.random() * tiposDeWhen.length);
    return tiposDeWhen[whenPosition];
  }
  function generarExcusa(who, action, what, when) {
    return `${who} ${action} ${what} ${when}.`;
  }
  document.getElementById("excuses").innerHTML = generadorDeExcusas();
  console.log("Hello Rigo from the console!");
};
