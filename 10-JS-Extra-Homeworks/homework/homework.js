// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
/*
let nueva = []  
let llaves = Object.keys(objeto)

for (let i = 0; i < llaves.length; i++) {
  nueva.push([llaves[i], objeto[llaves[i]]])
}

return nueva*/

/*
nuevoArray = []

for (clave in objeto) {
    nuevoArray.push([clave, objeto[clave]])
  }

return nuevoArray


}*/

/* tambien se puede resolver con object entries*/

return Object.entries(objeto)

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  nuevoObj = {}


  for(let i = 0; i < string.length; i++) {
    if(Object.keys(nuevoObj).includes(string[i])) {
      nuevoObj[string[i]] = nuevoObj[string[i]] +1
    }

    else {
      nuevoObj[string[i]] = 1
    }  

  }
return nuevoObj




}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  /*
  var sp = s.split("");
  var caps = []; 
  var lower = []
  for (var i = 0; i < sp.length; i++)
      {
          if (sp[i] == sp[i].toUpperCase()){              
              caps.push(sp[i]);
      

          }
          if (sp[i] == sp[i].toLowerCase()){
              lower.push(sp[i]);
          }
      }
  return caps.join("").concat(lower.join(""));
*/
  
let mayusculas = ''
let minusculas = ''
for (let i = 0; i < s.length; i++) {
  if(s[i] === s[i].toUpperCase()) {
    mayusculas = mayusculas.concat(s[i])
  } else {
    minusculas += s[i]
  }
  
}

return mayusculas + minusculas

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let array = str.split(' ')
  let nvoArray = []

  array.forEach(function (el) {
    let stringReversed = ''
    for (let i = el.length -1; i >= 0; i--) {
      stringReversed += el[i]
      
    }
    nvoArray.push(stringReversed)
  })

  return nvoArray.join(' ')

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numStr = numero.toString()
  var numR = asAmirror(numStr)
  if (numStr === numR) {
    return 'Es capicua'
  }
  return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
var str = cadena.replace('a','').replace('b','').replace('c','')
return str
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (let i = 0; i < arr.length; i++) {
   var aux = arr[i]
   var j = i - 1
   while (j >=0 && aux.length < arr[j].length) {

    arr[j+1] = arr[j]
    j--
   }
    arr[j+1] = aux
  }
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arr = []
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if(arreglo1[i] === arreglo2[j]) {
        arr.push(arreglo1[i])
      }
    
    
    }  
    
  }

  return arr
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

