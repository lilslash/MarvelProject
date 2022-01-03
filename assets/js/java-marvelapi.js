// api fetch for omdb//\
var HeroMovie = $('#heroName').val()
var apiKey = 'c952a60b'
var apiMovieUrl = 'https://www.omdbapi.com/?t=' + HeroMovie + '&apikey=' + apiKey
var marvelResults = document.getElementById
var moviePicker = function () {
    var apiMovieUrl = 'https://www.omdbapi.com/?t=' + HeroMovie + '&apikey=' + apiKey

    fetch(apiMovieUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data)
                });
            }
        })

};
// grab for the heros name
var clickEventHandler = function (event) {
    event.preventDefault();
    HeroMovie = $('#heroName').val()
    if (HeroMovie === "") {
        alert('Enter a Super Heroes name')
        return
    }
    var timeStamp = Date.now();
    console.log(timeStamp);
    moviePicker(HeroMovie);
    marvelMovie();
};




var marvelMovie = function (_movie) {
    var apiMarvel = 'https://gateway.marvel.com/v1/public/characters?ts=1640114818783&apikey=98605e29ebd8faf1543d213980ac0570&hash=ebdb11d7b51bbc6d766bb9f9edbae1ac&limit=100'

    //Go to website to hash timestamp + private key + public key
    //Change API key back to Max's
    // change marvel hash var to max's hash and change api key in marvelChar var back to max's as well
    var marvelHash = 'b56dd3530e78ec9a6094c3da8597037f'
    var marvelChar = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=01d40b7334fd2e097e7d2d18865f107d&hash=' + marvelHash + '&name=' + HeroMovie;

    fetch(marvelChar)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (comics) {
                    console.log(comics)
                });
            }
        })

};
var fantastic = function (_mrFantastic) {
    var apiMarvel = 'https://gateway.marvel.com/v1/public/characters?ts=1640114818783&apikey=98605e29ebd8faf1543d213980ac0570&hash=ebdb11d7b51bbc6d766bb9f9edbae1ac&limit=100'

    var marvelHash = 'b56dd3530e78ec9a6094c3da8597037f'
    var marvelChar = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=01d40b7334fd2e097e7d2d18865f107d&hash=' + marvelHash + '&name=' + Mr.Fantastic;
    fetch(marvelChar)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data)
                });
            }
        })

}

var heroBtn = document.querySelector("#hero-btn");
var heroCardsEl = document.querySelector('.herocards');
var heroInformation = document.querySelector('#heroInformation');
var moreBtn = document.createElement("button");
var movie05Btn = document.querySelector(".movie05Btn")
var movie07Btn = document.querySelector(".movie07Btn")
var movie15Btn = document.querySelector(".movie15Btn")
var movieHide = $('#movieBlk')

heroCardsEl.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.value !== undefined) {
        var hero = event.target.value;
        var marvelHash = 'b56dd3530e78ec9a6094c3da8597037f'
        var marvelChar = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=01d40b7334fd2e097e7d2d18865f107d&hash=' + marvelHash + '&name=' + hero;
        fetch(marvelChar)
            .then(function (response) {
                if (response.ok) {
                    heroInformation.innerHTML = "";
                    response.json().then(function (data) {
                        var characterInfo = data.data.results[0]
                        var heroImage = document.createElement('img');
                        var comicList = document.createElement('ul');
                        var h2Tag = document.createElement('h2')
                        h2Tag.appendChild(document.createTextNode('comics'))

                        heroImage.setAttribute('src', characterInfo.thumbnail.path + '.jpg')
                        heroImage.setAttribute('height', '500px');

                        for (var i = 0; i < characterInfo.comics.items.length; i++) {
                            var comicListItem = document.createElement('li');
                            comicListItem.textContent = characterInfo.comics.items[i].name + 'More Info: ' + characterInfo.comics.items[i].name
                            comicList.appendChild(comicListItem);
                        }
                        heroInformation.appendChild(h2Tag)
                        heroInformation.appendChild(heroImage)
                        heroInformation.appendChild(comicList)
                        moreBtn.innerHTML = "More about the Fantastic Four"
                        heroInformation.appendChild(moreBtn)
                        console.log(characterInfo)
                        heroCardsEl.classList.add('hide')
                        movie05Btn.classList.add('hide')
                        movie07Btn.classList.add('hide')
                        movie15Btn.classList.add('hide')
                        moreBtn.addEventListener('click', function () {
                            window.location.href = 'https://www.marvel.com/teams-and-groups/fantastic-four'
                        })

                    });
                }
            })
    }

})



movie05Btn.addEventListener('click', (event) => {
    event.preventDefault()
    const movieYear = "2005"
    var moviePoster = document.createElement('img');
    var movieTitle = document.createElement('h1')
    var movieActors = document.createElement('p')
    var movieRelease = document.createElement('p')
    var movieRunTime = document.createElement('p')
    var movieGenre = document.createElement('p')
    var movieDirectors = document.createElement('p')
    var h2Actors = document.createElement('h2')
    h2Actors.appendChild(document.createTextNode('Actors'))
    var h2Release = document.createElement('h2')
    h2Release.appendChild(document.createTextNode('Release'))
    var h2RunTime = document.createElement('h2')
    h2RunTime.appendChild(document.createTextNode('Run time'))
    var h2Genre = document.createElement('h2')
    h2Genre.appendChild(document.createTextNode('Genre'))
    var h2Directors = document.createElement('h2')
    h2Directors.appendChild(document.createTextNode('Director'))
    var apiKey = 'c952a60b';
    var url = "http://www.omdbapi.com/?t=FANTASTIC+FOUR&apikey=" + apiKey;
    $.ajax({
        method: 'Get',

        url: url + '&y=' + movieYear,
        success: function (data) {
            console.log(data)
            var poster = data.Poster
            var title = data.Title
            var actors = data.Actors
            var release = data.Released
            var runTime = data.Runtime
            var genre = data.Genre
            var directors = data.Director

            movieTitle.innerHTML = title
            heroInformation.appendChild(movieTitle)
            moviePoster.setAttribute('src', poster)
            heroInformation.appendChild(moviePoster)
            movieActors.innerHTML = actors
            heroInformation.appendChild(h2Actors)
            heroInformation.appendChild(movieActors)
            heroInformation.appendChild(h2Release)
            movieRelease.innerHTML = release
            heroInformation.appendChild(movieRelease)
            heroInformation.appendChild(h2RunTime)
            movieRunTime.innerHTML = runTime
            heroInformation.appendChild(movieRunTime)
            heroInformation.appendChild(h2Genre)
            movieGenre.innerHTML = genre
            heroInformation.appendChild(movieGenre)
            heroInformation.appendChild(h2Directors)
            movieDirectors.innerHTML = directors
            heroInformation.appendChild(movieDirectors)



            heroCardsEl.classList.add('hide')
            movie05Btn.classList.add('hide')
            movie07Btn.classList.add('hide')
            movie15Btn.classList.add('hide')
        }
    })




})
movie07Btn.addEventListener('click', (event) => {
    event.preventDefault()
    const movieYear = "2007"
    var moviePoster = document.createElement('img');
    var movieTitle = document.createElement('h1')
    var movieActors = document.createElement('p')
    var movieRelease = document.createElement('p')
    var movieRunTime = document.createElement('p')
    var movieGenre = document.createElement('p')
    var movieDirectors = document.createElement('p')
    var h2Actors = document.createElement('h2')
    h2Actors.appendChild(document.createTextNode('Actors'))
    var h2Release = document.createElement('h2')
    h2Release.appendChild(document.createTextNode('Release'))
    var h2RunTime = document.createElement('h2')
    h2RunTime.appendChild(document.createTextNode('Run time'))
    var h2Genre = document.createElement('h2')
    h2Genre.appendChild(document.createTextNode('Genre'))
    var h2Directors = document.createElement('h2')
    h2Directors.appendChild(document.createTextNode('Director'))
    var apiKey = 'c952a60b';
    var url = "http://www.omdbapi.com/?t=FANTASTIC+FOUR&apikey=" + apiKey;
    $.ajax({
        method: 'Get',

        url: url + '&y=' + movieYear,
        success: function (data) {
            console.log(data)
            var poster = data.Poster
            var title = data.Title
            var release = data.Released
            var runTime = data.Runtime
            var genre = data.Genre
            var actors = data.Actors
            var directors = data.Director

            movieTitle.innerHTML = title
            heroInformation.appendChild(movieTitle)
            moviePoster.setAttribute('src', poster)
            heroInformation.appendChild(moviePoster)
            movieActors.innerHTML = actors
            heroInformation.appendChild(h2Actors)
            heroInformation.appendChild(movieActors)
            heroInformation.appendChild(h2Release)
            movieRelease.innerHTML = release
            heroInformation.appendChild(movieRelease)
            heroInformation.appendChild(h2RunTime)
            movieRunTime.innerHTML = runTime
            heroInformation.appendChild(movieRunTime)
            heroInformation.appendChild(h2Genre)
            movieGenre.innerHTML = genre
            heroInformation.appendChild(movieGenre)
            heroInformation.appendChild(h2Directors)
            movieDirectors.innerHTML = directors
            heroInformation.appendChild(movieDirectors)

            heroCardsEl.classList.add('hide')
            movie05Btn.classList.add('hide')
            movie07Btn.classList.add('hide')
            movie15Btn.classList.add('hide')
        }
    })






})
movie15Btn.addEventListener('click', (event) => {
    event.preventDefault()
    const movieYear = "2015"
    var moviePoster = document.createElement('img');
    var movieTitle = document.createElement('h1')
    var movieActors = document.createElement('p')
    var h2Actors = document.createElement('h2')
    var movieRelease = document.createElement('p')
    var movieRunTime = document.createElement('p')
    var movieGenre = document.createElement('p')
    var movieDirectors = document.createElement('p')
    h2Actors.appendChild(document.createTextNode('Actors'))
    var h2Release = document.createElement('h2')
    h2Release.appendChild(document.createTextNode('Release'))
    var h2RunTime = document.createElement('h2')
    h2RunTime.appendChild(document.createTextNode('Run time'))
    var h2Genre = document.createElement('h2')
    h2Genre.appendChild(document.createTextNode('Genre'))
    var h2Directors = document.createElement('h2')
    h2Directors.appendChild(document.createTextNode('Directors'))
    var apiKey = 'c952a60b';
    var url = "http://www.omdbapi.com/?t=FANTASTIC+FOUR&apikey=" + apiKey;
    $.ajax({
        method: 'Get',

        url: url + '&y=' + movieYear,
        success: function (data) {
            console.log(data)
            var poster = data.Poster
            var title = data.Title
            var release = data.Released
            var runTime = data.Runtime
            var genre = data.Genre
            var actors = data.Actors
            var directors = data.Director

            movieTitle.innerHTML = title
            heroInformation.appendChild(movieTitle)
            moviePoster.setAttribute('src', poster)
            heroInformation.appendChild(moviePoster)
            movieActors.innerHTML = actors
            heroInformation.appendChild(h2Actors)
            heroInformation.appendChild(movieActors)
            heroInformation.appendChild(h2Release)
            movieRelease.innerHTML = release
            heroInformation.appendChild(movieRelease)
            heroInformation.appendChild(h2RunTime)
            movieRunTime.innerHTML = runTime
            heroInformation.appendChild(movieRunTime)
            heroInformation.appendChild(h2Genre)
            movieGenre.innerHTML = genre
            heroInformation.appendChild(movieGenre)
            heroInformation.appendChild(h2Directors)
            movieDirectors.innerHTML = directors
            heroInformation.appendChild(movieDirectors)

            heroCardsEl.classList.add('hide')
            movie05Btn.classList.add('hide')
            movie07Btn.classList.add('hide')
            movie15Btn.classList.add('hide')
        }
    })






})


// Add Event Listener Buttons to Each Character to Query MarvelAPI
// Verify which character name or hero name brings back the most information
// Decide how you want that information appended to the page.
// Decide if you want to continue with Fantastic Four or make it a more general Marvel API


