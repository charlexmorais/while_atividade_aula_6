const quantidadeDeAnos = Number(
    prompt("Quantos anos o piloto esta na escola?")
  );

  let quantidadeDeReciclagens = 0;
  let contador = 0;

  while (contador < quantidadeDeAnos) {
    if (contador % 2 !== 0) {
      quantidadeDeReciclagens++;
    }
    contador++;
  }

  if (isNaN(quantidadeDeAnos)) {
    alert("Voce deve digitar apenas números para receber o dado correto.");
  } else if (quantidadeDeAnos <= 1) {
    alert(
      "Usuario ainda não tem o tempo mínimo de 2 anos para ter uma reciclagem."
    );
  } else {
    alert("Quantidade de reciclagens " + quantidadeDeReciclagens);
  }

