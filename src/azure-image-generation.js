function generateImage(imageUrl) {
  const endpoint = 'https://_______MiEndpoint______.openai.azure.com/openai/deployments/<your-deployment>/completions';
  const apiKey = '_____MiAPIKey_______';

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
    body: JSON.stringify({ prompt: `Generate an image based on the following URL: ${imageUrl}` })
  };
  
  function isConfigured() {
  const endpoint = process.env.REACT_APP_AZURE_IMAGE_GENERATION_ENDPOINT;
  const apiKey = process.env.REACT_APP_AZURE_IMAGE_GENERATION_API_KEY;

  return endpoint && apiKey;
}

  return fetch(endpoint, requestOptions)
    .then(response => response.json())
    .then(data => {
      // Analiza la respuesta JSON y devuelve los resultados
      return data;
    });
}

export default { isConfigured, generateImage };
