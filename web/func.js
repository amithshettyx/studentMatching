function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
      alert("Please choose a file first!");
      return;
    }
    const reader = new FileReader();
    reader.onload = function(event) {
      const content = event.target.result;
      eel.match_from_file(content)(displayResults);
    };
    reader.readAsText(file);
  }
  
  function displayResults(pairs) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "<h2>Matched Pairs:</h2>";
    pairs.forEach(pair => {
        //const p1 = pair[0]
        //const pairElement = document.createElement("p");
        //const p1Data = document.createElement("p");
        //pairElement.innerText = `${p1.name} WITH ${pair[1].name}`;
        //resultsDiv.appendChild(pairElement);
        const pairElement = document.createElement("div");
        if (pair[0].name == pair[1].name) {
            pairElement.innerHTML = `
            <p>${pair[0].name} is left unmatched :( </p><hr>`;
        } else {
            pairElement.innerHTML = `
            <p>${pair[0].name} WITH ${pair[1].name}</p>
            <p>${pair[0].name} - Study Type: ${pair[0].studyType}, Credit Hours: ${pair[0].creditHours}, Major: ${pair[0].major}</p>
            <p>${pair[1].name} - Study Type: ${pair[1].studyType}, Credit Hours: ${pair[1].creditHours}, Major: ${pair[1].major}</p>
            <hr>`;
        }
        resultsDiv.appendChild(pairElement);
    });
  }