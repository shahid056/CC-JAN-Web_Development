const Api_Key = "9a22a298232f08e5d3d5097711938c44";

const iconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getdata = async (city, units = 'metric') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=${units}`;

    const data = await fetch(url).then((res) => res.json()).then((data) => data);


    const { weather, main: { temp, feels_like, temp_min, temp_max, pressure, humidity }, wind: { speed }, sys: { country }, name, visibility, timezone } = data;

    const { description, icon } = weather[0];

    return {
        description, iconurl: iconURL(icon), temp, temp_min, temp_max, humidity, pressure, name, country, feels_like, speed, visibility, timezone
    }

}

export { getdata };