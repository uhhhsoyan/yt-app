import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyDXdyJcuB8jgX-ChJtDze8BJatt-hfz-tg';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm])

    const search = async searchTerm => {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm,
                part: 'snippet',
                maxResults: 5,
                key: KEY,
                type: 'video'
            }
        });

        setVideos(response.data.items)
        
    }

    return [videos, search]
    // note: can also return object (JS convention)
}

export default useVideos;