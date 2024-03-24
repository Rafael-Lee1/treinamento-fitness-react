import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './index.css';

// Componente Exercicio
function Exercicio({ exercicio }) {
    return (
      <div className="exercicio">
        <h3>{exercicio.nome}</h3>
        <p>{exercicio.descricao}</p>
        <ReactPlayer
          url={exercicio.videoUrl}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    );
  }

  export { Exercicio };

// Componente ListaDeExercicios
function ListaDeExercicios({ exercicios }) {
  return (
    <div className="lista-de-exercicios">
      {exercicios.map((exercicio) => (
        <Exercicio key={exercicio.id} exercicio={exercicio} />
      ))}
    </div>
  );
}

// Componente PlanoDeTreinamento
function PlanoDeTreinamento() {
  const [exercicios, setExercicios] = useState([]);
  const [plano, setPlano] = useState([]);
  const [nomePlano, setNomePlano] = useState('');

  useEffect(() => {
    // Simulação de carregamento de exercícios da API ou armazenamento local
    const exerciciosSimulacao = [
        {
        id: 1,
        nome: 'Agachamento',
        descricao: 'Exercício de agachamento para fortalecimento das pernas.',
        videoUrl: 'https://youtu.be/1hwfU_uSQ2k',
        },
        {
        id: 2,
        nome: 'Flexões',
        descricao: 'Exercício de flexões para fortalecimento do peitoral.',
        videoUrl: 'https://youtu.be/4J6nyNGmGm0',
        },
        // Adicione mais exercícios conforme necessário
    ];
    setExercicios(exerciciosSimulacao);
  }, []);

  const adicionarAoPlano = (exercicioId) => {
    const exercicioSelecionado = exercicios.find((exercicio) => exercicio.id === exercicioId);
    setPlano([...plano, exercicioSelecionado]);
  };

  const removerDoPlano = (exercicioId) => {
    const planoAtualizado = plano.filter((exercicio) => exercicio.id !== exercicioId);
    setPlano(planoAtualizado);
  };

  const salvarPlano = () => {
    // Lógica para salvar o plano de treinamento no servidor ou armazenamento local
    alert('Plano de treinamento salvo com sucesso!');
  };

  return (
    <div className="plano-de-treinamento">
      <h1>Plataforma de Treinamento Fitness</h1>
      <h2>Exercícios Disponíveis</h2>
      <ListaDeExercicios exercicios={exercicios} />
      <h2>Seu Plano de Treinamento</h2>
      <div className="seu-plano">
        {plano.map((exercicio) => (
          <div key={exercicio.id} className="plano-exercicio">
            <span>{exercicio.nome}</span>
            <button onClick={() => removerDoPlano(exercicio.id)}>Remover</button>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Nome do plano de treinamento"
        value={nomePlano}
        onChange={(e) => setNomePlano(e.target.value)}
      />
      <button onClick={salvarPlano}>Salvar Plano</button>
    </div>
  );
}

export default PlanoDeTreinamento;
