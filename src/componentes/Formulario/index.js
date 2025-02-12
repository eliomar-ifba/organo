import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ aoCadastrar, aoCadastrarTime, times }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");
  const [formTimeAtivo, setFormTimeAtivo] = useState(false);

  const aoSubmeter = (evento) => {
    evento.preventDefault(); //pra evitar que o navegador recarregue a página
    console.log("form enviado", nome, cargo, imagem, time);
    aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  const aoSubmeterTime = (evento) => {
    evento.preventDefault(); //pra evitar que o navegador recarregue a página
    console.log("form Time enviado", nomeTime, corTime);

    aoCadastrarTime({
      id: uuidv4(),
      nome: nomeTime,
      cor: corTime,
    });

    setFormTimeAtivo(false);
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Novo Card do colaborador</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome "
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo "
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Informe o endereço da imagem "
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Times"
          items={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          aoClicarNovoTime={() => setFormTimeAtivo(!formTimeAtivo)}
        />
        <Botao texto="Criar card" />
      </form>

      {formTimeAtivo && (
        <form className="formulario" onSubmit={aoSubmeterTime}>
          <h2>Novo Time</h2>
          <Campo
            obrigatorio={true}
            label="Nome Time"
            placeholder="Digite o nome do time "
            valor={nomeTime}
            aoAlterado={(valor) => setNomeTime(valor)}
          />
          <Campo
          type="color"
            obrigatorio={true}
            label="Cor"
            placeholder="Digite a cor "
            valor={corTime}
            aoAlterado={(valor) => setCorTime(valor)}
          />

          <Botao texto="Criar Time" />
        </form>
      )}
    </section>
  );
};

export default Formulario;
