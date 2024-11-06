/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["la", "nuestra"];
  let adj = ["magnifica", "extraordinaria"];
  let noun = ["cabeza", "pala"];
  let domain = [".es", ".com"];

  pronoun.map(pronombre => {
    adj.map(adjetivo => {
      noun.map(nombre => {
        domain.map(dominio => {
          console.log(pronombre + adjetivo + nombre + dominio);
        });
      });
    });
  });
};
