import React from 'react';
import '../styles/Home.css';

const HomeFrench = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>Votre parcours de remise en forme commence ici</h1>
        <p>Bienvenue sur FitLife Hub, votre compagnon de fitness ultime. Trouvez le meilleur équipement, apprenez différents sports et rejoignez notre communauté d'enthousiastes du fitness.</p>
        <div className="cta-buttons">
          <button onClick={() => window.location.href='/equipment'}>Explorer l'équipement</button>
          <button onClick={() => window.location.href='/community'}>Rejoindre la communauté</button>
        </div>
      </div>
      <div className="features">
        <div className="feature">
          <h2>Large gamme d'équipements</h2>
        </div>
        <div className="feature">
          <h2>Avis d'experts et recommandations</h2>
        </div>
        <div className="feature">
          <h2>Disponible maintenant</h2>
        </div>
        <div className="feature">
          <h2>Livré à votre porte</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeFrench;
