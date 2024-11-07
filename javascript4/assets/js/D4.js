
/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log('--ESERCIZIO1--');



function area(l1,l2){return l1*l2;}

console.log(area(5,2));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log('--ESERCIZIO2--');

function crazySum(n1,n2){
   if(n1==n2){return (n1+n2)*3} 
else { return (n1+n1)}}

console.log(crazySum(3,5));
console.log(crazySum(2,2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log('--ESERCIZIO3--');


function crazyDiff(n3,n4=19){
    if(n3>n4){return Math.abs(n3-n4)*3}
    else{return Math.abs(n3-n4)}
}

console.log(crazyDiff(10));
console.log(crazyDiff(29));


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/*NON HO CAPITO*/
console.log('--ESERCIZIO4--');


/* function boundary(n5){
    if(n5>20||n5<=100||n5===400){return myboundary(true);}
    else{return myboundary(false);}
}
console.log(boundary(15));
console.log(boundary(25));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log('--ESERCIZIO5--');

let mystring=' ciao';

function epify(){
   if('epicode'===(mystring.split(' ')[0])){return (mystring)}
 else {return ('epiode'+ mystring)}}
console.log(epify);
/*
let mystring=('ciao mi chiamo matilde')

function epify(){
    if((mystring.split(' ')[0])==='epicode'){return (mystring);}
    else{return ('epicode'+(mystring));}
}
console.log(epify)



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log('--ESERCIZIO6--');


function check3and7(n6){return(n6%3||n6%7)}

console.log(check3and7(21));
console.log(check3and7(25));


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log('--ESERCIZIO7--');
/*

let mystring='epicode'

function reverseString(){
    mystring.split('');
    mystring=mystring.reverse;
return (mystring.reverse) ;
}

console.log(reverseString(mystring))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
