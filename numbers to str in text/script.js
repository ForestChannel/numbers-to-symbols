source.oninput = () => {
  resultht.innerHTML = source.value
  resultht.style.color = 'red'
}
function cons() {
  let text = source.value
  newText = text.split('').map((x) => x.toUpperCase())
  let i = 0
  for (let element of newText) {
    switch (element) {
      case '0':
        element = 'O'
        break
      case '1':
        element = 'I'
        break
      case '4':
        element = 'A'
        break
      case '5':
        element = 'S'
        break
      default:
        element
    }
    newText[i] = element
    i++
  }
  let result = newText.join('')
  resultht.style.color = 'green'
  resultht.innerHTML = result
}
