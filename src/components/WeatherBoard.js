import React from 'react'

const WeatherBoard = () =>{

    return (
        <div className="weather-card">
            <div className="cube1 weather-row">
                <div className="text">Burnaby, British Columbia, Canada</div>
            </div>
            <div className="cube1 weather-row">
                <div className="cube2 cube2-wide">
                    <div>
                        <img src="https://weatherstack.com/site_images/weather_icon_partly_cloudy.svg" alt=""/>
                    </div>
                    <div className="text">Partly cloud</div>
                </div>
                <div className="cube2 font-large cube2-wide">19°c</div>
                <div className="cube2 cube2-special cube2-wide">
                    <div className="text">
                        Wind: 15 kmph
                    </div>
                    <div className="text">
                        Precip: 0.9 mm
                    </div>
                    <div className="text">
                        Pressure: 1017 mb
                    </div>
                </div>
            </div>
            <div className="cube1 weather-row">
                <div className="cube2">
                    <div className="text">MON</div>
                    <div>
                        <img src="https://weatherstack.com/site_images/weather_icon_partly_cloudy.svg" alt=""/>
                    </div>
                    <div className="text">14°c</div>
                </div>
                <div className="cube2">
                    <div className="text">TUE</div>
                    <div>
                        <img src="https://weatherstack.com/site_images/weather_icon_partly_cloudy.svg" alt=""/>
                    </div>
                    <div className="text">14°c</div>
                </div>
                <div className="cube2">
                    <div className="text">WED</div>
                    <div>
                        <img src="https://weatherstack.com/site_images/weather_icon_full_clouds.svg" alt="" />
                    </div>
                    <div className="text">17°c</div>
                </div>
                <div className="cube2">
                    <div className="text">THU</div>
                    <div>
                        <img src="https://weatherstack.com/site_images/weather_icon_partly_cloudy.svg" alt=""/>
                    </div>
                    <div className="text">17°c</div>
                </div>
                <div className="cube2">
                    <div className="text">FRI</div>
                    <div>
                        <img src="https://weatherstack.com/site_images/weather_icon_cloud_slight_rain.svg" alt=""/>
                    </div>
                    <div className="text">16°c</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherBoard