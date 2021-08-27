// A
const addTheWordCool = function(array){
    array.push('cool');
    return array;
}
 console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// resultaat: ["nice", "awesome", "tof", "cool"]

//=======================================================================

// B
const amountOfElementsInArray = function(arrayTotal){
    return arrayTotal.length;
}
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
  // 3

//=======================================================================

// C
const selectBelgiumFromBenelux = function (arrayFirstElement){
    return arrayFirstElement[0];
}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
// resultaat: "Belgie" 

//=======================================================================

// D
const lastElementInArray = function (arrayLastElement){
    return arrayLastElement[arrayLastElement.length -1];
}
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"

//=======================================================================

// E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

// .slice
const impeachTrumpSlice = function(arrayPresidents1) {
    return arrayPresidents1.slice(1);
}
console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]

// .splice
const impeachTrumpSplice = function(arrayPresidents2) {
    return arrayPresidents2.splice(1);
}
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(presidents);

//=======================================================================

// F
const stringsTogether = function(stringsJoin){
    return stringsJoin.join(' ');
};
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"

//=======================================================================

// G
const combineArrays = function (arr1, arr2){
    let newArray = arr1.concat(arr2);
    return newArray;
};
console.log(combineArrays([1,2,3], [4,5,6]) );
// resultaat: [1,2,3,4,5,6]