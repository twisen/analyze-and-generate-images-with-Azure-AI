import React from 'react';
import analyzeImage from './azure-image-analysis';
import generateImage from './azure-image-generation';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '', loading: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleAnalyzeImage = this.handleAnalyzeImage.bind(this);
  }

  handleChange(event) {
    this.setState({ url: event.target.value });
  }

  handleAnalyzeImage(event) {
    event.preventDefault();
    this.setState({ loading: true });
    analyzeImage(this.state.url)
      .then(results => {
        // Actualiza el estado de la aplicación con los resultados de la API
        this.setState({ loading: false });
      });
  }

  handleGenerateImage(event) {
    event.preventDefault();
    this.setState({ loading: true });
    generateImage(this.state.url)
      .then(results => {
        // Actualiza el estado de la aplicación con los resultados de la API
        this.setState({ loading: false });
      });
  }

  DisplayResults() {
    if (this.state.results) {
      return (
        <div>
          <h2>Resultados</h2>
          <p>Dirección URL de la imagen: {this.state.url}</p>
          <p>Descripción: {this.state.results.description.captions[0].text}</p>
          <p>Etiquetas: {this.state.results.tags.map(tag => tag.name).join(', ')}</p>
          <p>Objetos: {this.state.results.objects.map(object => object.object).join(', ')}</p>
        </div>
      );
    }
  }

  
  render() {
    return (
      <div>
        <h1>Computer Vision</h1>
        <form>
          <label>
            Insertar URL or escribir prompt:
            <input type="text" value={this.state.url} onChange={this.handleChange} />
          </label>
          <br />
          <button type="button" onClick={this.handleAnalyzeImage}>Analizar imagen</button>
          <button type="button" onClick={this.handleGenerateImage>Generar imagen</button>
          {this.state.loading && <span>Procesando...</span>}
        </form>
        {this.DisplayResults()}
      </div>
      
    );
  }
}

export default App;
