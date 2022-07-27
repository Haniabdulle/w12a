/* Funtion will add the details for every animal that shows up */
function zooanimals(details) {
 /* this function adds name and image of animal */
    function success_function(response) {
        document.body.insertAdjacentHTML(
          `beforebegin`,
          ` <h1>${response[`data`][`name`]}</h1>
            <img src="${response[`data`][`image_link`]}">   ` ); }

/* Error message if api doesnt work */
  function failure_function (error) {
    document.body.insertAdjacentHTML(
      `afterbegin`,  `
        <h2> Sorry there has been an ERROR </h2>`
    );
  }

/* Requesting access to api */
  axios
    .request({
      url: `https://zoo-animal-api.herokuapp.com/animals/rand`,
    })
// this will call either the success or failure function //
    .then(success_function)
    .catch(failure_function);

}
/* gets the button on the page */
let button = document.querySelector(`button`);
button.addEventListener(`click`, zooanimals);

