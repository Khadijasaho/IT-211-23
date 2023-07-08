function toPigLatin(str) {
    if (!str || str.length === 1) {
        return "Input can't be translated";
    }
    
    const vowels = ["a", "e", "i", "o", "u"];
    const words = str.split(" ");
    const pigLatinWords = words.map(word => {
        const firstLetter = word[0].toLowerCase();
        const secondLetter = word[1] ? word[1].toLowerCase() : '';
        if (vowels.includes(firstLetter)) {
            return word + "way";
        } else if (vowels.includes(secondLetter)) {
            return word.slice(1) + firstLetter + "ay";
        } else {
            return word.slice(2) + word.slice(0, 2) + "ay";
        }
    });
    return pigLatinWords.join(" ");
}
console.log(toPigLatin(" people are unique"));