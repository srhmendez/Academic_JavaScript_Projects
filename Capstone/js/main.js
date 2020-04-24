function handleSubmit(event) {
    //prevents function from reloading every time the form is submitted
    event.preventDefault();

    //attaches input to the search bar
    const input = document.querySelector('.searchForm-input').value;
    //console.log(input)
    //removes the whitespace from the search bar input
    if (input == '') {
        alert('Please enter at least one character to search')
    }
    if (input == '#') {
        alert(`I\'m sorry, there are no results for ${input} at this time`)
    }
    if (input == '&') {
        alert(`I\'m sorry, there are no results for ${input} at this time`)
    }
    if (input == '+') {
        alert(`I\'m sorry, there are no results for ${input} at this time`)
    }
    if (input == '~') {
        alert(`I\'m sorry, there are no results for ${input} at this time`)
    }
    const searchQuery = input.trim();
    //console.log(searchQuery)
    //print results of searchQuery to the console
    //console.log(searchQuery)
    //passes the value of searchQuery as a parameter into the fetch Results function below
    fetchResults(searchQuery);

}

//fetches data from the Wikipedia API
function fetchResults(searchQuery) {
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
    //console.log(endpoint)
    //asynchronus function that makes a call to the API and then waits for a response that contains the JSON data
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      const results = data.query.search;
      displayResults(results);
    })
    .catch(() => console.log('An error occurred'));

}

function displayResults(results) {
    //console.log(results);

    //assign search results to the DOM
    const searchResults = document.querySelector('.searchResults');
    //removing the inner elements of the HTML
    searchResults.innerHTML = ' ';

    // Loop over the results array
    results.forEach(result => {
    //result here represents each object in our array
    const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);
    });

    // Loop over results array
    results.forEach(result => {
    const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);

    searchResults.insertAdjacentHTML('beforeend',
      `<div class="resultItem">
        <h3 class="resultItem-title">
          <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
        </h3>
        <span class="resultItem-snippet">${result.snippet}</span><br>
        <a href="${url}" class="resultItem-link" target="_blank" rel="noopener">${url}</a>
      </div>`
    );
  });
}

const form = document.querySelector('.searchForm');
form.addEventListener('submit', handleSubmit);

const refreshButton = document.getElementById('refresh')
refreshButton.addEventListener()



