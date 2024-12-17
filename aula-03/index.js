var nome = window.prompt('Qual é o seu nome?')
document.write(`Ola <strong>${nome}</strong>, Seu nome tem ${nome.length} letras.<br>`)
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}<br>`)
document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}<br>`)

//para trocar uma coisa por outra em NUMBER

//exemplo: trocar um ponto (.) por uma virgula (,)
// n1.toFixed(2).replace('.', ',')

//para acrescentar o símbolo do real (R$)
//n1.toLocaleString('pt-br', {Style: 'currency', currency: 'BRL'})