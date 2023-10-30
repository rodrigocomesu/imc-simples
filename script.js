const resultado = document.querySelector('#resposta')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 18.5) {
      classification = 'Abaixo do peso, cuidado'
    } else if (imc < 25) {
      classification = 'Peso normal, muito bem'
    } else if (imc < 30) {
      classification = 'Acima do peso'
    } else if (imc < 35) {
      classification = 'Obesidade Grau UM'
    } else if (imc < 41) {
      classification = 'Obesidade Grau DOIS'
    } else {
      classification = 'Obesidade Grau TRES'
    }
    
    resultado.innerHTML = `IMC: ${imc} (${classification})`
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}