function introduction(name = "Ziro"){
    return(`Hi, my name is ${name}.`)    
}

function introductionWithLanguage ( name = "Ziro", language = "Javascript"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional( name = "Ziro", language = "JavaScript"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

function sayHelloTo(fistName = "User"){
    return(`Hello, ${firstName}!`);
}