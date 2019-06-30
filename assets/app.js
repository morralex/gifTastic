$('#submit').on('click', function(e) {
    e.preventDefault();
    var userInput = $('#user-input').val()
    axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + userInput)
    .then(function (response){
        console.log(response.data)
        $('.container').append(response.data.Title)
    })
    .catch(function (err) {
        console.error(err)
    })
})
