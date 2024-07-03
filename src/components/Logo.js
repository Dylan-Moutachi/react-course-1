import React from 'react';

const Logo = () => {
  return (
    <div className="logo">
      {/* Considérer qu'on part toujours du dossier public pour l'attribut src du tag img */}
      <img src="logo192.png" alt="logo" />
      <h3>React App</h3>
    </div>
  );
};

export default Logo;
