// para armazenar as tarefas
let tarefas = [];
let tarefasConcluidas = [];

// Função para renderizar a lista de tarefas na página
function renderizarTarefas() {
    const listaTarefas = document.getElementById("lista-tarefas");
    const listaTarefasConcluidas = document.getElementById("tarefas-concluidas");
    listaTarefas.innerHTML = "";
    listaTarefasConcluidas.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const tarefaElemento = document.createElement("div");
        tarefaElemento.textContent = tarefa.descricao;
        tarefaElemento.classList.add("tarefa");
        if (tarefa.concluida) {
            tarefaElemento.classList.add("tarefa-concluida");
            listaTarefasConcluidas.appendChild(tarefaElemento);
        } else {
            const botaoConcluir = document.createElement("button");
            botaoConcluir.textContent = "Concluir";
            botaoConcluir.classList.add("botao-concluir");
            botaoConcluir.addEventListener("click", () => {
                marcarComoConcluida(index);
            });

            tarefaElemento.appendChild(botaoConcluir);
            listaTarefas.appendChild(tarefaElemento);
        }
    });
}

// adicionar uma nova tarefa
function adicionarTarefa(descricao) {
    tarefas.push({ descricao, concluida: false });
    renderizarTarefas();
}

// marcar uma tarefa como concluída
function marcarComoConcluida(index) {
    tarefas[index].concluida = true;
    renderizarTarefas();
}

// envio do formulário para adicionar uma nova tarefa
document.getElementById("form-adicionar").addEventListener("submit", (event) => {
    event.preventDefault();
    const novaTarefaInput = document.getElementById("nova-tarefa");
    const descricao = novaTarefaInput.value;
    adicionarTarefa(descricao);
    novaTarefaInput.value = "";
});
