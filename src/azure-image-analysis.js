function analyzeImage(imageUrl) {
  const endpoint = 'https://_____miEndpoint_____.cognitiveservices.azure.com/vision/v4.0/analyze';
  const apiKey = '_____miApiKey_____';
  const features = 'Objects,Tags,Description';

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Ocp-Apim-Subscription-Key': apiKey },
    body: JSON.stringify({ url: imageUrl, features: features })
  };

  function isConfigured() {
  const endpoint = process.env.REACT_APP_AZURE_IMAGE_ANALYSIS_ENDPOINT;
  const apiKey = process.env.REACT_APP_AZURE_IMAGE_ANALYSIS_API_KEY;

  return endpoint && apiKey;
}

  
  return fetch(endpoint, requestOptions)
    .then(response => response.json())
    .then(data => {
      // Analiza la respuesta JSON y devuelve los resultados
      return data;
    });
}

export default { isConfigured, analyzeImage };
