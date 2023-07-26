const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const body = document.querySelector('body');

const relogio = setInterval(function time() {
  /*Variavel que armazena as horas do sistema*/
  let dateToday = new Date();
  /*Variaveis que recebem as informações do horario*/
  let hora = dateToday.getHours();
  let minuto = dateToday.getMinutes();
  let segundo = dateToday.getSeconds();

  /*Condições para adicionar 0 quando o valor for de 0 a 9*/
  if(hora < 10) hora = "0" + hora;

  if(minuto < 10) minuto = "0" + minuto;

  if(segundo < 10) segundo = "0" + segundo;

  /*Indicando os valores para as inputs correspondente*/
  horas.textContent = hora;
  minutos.textContent = minuto;
  segundos.textContent = segundo;

  /*Condições para adicionar a propriedade dark no body*/
  if(hora > 17 || hora < 6){
    body.classList.add('dark');
  } else{
    body.classList.remove('dark');
  }
});