function getAPICalls(url){
  // Call the API page
  fetch(url)
  .then((result) => {
    // Get the result
    // If we want text, call result.text()
    return result.json();
  }).then((jsonResult) => {
    // Do something with the result
    console.log(jsonResult);
  })
};
