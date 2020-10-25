const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let i = 0;
    let newArray = [];
    while(i<expr.length){
        newArray.push(expr.slice(i, i+10))
        i=i+10
    }
    let newArray2 = newArray.map(function(item){
            let i = 0;
            let newItemArr = [];
            while(i<item.length){
                newItemArr.push(item.slice(i, i+2))
                i=i+2
            }
            let newItemArr2= newItemArr.map(function(item){
                if(item=="10"){return "."}
                if(item=="11"){return "-"}
                if(item=="00"){return ""}
                if(item=="**"){return " "}
            }).join("")
            return newItemArr2
        }
    )
    let newArray3 =newArray2.map(function(item){
        for (var prop in MORSE_TABLE) {
            if(item==prop){
                return item = MORSE_TABLE[prop]
            }
            else if (item == "     "){
                return item = " "
            }
        }
    })
    return newArray3.join("")
}

module.exports = {
    decode
}