import React from "react";

const Map = () => {

    return (
        <div className='map'>
            <div className="map-left">
                <div className='map-special'>Access to Global Weather Data, Developer-friendly</div>
                <div>Get instant access to accurate weather data for any geo-point in the world and enjoy a rich set of
                    capabilities:
                </div>
                <div className='map-inner'>
                    <div>
                        <a href="" className='fa fa-random'></a>
                        <span>Real-Time Weather API</span>
                    </div>
                    <div>
                        <a href="" className='fa fa-history'></a>
                        <span>Historical Weather API</span>
                    </div>
                    <div>
                        <a href="" className='fa fa-calendar'></a>
                        <span>Weather Forecasts API</span>
                    </div>
                    <div>
                        <a href="" className='fa fa-street-view'></a>
                        <span>Location Autocomplete</span>
                    </div>
                    <div>
                        <a href="" className='fa fa-database'></a>
                        <span>Bulk API Endpoint</span>
                    </div>
                </div>
            </div>
            <div className="map-right">
                <img className='map-img' src="https://weatherstack.com/site_images/world_map_vector.svg" alt=""/>
            </div>
        </div>
    )
}

export default Map