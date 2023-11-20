import React from 'react';
import analyzeImage from './azure-image-analysis';
import generateImage from './azure-image-generation';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '', loading: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleAnalyzeImage = this.handleAnalyzeImage.bind(this);
    this.handleGenerateImage = this.handleGenerateImage.bind(this);
  }

  handleChange(event) {
    this.setState({ url: event.target.value });
  }

  handleAnalyzeImage(event) {
    event.preventDefault();
    if (!azureImageAnalysis.isConfigured()) {
      this.setState({ error: true });
      return;
    }
    this.setState({ loading: true });
    azureImageAnalysis.analyzeImage(this.state.url)
      .then(results => {
        this.setState({ loading: false, results: results });
      });
  }

  handleGenerateImage(event) {
    event.preventDefault();
    if (!azureImageGeneration.isConfigured()) {
      this.setState({ error: true });
      return;
    }
    this.setState({ loading: true });
    azureImageGeneration.generateImage(this.state.url)
      .then(results => {
        this.setState({ loading: false, results: results });
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
        {this.state.error && <p>Error: la aplicación no está configurada correctamente.</p>}
        {this.DisplayResults()}
      </div>
      
    );
  }
}

export default App;
