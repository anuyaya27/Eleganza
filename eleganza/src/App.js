import React from 'react';
import UploadImage from './components/UploadImage';
import OutfitSuggestion from './components/OutfitSuggestion';
import WeatherInfo from './components/WeatherInfo';
import './App.css';
import CanvaImage from './assets/images/Eleganza.png';

function App() {
  return (
    <div className="App">
      {/* Canva Design as Embedded iFrame */}
      <header>
        <iframe
          title="Canva Design"
          src="https://www.canva.com/design/DAGgtco5KjI/q9vqMXsexCQBaVlI5loCUg/view"
          width="800"
          height="600"
          frameBorder="0"
          style={{ margin: '0 auto', display: 'block' }}
        ></iframe>
        <h1>Eleganza</h1>
        <p>Your AI-Powered Luxury Outfit Stylist</p>
      </header>

      <div className="container">
        <section className="section-spacing">
          <h2>Wardrobe Digitization</h2>
          <UploadImage />
        </section>

        <section className="section-spacing">
          <h2>Weather Information</h2>
          <WeatherInfo />
        </section>

        <section className="section-spacing">
          <h2>Outfit Suggestions</h2>
          <OutfitSuggestion />
        </section>
      </div>

      <footer>
        <p>&copy; 2025 Eleganza. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
