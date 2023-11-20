import React from 'react';

function App() {
  const value = 'World';
  return (
      <div>
        <h1>Computer Vision</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Insertar URL or escribir prompt:
            <input type="text" value={this.state.url} onChange={this.handleChange} />
          </label>
          <br />
          <button type="submit">Analizar imagen</button>
          <button type="submit">Generar imagen</button>
        </form>
      </div>
    );
}

export default App;
