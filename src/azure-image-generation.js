function generateImage(imageUrl) {
  const endpoint = 'https://<your-endpoint>.openai.azure.com/openai/deployments/<your-deployment>/completions';
  const apiKey = '<your-api-key>';

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
    body: JSON.stringify({ prompt: `Generate an image based on the following URL: ${imageUrl}` })
  };

  return fetch(endpoint, requestOptions)
    .then(response => response.json())
    .then(data => {
      // Analiza la respuesta JSON y devuelve los resultados
      return data;
    });
}

export default generateImage;
