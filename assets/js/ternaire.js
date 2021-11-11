let p1 = document.querySelector('p');
let span1 = document.querySelector('#s1').innerHTML;
let span2 = document.querySelector('#s2').innerHTML;
let spanResult = document.querySelector('#result');

let resultat = parseInt(span1) + parseInt(span2);
spanResult.innerHTML = resultat.toString();

if ((resultat - 10) < 0 ) {
    p1.innerHTML = "le résultat des contenus des deux premiers spans additionnés moins 10 est strictement inférieur à 0"
}

else {
    p1.innerHTML = "le résultat des contenus des deux premiers spans additionnés moins 10 n'est pas strictement inférieur à 0"
}

let body = document.querySelector('body');

body.style.backgroundColor = 'blue';