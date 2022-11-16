function tabuada() {
  let num = document.getElementById('num')
  let tab = document.getElementById('tabu')
  if (num.value.length == 0) {
    alert('DIGITE UM NÚMERO!!')
  } else {
    let n = Number(num.value)
    let contador = 1
    tab.innerHTML = ''
    while (contador <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${contador} = ${n * contador}`
      tab.appendChild(item)
      contador++
    }
  }
}
