// api fetch for omdb//\
var HeroMovie = $('#heroName').val()
var apiKey = 'c952a60b'
var apiMovieUrl = 'https://www.omdbapi.com/?t='+HeroMovie+'&apikey='+apiKey
var marvelResults = document.getElementById
var moviePicker = function () {
    var apiMovieUrl = 'https://www.omdbapi.com/?t='+HeroMovie+'&apikey='+apiKey
    
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
var clickEventHandler = function(event){
    event.preventDefault();
    HeroMovie = $('#heroName').val()
    if(HeroMovie === ""){
        alert('Enter a Super Heroes name')
        return
    }
    var timeStamp = Date.now();
    console.log(timeStamp);
    moviePicker(HeroMovie);
    marvelMovie();
};

//$('.btn').on('click', clickEventHandler)


var marvelMovie = function (movie) {
    var apiMarvel = 'https://gateway.marvel.com/v1/public/characters?ts=1640114818783&apikey=98605e29ebd8faf1543d213980ac0570&hash=ebdb11d7b51bbc6d766bb9f9edbae1ac&limit=100'

    //Go to website to hash timestamp + private key + public key
    //Change API key back to Max's
    // change marvel hash var to max's hash and change api key in marvelChar var back to max's as well
    var marvelHash = 'b56dd3530e78ec9a6094c3da8597037f'
    var marvelChar = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=01d40b7334fd2e097e7d2d18865f107d&hash='+ marvelHash + '&name='+ HeroMovie;
    
    fetch(marvelChar)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (comics) {
            console.log(comics)      
            });
        } 
    })
    
}; 
var fantastic = function (mrFantastic) {
    var apiMarvel = 'https://gateway.marvel.com/v1/public/characters?ts=1640114818783&apikey=98605e29ebd8faf1543d213980ac0570&hash=ebdb11d7b51bbc6d766bb9f9edbae1ac&limit=100'

    var marvelHash = 'b56dd3530e78ec9a6094c3da8597037f'
    var marvelChar = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=01d40b7334fd2e097e7d2d18865f107d&hash='+ marvelHash + '&name='+ Mr. Fantastic;
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
var movieBtn = document.createElement("button");
var moreBtn = document.createElement("button");

heroCardsEl.addEventListener('click', function(event) {
    event.preventDefault();
    if(event.target.value !== undefined) {
        var hero = event.target.value;
        var marvelHash = 'b56dd3530e78ec9a6094c3da8597037f'
        var marvelChar = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=01d40b7334fd2e097e7d2d18865f107d&hash='+ marvelHash + '&name='+ hero;
        fetch(marvelChar)
        .then(function (response) {
            if (response.ok) {
                heroInformation.innerHTML = "";
                response.json().then(function (data) {
                var characterInfo = data.data.results[0]
                var heroImage = document.createElement('img');
                var comicList = document.createElement('ul');

                
                heroImage.setAttribute('src', characterInfo.thumbnail.path + '.jpg')
                heroImage.setAttribute('height', '500px');

                for(var i = 0; i < characterInfo.comics.items.length; i++) {
                    var comicListItem = document.createElement('li');
                    comicListItem.textContent = characterInfo.comics.items[i].name + 'More Info: ' + characterInfo.comics.items[i].name
                    comicList.appendChild(comicListItem);
                }

                heroInformation.appendChild(heroImage)
                heroInformation.appendChild(comicList)
                movieBtn.innerHTML = "Movie"
                moreBtn.innerHTML = "More about the character"
                heroInformation.appendChild(movieBtn)
                heroInformation.appendChild(moreBtn)

                console.log(characterInfo)
                heroCardsEl.classList.add('hide')
                
                });
            } 
        })
    }

})

moreBtn.addEventListener('click',function(event){

    window.location.href = 'https://www.marvel.com/characters/mister-fantastic/in-comics/profile'
})

// Add Event Listener Buttons to Each Character to Query MarvelAPI
// Verify which character name or hero name brings back the most information
// Decide how you want that information appended to the page. 
// Decide if you want to continue with Fantastic Four or make it a more general Marvel API


