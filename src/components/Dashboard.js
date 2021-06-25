import React from 'react'
import WeatherBoard from "./WeatherBoard";

const Dashboard = () =>{
    
    return (
        <section className="dashboard">
            <div className="dashboard-left">
                <div>
                    <div className='dash-large'>Real-Time & Historical</div>
                    <div className='dash-large'>World Weather Data API</div>
                </div>
                <div>
                    <div className='dash-small'>Retrieve instant, accurate weather information for</div>
                    <div className='dash-small'>any location in the world in lightweight JSON format</div>
                </div>
                <div className='dash-small dash-special-1'>
                    <a className="fa fa-trophy"> </a>
                    Trusted by 75,000 companies worldwide
                </div>
                <div>
                    <button className='dash-small dash-button'>START USING THE API</button>
                    <span className='dash-small dash-special-2'>- It's free!</span>
                </div>
            </div>
            <div className="dashboard-right">
                    <WeatherBoard />
            </div>
        </section>
    )
}

export default Dashboard