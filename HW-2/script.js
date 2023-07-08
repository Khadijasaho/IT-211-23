function translatePigLatin(str) {
 //var firstVowel = str.match(/aeiou/);
 //var firstPosition = str.indexOf(firstVowel);
 var firstPosition = findfirstVowelPosition(str);
 if (firstPosition > 0){
    return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ou';
}
 return str + "you";
}

function findFirstVowelPosition(str) {
    for (var i=0; i<str.length; i++) {
        if ("aeiou".indexOf(str[i] !== -1))
        return i;
    }
}


translatePigLatin("people are unique")
