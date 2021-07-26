const ageVerifier = function(age){
    if(age>=18){
        return "Adult";
    }else{
        return "Kiddo";
    }
}

const sayTitle = ageVerifier(20)
console.log("Hey, "+sayTitle)

const calcVat = function (price, vat) {
const sum = price * vat + price
return (sum)
}

const vatCalc = calcVat(2,0.09)
console.log("De eindrekening met btw bedraagt:€ "+vatCalc)
