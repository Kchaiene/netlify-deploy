import React from 'react';



function App() {

  const onLambdaCall = async e => {
    try {
      const resp = await fetch("/api/lambda");
      console.log("Lambda Function Call", resp);
      const data = await resp.json();
      console.log("Lambda Function Call", data);
    } catch (e) {
      console.log("Error ==. Lambda Function Call", e.message);
    }
  };


  return (
    <div className="App">
      <h1>App Netlify Deploy</h1>
      <div>
        <button onClick={onLambdaCall}>Lamda Function Call</button>
      </div>
    </div>
  );
}

export default App;
