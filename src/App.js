import './App.css';
import { BsSearch, BsClouds, BsSpeedometer } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { IoMdFlashlight } from "react-icons/io";
import { BiWind } from "react-icons/bi";
import Fe_weather from "./Fe_weather";
import { GoLocation } from "react-icons/go"
import wdata from './wdata';
import { useEffect, useState } from 'react';
import { getdata } from './service';


const sun = "https://th.bing.com/th/id/R.367a5afe32707ada3ebc450db2675018?rik=Ld%2f%2fnHRT0x0joA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f3IOi3j1.jpg&ehk=gNj9qXeKDnbmC7Zj4NmXp1FG87CKo4JytiaSCKMs%2bBQ%3d&risl=&pid=ImgRaw&r=0";
const rain = "https://th.bing.com/th/id/R.fb264cd7b9a17bc871374c73ab7b7a67?rik=6CYLKwTaRFkR%2bA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwg4qgvh.jpg&ehk=bQuC8pmeLRMWNZ8O2l1RO6rMDyxQxKqUdvVUo4Ucht8%3d&risl=&pid=ImgRaw&r=0";
const winter = "https://th.bing.com/th/id/R.89c8b6acd3798d397fb37d349ebfc6e9?rik=Yu1ItPEl9nMk6g&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fj7GC3gf.jpg&ehk=kIcg%2bfgyW7blDUOOKHqffxC1h4JXED%2fXhms%2bQZFl0MU%3d&risl=&pid=ImgRaw&r=0";
const night = "https://cdn.wallpapersafari.com/94/13/MDVNk6.jpg";

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Mumbai");
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(sun);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await getdata(city);
      setWeather(data);
      console.log(data);


      //backg
      const threshold = units === 'metric' ? 20 : 60;
      if (data.temp <= threshold) {
        setBg(winter);
      }
      else {
        setBg(sun);
      }
    }
    fetchdata();

  }, [city])
  return (

    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="Container">
        {weather && (
          <div>
            <div className="right">
              <form >
                <BsSearch className='s-icon' />
                <input onChange={(event) => { setCity(event.target.value) }} type="search" className="searhbox" placeholder=" Search City,Place" />
              </form>
            </div>
            <div className="left">
              <div className='card'>
                <div className='head'><h1>Today Weather</h1></div>
                <div className='deg'>
                  <h2>{`${weather.temp}`}°</h2><h5>|{`${weather.description}`}</h5>
                  <img src={weather.iconurl} alt="icon" className='cloud' />
                </div>
                <div className='location'>
                  <GoLocation className='icon-l' />

                  <h1>{`${weather.name},|${weather.country}`}</h1>
                </div>
                <div className='scrol'>

                </div>
                <div className='weatherinfo'>
                  <h1>Weather Info</h1>
                </div>
                <div className='all-data'>
                  <div className='sunset'>
                    <CiTempHigh className='icon-d' />
                    <div className='data'> <h1>{`${weather.temp_max}`}</h1>
                      <h4>Max-temp</h4></div>
                  </div>
                  <div className='sunset'>
                    <CiTempHigh className='icon-d' />
                    <div className='data'> <h1>{`${weather.temp_min}`}</h1>
                      <h4>min-temp</h4></div>
                  </div>
                  <div className='sunset'>
                    <IoMdFlashlight className='icon-d' />
                    <div className='data'> <h1>{`${weather.visibility}`}</h1>
                      <h4>Visibility</h4></div>
                  </div>
                  <div className='Humidity'>
                    <WiHumidity className='icon-d' />
                    <div className='data'>

                      <h1>{`${weather.humidity}`}</h1>
                      <h4>Humidity</h4></div>
                  </div>
                  <div className='Wind'>

                    <BiWind className='icon-d' />
                    <div className='data'> <h1>{`${weather.speed}`}</h1>
                      <h4>wind</h4></div>
                  </div>
                  <div className='Pressure'>

                    <BsSpeedometer className='icon-d' />
                    <div className='data'> <h1>{`${weather.pressure}`}</h1>
                      <h4>pressure</h4></div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        )
        }

      </div>
    </div>
  );
}

export default App;
