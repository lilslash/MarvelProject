// api fetch for omdb//\
var HeroMovie = $('#heroName').val()
var apiKey = 'c952a60b'
var apiMovieUrl = 'https://www.omdbapi.com/?t='+HeroMovie+'&apikey='+apiKey

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

$('.btn').on('click', clickEventHandler)


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
            response.json().then(function (data) {
            console.log(data)      
            });
        } 
    })
    
}; 

