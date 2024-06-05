let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("lista-tarefas");
    const listaTarefasConcluidas = document.getElementById("tarefas-concluidas");
    const progresso = document.getElementById("progresso");

    listaTarefas.innerHTML = "";
    listaTarefasConcluidas.innerHTML = "";

    let tarefasPendentes = 0;
    let tarefasCompletas = 0;

    tarefas.forEach((tarefa, index) => {
        const tarefaElemento = document.createElement("div");
        tarefaElemento.textContent = tarefa.descricao;
        tarefaElemento.classList.add("tarefa");

        if (tarefa.concluida) {
            tarefaElemento.classList.add("tarefa-concluida");
            listaTarefasConcluidas.appendChild(tarefaElemento);
            tarefasCompletas++;
        } else {
            const botaoConcluir = document.createElement("button");
            botaoConcluir.textContent = "Concluir";
            botaoConcluir.classList.add("botao-concluir");
            botaoConcluir.addEventListener("click", () => {
                marcarComoConcluida(index);
            });

            const botaoEditar = document.createElement("button");
            botaoEditar.textContent = "Editar";
            botaoEditar.classList.add("botao-editar");
            botaoEditar.addEventListener("click", () => {
                editarTarefa(index);
            });

            const botaoRemover = document.createElement("button");
            botaoRemover.textContent = "Remover";
            botaoRemover.classList.add("botao-remover");
            botaoRemover.addEventListener("click", () => {
                removerTarefa(index);
            });

            tarefaElemento.appendChild(botaoConcluir);
            tarefaElemento.appendChild(botaoEditar);
            tarefaElemento.appendChild(botaoRemover);
            listaTarefas.appendChild(tarefaElemento);
            tarefasPendentes++;
        }
    });

    progresso.innerHTML = `Progresso: ${tarefasCompletas} concluídas de ${tarefas.length} tarefas`;
}

function adicionarTarefa(descricao) {
    tarefas.push({ descricao, concluida: false });
    salvarTarefas();
    renderizarTarefas();
}

function editarTarefa(index) {
    const novaDescricao = prompt("Edite a descrição da tarefa:", tarefas[index].descricao);
    if (novaDescricao !== null && novaDescricao.trim() !== "") {
        tarefas[index].descricao = novaDescricao.trim();
        salvarTarefas();
        renderizarTarefas();
    }
}

function marcarComoConcluida(index) {
    tarefas[index].concluida = true;
    salvarTarefas();
    renderizarTarefas();
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    salvarTarefas();
    renderizarTarefas();
}

document.getElementById("form-adicionar").addEventListener("submit", (event) => {
    event.preventDefault();
    const novaTarefaInput = document.getElementById("nova-tarefa");
    const descricao = novaTarefaInput.value.trim();
    if (descricao) {
        adicionarTarefa(descricao);
        novaTarefaInput.value = "";
    }
});

renderizarTarefas();
