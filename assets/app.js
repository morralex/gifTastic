const btnArray = ["Cats", "Music", "Game of Thrones", "David Bowie", "Seinfield", "Coding", "Simpsons"]

btnArray.forEach(function (name) {
    $("#prompt").append("<button class='blah'>" + name + "</button>")
})
$('.blah').on('click', function (e) {
    e.preventDefault();
    // console.log(e)
    const input = this.innerText
    console.log(input)

    axios.get('http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=whXzdI25neJRlcvNEGsfKSdWNrcCJPpp&limit=10&rating=G')
        .then(function (response) {
            const gifs = response.data.data;
            // console.log(gifs)
            gifs.forEach(function (gif) {
                // console.log(gif.images.original.url)
                const mvg = gif.images.original.url;
                // console.log(mvg);
                $('#gifsgohere').prepend('<img src="' + mvg + '">')
            })

        })

})


$('#submit').on('click', function (e) {
    e.preventDefault();
    var userInput = $('#user-input').val()
    console.log(userInput)

    $('#new-btn').append("<button class='scndSet'>" + userInput + "</button>")

    $('.scndSet').on('click', function (i) {
        i.preventDefault();
        // console.log(e)
        const intxt = this.innerText
        console.log(intxt)
        axios.get('http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=whXzdI25neJRlcvNEGsfKSdWNrcCJPpp&limit=10&rating=G')
            .then(function (response) {
                console.log(response.data)
                const gifs = response.data.data;
                // console.log(gifs)
                gifs.forEach(function (gif) {
                    // console.log(gif.images.original.url)
                    const mvg = gif.images.original.url;
                    // console.log(mvg);
                    $('#gifsgohere').prepend('<img src="' + mvg + '">')
                })
            })
    })


})

