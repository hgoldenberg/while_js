

alert (Ejercicio Escribiendo While Loops)

// Imprimí todos los números entre -10 y 19

var num =-10
while (num >= -10 && num <20) {
  console.log (num)
  num++
}

alert (Imprimí todos los números pares entre 10 y 40)

var num = 8
while (num <40) {
  console.log (num+=2)
}

alert(Imprimí todos los números impares entre 300 y 333)

var num = 300
while (num <=333)  {
  if (num%2===1) {
    console.log (num)
  }
  num++
}

alert (Imprimí todos los números divisibles por 5 y 3, a la vez, entre 5 y 50)

var num = 5

while (num>=5 && num<=50) {
  if (num%3===0 || num%5===0){
  console.log (num)
  }
  num++
}

alert (Ejercicio Suma Acumulativa)

/* Escribí un while loop que dado un número n (elegilo vos en cada caso),
calculá el producto de todos los enteros positivos entre 0 y n. (1 * 2 * ... * n)
Al terminar el while imprimí el resultado por consola
ej: n=3
El resultado será 1 x 2 x 3 --> 6. */


var n = prompt ("ingrese un numero entero")
var i = 1
while (i<n && n>0) {
    i!==(n-1)?console.log (i+" * "): console.log (i)
    i++
}

alert (Ejercicio Fencepost Loop)

/* Crea una variable n y asignale un entero.
Escribí un while loop que construya un string, compuesto de los números 1 a n, separados por comas.
Como nos podemos asegurar que no haya una coma después del último número? por ejemplo,
para n = 9 print "1, 2, 3, 4, 5, 6, 7, 8, 9" */

var n = prompt ("ingrese un numero entero")
var i = 1
while (i<=n) {
    i==(n)?console.log (i): console.log (i+",")
    i++
}

alert(Ejercicio FizzBuzz)

/*Escribí un programa que imprima en la consola los números del 1 al 100
Ahora para los números que son múltiplos de tres que imprima "Fizz" en lugar de ese número
En los múltiplos de cinco de que imprima "Buzz" en lugar de ese número.
Para los números que son múltiplos de tres y de cinco que imprima "FizzBuzz".*/

var n=1

while (n<=100) {
  console.log (n)
  n%3==0? console.log ("Fizz"):console.log(n)
  n%5==0? console.log ("Buzz"):console.log(n)
  n%3==0&&n%5==0? console.log ("FizzBuzz"):console.log(n)
  n++

}

 alert (Ejercicio Burro-mático)

/* Preguntale al usuario si "ya merito llegamos?"
Hacé que siga preguntando hasta que el usuario responda "si".
Si llegase a responder "Si" o "SI", también debería cortar. (Investiga como funciona el metodo .toLowerCase())
Una vez que responde si crea una alerta que diga, "Bienvenid@ a Muy Muy Lejano!" */


var respuesta
respuesta = prompt ("ya merito llegamos").toLowerCase()

while (respuesta!=="si") {
      respuesta = prompt ("ya merito llegamos?")
    }
if (respuesta==="si") {
alert ("Bienvenid@ a Muy Muy Lejano!")
}



alert (Ejercicio Mayor a 0)

//Escribí un código que le pida a un usuario ingresar un número entero mayor que 0.
//Seguí preguntando por un número hasta que cumpla la condición anterior.

var num = prompt ("ingresa un número entero mayor que 0")

while (prompt ("ingresa un número entero mayor que 0")!==num) {
  prompt ("ingresa un número entero mayor que 0")
}


alert (Ejercicio Piedra, Papel, o Tijera.)

/* Escribí un código que…

Pida input hasta que el usuario introduce ya sea "P", "Pa" o "T"
Usando Math.random () elija un elemento al azar.
Le diga al usuario cuál fue el resultado
Le pregunte al usuario si le gustaría volver a jugar.*/

var P,Pa,T
var jugar = prompt ("Vamos a jugar Piedra, Papel o Tijera?")


while (jugar === "si") {
var input = prompt ("ELEGÍ!! P, Pa o T")
alert ("Ahora elijo yo")
mi_jugada = Math.floor(Math.random() * 3)

if (mi_jugada===0) {
  alert ("Me toco Piedra")
} else if (mi_jugada===1) {
  alert ("Me toco Papel")
} else  {
  alert (" Me tocó Tijera")
}



if (input ==  "P" && mi_jugada==0) {
  alert ("Empatamos")
} else if (input == "P" && mi_jugada==1) {
  alert ("Gane :)")
}else if (input == "P" && mi_jugada==2) {
  alert ("Ganaste :(")
} else if (input ==  "Pa" && mi_jugada==0) {
  alert ("Ganaste :(")
} else if (input == "Pa" && mi_jugada==1) {
  alert ("Empatamos")
}else if (input == "Pa" && mi_jugada==2) {
  alert ("Gane :)")
} else if (input ==  "T" && mi_jugada==0) {
  alert ("Gané :)")
} else if (input == "T" && mi_jugada==1) {
  alert ("Ganaste :(")
}else if (input == "T" && mi_jugada==2) {
  alert ("Empatamos")
} else  {
  ("")
}
jugar = prompt ("Jugamos otra vez?")
}
alert ("Ok jugamos otro dia")


alert (Ejercicio Adiviná un número)

//Usa prompt para pedirle al usuario que de un número entero n. Usa parseInt(n) para convertir de una string a un número.
//Mientras que el resultado sea NaN vas a tener que seguir preguntándole.
//Generá un número random entre 1 y n.
//Pedile al usuario que descubra el número. Decile si se pasaron o estuvieron por debajo del número correcto.
//Que repita el proceso hasta que encuentre el número.
//Usa un contador para hacerles saber cuantas oportunidades usaron hasta adivinar el número correcto.



var num = parseInt(prompt ("Ingresa un número entero"))
var contador=0

while (isNaN(num) ) {
  num = parseInt(prompt ("Ingresa un número entero"))
}

alert ("Ahora es mi turno de elegir un número")


num_random = Math.floor(Math.random() * num) +1

while (num!==num_random) {
if (num>num_random) {
  alert ("Tu número es mayor")
} else {
  alert ("Tu número es menor")}
  contador++
  alert ("Este fue tu intento número: "+contador)
  alert ("Intenta otra vez!")
  num = parseInt(prompt ("Ingresa un número entero"))
  while (isNaN(num) ) {
    num = parseInt(prompt ("Ingresa un número entero"))
  }

  }

alert (Ejercicio Welcome N!)

/* n números están viniendo a una fiesta de números.
Cuando lleguen presentalos a todos los demás que ya llegaron. Tu output debería ser algo como esto para n = 5:

"welcome 1"
"welcome 2, meet 1"
"welcome 3, meet 1 and 2"
"welcome 4, meet 1, 2 and 3"
"welcome 5, meet 1, 2, 3 and 4" */

var n=prompt ("Ingrese la cantidad de participantes que vendran a la fiesta")
var i=0;
while(i<n){

  console.log("Welcome " + (i+1) + "");
  if(i > 0) {
    console.log(", meet");

    var j=0;
    while(j<i){
      if(j > 0){
        if(j == i-1){
          console.log(" and" );
        }else{
          console.log(" ," );
        }
      }
      console.log(" " + (j+1));
      j++
    }
  }
  console.log("\n" );
  i++;
}
