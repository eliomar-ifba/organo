import { Tooltip } from "@mui/material";
import "./lista-suspensa.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ListaSuspensa = ({
  label,
  items,
  valor,
  aoAlterado,
  obrigatorio = false,
  aoClicarNovoTime
}) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        required={obrigatorio}
        value={valor}
        onChange={(evento) => aoAlterado(evento.target.value)}
      >
        <option />
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <Tooltip title="Novo Time">
        <AddCircleIcon 
            className="addTime" 
            color="success" 
            fontSize="large" 
            onClick={() => aoClicarNovoTime()}
            />
      </Tooltip>
    </div>
  );
};

export default ListaSuspensa;
