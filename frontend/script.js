async function testServer() {
    const serverConfig = document.getElementById('serverConfig').value;
    const resultDiv = document.getElementById('result');
  
    try {
      const response = await fetch('http://localhost:3000/test-server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ serverConfig: { url: serverConfig } })
      });
      const data = await response.json();
      resultDiv.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      resultDiv.textContent = 'Error connecting to server: ' + error.message;
    }
  }
  