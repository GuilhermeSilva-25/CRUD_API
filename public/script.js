const API_URL = 'http://localhost:3000/api/usuarios';

const form = document.getElementById('form-estudante');
const inputId = document.getElementById('estudante-id');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const btnLimpar = document.getElementById('btn-limpar');
const corpoTabela = document.getElementById('corpo-tabela');

document.addEventListener('DOMContentLoaded', () => {
    carregarEstudantes();

    form.addEventListener('submit', handleSalvar);
    
    btnLimpar.addEventListener('click', limparFormulario);

    corpoTabela.addEventListener('click', handleAcoesTabela);
});

async function carregarEstudantes() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Falha ao buscar dados da API.');
        }
        const estudantes = await response.json();
        renderizarTabela(estudantes);
    } catch (error) {
        console.error('Erro ao carregar estudantes:', error);
    }
}

async function handleSalvar(event) {
    event.preventDefault();

    const id = inputId.value;
    const nome = inputNome.value;
    const email = inputEmail.value;

    const estudante = { nome, email };

    try {
        if (id) {
            await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(estudante)
            });
            alert('Estudante atualizado com sucesso!');
        } else {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(estudante)
            });
            alert('Estudante criado com sucesso!');
        }
        
        limparFormulario();
        carregarEstudantes();
        
    } catch (error) {
        console.error('Erro ao salvar estudante:', error);
        alert('Ocorreu um erro ao salvar. Tente novamente.');
    }
}

async function deletarEstudante(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        alert('Estudante deletado com sucesso!');
        carregarEstudantes();
        
    } catch (error) {
        console.error('Erro ao deletar estudante:', error);
        alert('Ocorreu um erro ao deletar. Tente novamente.');
    }
}

function renderizarTabela(estudantes) {
    corpoTabela.innerHTML = '';

    if (estudantes.length === 0) {
        corpoTabela.innerHTML = '<tr><td colspan="4">Nenhum estudante cadastrado.</td></tr>';
        return;
    }

    estudantes.forEach(estudante => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${estudante.id}</td>
            <td>${estudante.nome}</td>
            <td>${estudante.email}</td>
            <td class="acoes">
                <button class="btn-editar" data-id="${estudante.id}">Editar</button>
                <button class="btn-deletar" data-id="${estudante.id}">Deletar</button>
            </td>
        `;
        corpoTabela.appendChild(tr);
    });
}

function handleAcoesTabela(event) {
    const target = event.target;

    if (target.classList.contains('btn-deletar')) {
        const id = target.dataset.id;
        if (confirm(`Tem certeza que deseja deletar o estudante ${id}?`)) {
            deletarEstudante(id);
        }
    }

    if (target.classList.contains('btn-editar')) {
        const id = target.dataset.id;
        
        const tr = target.closest('tr');
        const nome = tr.children[1].textContent;
        const email = tr.children[2].textContent;
        
        inputId.value = id;
        inputNome.value = nome;
        inputEmail.value = email;

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function limparFormulario() {
    inputId.value = '';
    inputNome.value = '';
    inputEmail.value = '';
}