// Haz que la siguiente función esté en modo estricto. Realiza los cambios necesarios en el código para que funcione de la misma forma que antes de aplicar el modo esctricto.
function showResults() {
  result1 = 'Primer valor';

  function private(arguments) {
    eval = ' de ejemplo'
    console.log(arguments+eval);
  }
  private(result1);
  this.scrollTo(0,this.document.body.scrollHeight)
}

document
  .getElementById('resultBtn')
  .addEventListener('click', () => showResults());