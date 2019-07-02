function isVowel(x) {  
    return /[AEIOUaeiou]/.test(x); 
  }


function rovarspraket(str) {
    var y = ''
    if(typeof str !== 'string') {
        return str + ''
    }
    for (i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            y += str[i];
        } else {
            y += str[i] + "o" + str[i]
        }
    }
    return y;
}
console.log(rovarspraket(12))