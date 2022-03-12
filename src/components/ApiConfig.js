import React, { useState } from 'react';

function ApiConfig() {
    const [data, setData] = useState([]);

    const APIKey = 'AIzaSyC-MkpxGNHOyAeiVPUZQv_j-AXgiZxf0Jo' //API Key that created from Google API
    const channelID = 'UCAmEkw2CFcsuFQSu_Qy0W7g' //Channel ID
    const resultMax = 6;

    const selfURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=${resultMax}&order=date&key=${APIKey}`

    getData = async (e) => {
        e.preventDefault();
        let api_call = await fetch(selfURL);
        const data = await api_call.json()
        
        console.log(data);
        }


  return (
    <div>ApiConfig</div>
  )
}

export default ApiConfig