import { Tooltip } from "@mui/material";
import Colaborador from "../Colaborador";
import "./time.css";
import hexToRgba from "hex-to-rgba";

const Time = ({
  time,
  colaboradores,
  aoDeletarColaborador,
  aoMudarCorTime,
  aoFavoritarColaborador
}) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(time.cor, 0.5),
        }}
      >
        <Tooltip title="Mudar a cor do time">
          <input
            value={time.cor}
            onChange={(evento) => aoMudarCorTime(evento.target.value, time)}
            type="color"
            className="cor"
          />
        </Tooltip>
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => (
            <Colaborador
              key={indice}
              colaborador={colaborador}
              corDeFundo={time.cor}
              aoDeletarColaborador={aoDeletarColaborador}
              aoFavoritarColaborador={aoFavoritarColaborador}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
