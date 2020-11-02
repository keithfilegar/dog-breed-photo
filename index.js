function generateImage(responseJson) {
    const image = responseJson.message

    return `
        <div>
            <img src="${image}">
        </div>`
}

function getDogImage(dogBreed){
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => {
        if(response.ok) {
            return response.json()
        }
        else {
            throw "Sorry! Breed not found."
        }
    })
    .then(responseJson => $('.js-image-holder').html(generateImage(responseJson)))
    .catch(error => alert(error))
}

function handleUserSubmission() {
    $('form').on('click', '.js-submit', event => {
        event.preventDefault();
        const dogBreed = $('#dogBreed').val().replace(/ /g, "").toLowerCase();
        getDogImage(dogBreed);
    })
}

$(handleUserSubmission)