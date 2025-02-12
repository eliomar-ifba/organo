import "./colaborador.css";
import CancelIcon from "@mui/icons-material/Cancel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Tooltip } from "@mui/material";

const Colaborador = ({
  colaborador,
  corDeFundo,
  aoDeletarColaborador,
  aoFavoritarColaborador,
}) => {
  function favoritar() {
    aoFavoritarColaborador(colaborador);
  }

  const propsFavorito = {
    onClick: favoritar,
    fontSize: "large",
  };

  return (
    <div className="colaborador">
      <Tooltip title="Excluir colaborador">
        <CancelIcon
          className="deletar"
          onClick={() => aoDeletarColaborador(colaborador)}
          color="error"
        />
      </Tooltip>

      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favorito">
          {colaborador.favorito ? (
            <Tooltip title="Remover dos Favoritos">
              <FavoriteIcon {...propsFavorito} color="error" />
            </Tooltip>
          ) : (
            <Tooltip title="Favoritar">
              <FavoriteBorderIcon {...propsFavorito} />
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
