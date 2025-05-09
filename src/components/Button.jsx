import React from "react";

const Button = ({title, isActive, onSelect}) => {
    return(// controllo se il linguaggio è attivo
      <button 
      onClick={() => onSelect()} 
      className={`btn ${isActive} me-3`}
      >
      {title}
    </button>
   );
};

export default Button;