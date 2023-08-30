export default function maiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value);
  if (!validaIdade(dataNascimento)) {
    campo.setCustomValidity("O usuário não é maior de idade!");
  }
}

function validaIdade(data) {
  const dataAtual = new Date();
  const maior = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  console.log(maior);
  return dataAtual >= maior;
}
