import React,{ useState} from "react";
import Codes from "./codes";

const DataSection = () => {
    const [code, setCode] = useState('cw')
    let data1 = JSON.stringify(Codes[0], undefined, 4)
    let data2 = JSON.stringify(Codes[1], undefined, 4)
    let data3 = JSON.stringify(Codes[2], undefined, 4)

    const changeCode = (newCode) => {
        setCode(newCode)
    }

    return (
        <div className="data-section">
            <div className="data-example">
                EXAMPLE
            </div>
            <div className='data-text-1'>Complete Weather Data Coverage</div>
            <div className='data-text-2'>Get years of historical weather data, request real-time weather information or make use of accurate weather forecasts.</div>
                <ul className='select-data'>
                    <li className='select-li' style={code==='cw'?{color:'white',backgroundColor:'#f47b21'}:{color:'black',backgroundColor:'white'}} onClick={()=>changeCode('cw')}>Current Weather</li>
                    <li className='select-li' style={code==='wh'?{color:'white',backgroundColor:'#f47b21'}:{color:'black',backgroundColor:'white'}} onClick={()=>changeCode('wh')}>Weather History </li>
                    <li className='select-li' style={code==='wf'?{color:'white',backgroundColor:'#f47b21'}:{color:'black',backgroundColor:'white'}} onClick={()=>changeCode('wf')}>Weather Forecase </li>
                </ul>
            <div className="data-code">
                <pre>
                <code className='code-print'>
                    {code==='cw' && data1}
                    {code==='wh' && data2}
                    {code==='wf' && data3}
                </code>
                </pre>
            </div>
            <div className="data-adv-wrap">
                <div className='data-adv-block'>
                    <a href="" className='fa fa-database'></a>
                    <span>Reliable Data Sources</span>
                    <div>
                        Powered by a strong backbone of data sources, our weather data API comes with the highest level of reliability, consistency and accuracy.
                    </div>
                </div>
                <div className='data-adv-block'>
                    <a href="" className='fa fa-tachometer'></a>
                    <span>Lightning-fast Response</span>
                    <div>
                        Weather data is delivered in lightweight JSON format to ensure a high level of speed and compatibility with any programming language.
                    </div>
                </div>
                <div className='data-adv-block'>
                    <a href="" className='fa fa-angle-up'></a>
                    <span>Scalable Infrastructure</span>
                    <div>
                        Our REST API is backed by scalable cloud infrastructure built and maintained by apilayer, capable of handling billions of requests per day.
                    </div>
                </div>
                <div className='data-adv-block'>
                    <a href="" className='fa fa-search'></a>
                    <span>Flexible Location Lookup</span>
                    <div>
                        Millions of locations can be looked up by city or region name, ZIP code, IP address, or even using latitude and longitude coordinates.
                    </div>
                </div>
                <div className='data-adv-block'>
                    <a href="" className='fa fa-shield'></a>
                    <span>Bank-Level Security</span>
                    <div>
                        All data streams sent to and from the weatherstack API are secured using industry-standard 256-bit HTTPS (SSL) encryption.
                    </div>
                </div>
                <div className='data-adv-block'>
                    <a href="" className='fa fa-map'></a>
                    <span>Extensive API Documentation</span>
                    <div>
                        An API is only as good as its documentation, which is why a series of interactive code examples in multiple languages are waiting for you.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataSection