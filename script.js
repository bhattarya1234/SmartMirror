 let count = 0
      let visible = true

window.onload = function(){
   //quotes section
const quotes = [
    {q : "The best way to predict the future is to create it.",
    a : "Peter Drucker"},
    {q : "Success usually comes to those who are too busy to be looking for it.",
    a : "Henry David Thoreau"},
    {q : "Don't watch the clock; do what it does. Keep going.",
    a : "Sam Levenson"},
    {q : "You miss 100% of the shots you don't take.",
    a : "Wayne Gretzky"},
    {q : "The future belongs to those who believe in the beauty of their dreams.",
    a : "Eleanor Roosevelt"},
    {q : "It does not matter how slowly you go as long as you do not stop.",
    a : "Confucius"},
    {q : "The only way to do great work is to love what you do.",
    a : "Steve Jobs"},
    {q : "Success is not the key to happiness. Happiness is the key to success.",
    a : "Albert Schweitzer"},
    {q : "The only limit to our realization of tomorrow will be our doubts of today.",
    a : "Franklin D. Roosevelt"},
    {q : "Act as if what you do makes a difference. It does.",
    a : "William James"},
    {q : "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    a : "Winston S. Churchill"},
    {q : "Believe you can and you're halfway there.",
    a : "Theodore Roosevelt"},
    {q : "The only way to achieve the impossible is to believe it is possible.",
    a : "Charles Kingsleigh"},
   ]
   // let author = []

//    for(key in quotes){
// quotes[count] = quotes[key].q
// author[count] = quotes[key].a
// // console.log(quotes[key].a)
// // console.log(quotes[count] + '=>' + author[count])

// count++

//    }


//id declaration here
let time = document.getElementById('time')
let date = document.getElementById('date')
let todo = document.getElementById('todo')
let quotesDiv = document.getElementById('quotes')
let authorDiv = document.getElementById('author')
let day = document.querySelectorAll('.day')

//inner text handling
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
time.innerText = new Date().toLocaleTimeString()
day.forEach(day => day.innerText = days[new Date().getDay()])
date.innerText = new Date().toLocaleDateString()
let randomQuotes = Math.floor(Math.random() * quotes.length) 
// for quotes
   authorDiv.innerText =quotes[randomQuotes].a
   quotesDiv.innerText =quotes[randomQuotes].q
   // console.log(author[randomQuotes])
   // console.log(quotes[randomQuotes]);


   
   window.hideTodo = function(){  //todo handling
      if(visible){
todo.style.display = 'none'
visible = false
      }else{
todo.style.display = 'block'
       visible = true  
      }

   }

}
  //----------------------------------------------------------------------------------------------------------------------
  
fetch('http://ip-api.com/json/') //for locations and stuffs
  .then(res => res.json())
  .then(data => {
document.getElementById('country').innerHTML = `<i class="fa-solid fa-location-dot"></i> ` + data.city + ', ' +' ' + data.regionName


    console.log('Your IP location:', data);
  })
  .catch(err => console.error(err));
  //----------------------------------------------------------------------------------------------------------------------
 //weather api here
 const Weather = `https://api.openweathermap.org/data/2.5/weather?q=Dhangadhi&appid=7364f729cdf91aad232986ec1800b986` //for weather
 fetch(Weather).then(res => res.json())
 .then(data => {
 let WeatherIco =document.getElementById('WeatherIco')
  if(!data.weather[0].description || data.weather[0].description=== 'clear sky'){
    WeatherIco.src = '6386604.png'
  }else{
   const Imgurl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
   WeatherIco.src = Imgurl
  }
   WeatherIco.title = data.weather[0].description
    console.log(data)
    celcius = Number((data.main.temp - 273.15).toFixed(2))
    document.getElementById('subTemp').style.width= `${celcius}%`
document.getElementById('subTemp').innerHTML = `${celcius}&degC`
 document.getElementById('Humidity').style.width= `${data.main.humidity}%`
document.getElementById('Humidity').innerHTML = `Humidity:${data.main.humidity}%`
 })
 //all music api handling here
const CLIENT_ID = 'c1c29eda'
fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&limit=1`)
.then(res => res.json())
.then(data =>{
   let audio = data.results[0].audio
document.getElementById('audio').src = audio
console.log(audio)
document.getElementById('audio').textContent=`🎵 Now playing:", track.name, "by", track.artist_name `

}).catch(err => console.log(err))
 
