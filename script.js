// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
  const input = document.getElementById("nomeAmigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome válido!");
    return;
  }

  amigos.push(nome);
  input.value = ""; // limpar o campo
  atualizarLista();
}

// Atualiza a lista na tela
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Sorteia um amigo aleatoriamente
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome para sortear!");
    return;
  }

  const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById("resultado").textContent = `🎉 O amigo secreto é: ${sorteado} 🎉`;
}
