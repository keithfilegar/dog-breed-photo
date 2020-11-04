function generateImage(responseJson) {
    console.log(responseJson);
    const image = responseJson.message

    $('.js-image-holder').removeClass('hidden')
    return `
        <div>
            <img src="${image}">
        </div>`
}

function getDogImage(dogBreed){
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => {
        if(!response.ok) {
            alert("Sorry! we can't find that breed. Please try another.")
            throw Error(response.status + ": " + response.message)
        }
        return response.json();
    })
    .then(responseJson => $('.js-image-holder').html(generateImage(responseJson)))
    .catch(error => {
        alert("Something went wrong. Please try again later.")
        console.log(error)
    });
}

function handleUserSubmission() {
    $('form').on('click', '.js-submit', event => {
        event.preventDefault();
        const dogBreed = $('#dogBreed').val().replace(/ /g, "").toLowerCase();
        getDogImage(dogBreed);
    })
}

$(handleUserSubmission)