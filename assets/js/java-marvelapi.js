// api fetch for omdb//
var apiUrl = 'http://www.omdbapi.com/?t=thor&apikey=c952a60b'
var HeroMovie = $('#heroName').val()
var HeroInfo = $('#heroName').val()
var apiKey = 'c952a60b'
var apiMovieUrl = 'http://www.omdbapi.com/?t='+HeroMovie+'&apikey='+apiKey

var moviePicker = function () {
    var apiMovieUrl = 'http://www.omdbapi.com/?t='+HeroMovie+'&apikey='+apiKey
    
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
    moviePicker(HeroMovie)
    marvelMovie(HeroInfo)
};

$('.btn').on('click', clickEventHandler)


var marvelMovie = function (movie) {
    var apiMarvel = 'https://gateway.marvel.com/v1/public/characters?ts=1640114818783&apikey=98605e29ebd8faf1543d213980ac0570&hash=ebdb11d7b51bbc6d766bb9f9edbae1ac&limit=100'
    
    fetch(apiMarvel)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
            console.log(data)      
            });
        } 
    })
    
}; 

