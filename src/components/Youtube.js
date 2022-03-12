import React, { useEffect, useState } from 'react';
import './youtube.css';

function Youtube() {
    const [data, setData] = useState([]);

    const APIKey = 'AIzaSyC-MkpxGNHOyAeiVPUZQv_j-AXgiZxf0Jo' //API Key that created from Google API
    const channelID = 'UCAmEkw2CFcsuFQSu_Qy0W7g' //Channel ID
    const resultMax = 6;

    const selfURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=${resultMax}&order=date&key=${APIKey}`

    const apiGet = () => {
        fetch(selfURL)
        .then((response) => response.json())
        .then((json) => {
            const resultYoutube = json.items.map(vid => "https://www.youtube.com/embed/"+vid.id.videoId)
            console.log(resultYoutube);
            setData(resultYoutube);
        })
    }

    useEffect(() => {
        apiGet()
    }, []);

  return (
        <div className='videos-container'>
            <div className='video-wrapper'>
                <h1>Our Videos</h1>
                <span></span>
                <div className='video-list'>
                    <ul className='lists'>
                        {
                            data.map((link, i) => {
                                let iframe = <li key={i}>
                                <div className="videoThumb">
                                    <iframe src={link} title="video" frameBorder="0" allowFullScreen></iframe>
                                </div>
                                </li>
                                return iframe;
                            })
                        }
                        {data.iframe}
                    </ul>
                    <a className='btn btn--secondary' href="https://www.youtube.com/c/BINCANGONLINEINSPIRATIF" target='_blank' rel="noopener noreferrer">
                        MORE VIDEOS
                    </a>
                </div>
            </div>
        </div>
  )
}

export default Youtube