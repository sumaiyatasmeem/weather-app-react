import React, {useState} from 'react';
import DateCalc from './Component/date';
import './App.css';

const API={
  key: "8e89bfccc6a7f0e2f0c9dacddccc93dc",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
    const search = e => {
      if (e.key === "Enter") {
        fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
          .then(r => r.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          });
      }
    }
  
  return (
    <div>
    <main>
    {/*Search*/}
    <div className="m-5 d-flex justify-content-center">
    <input type="text"
    className="p-1"
    placeholder="Search"
    onChange={e=>setQuery(e.target.value)}
    value={query}
    onKeyPress={search}></input>
    </div>
    {(typeof weather.main != "undefined") ? (
    <div>
     {/*Location*/}
    <div className="location text-center text-white">{weather.name},{weather.sys.country}</div>

    {/*Current Date*/}
    <DateCalc/>

     {/*Weather*/}
    <div>
    <div className="display-4 m-5 text-center text-white">{Math.round(weather.main.temp)}°c</div>
    <div className="h4 text-center text-white">{weather.weather[0].main}</div>
    </div>
    </div>
    ) : ('')}
    </main>
    </div>
  )
}

export default App;
