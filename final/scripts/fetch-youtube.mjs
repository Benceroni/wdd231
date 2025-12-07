const playlistURL = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCUekuiQDM_A2237QIk5_f-w&key=AIzaSyAo-VDju_qyliZ4wK88GuHwHSDmAo5nRkc"

async function fetchPlaylist() {
    try{
        const response = await fetch(playlistURL);
        if (response.ok){
            const playlist = await response.json();
            console.table(playlist.items[0].contentDetails.relatedPlaylists.uploads);
            // return fetchYoutube(playlist.items[0].contentDetails.relatedPlaylists.uploads);
            return await fetchYoutube(playlist.items[0].contentDetails.relatedPlaylists.uploads);
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}


async function fetchYoutube(_playlistId) {
    let nextPageToken = "";
    let videos = [];
    do{
    const _url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${_playlistId}&&maxResults=50&pageToken=${nextPageToken}&key=AIzaSyAo-VDju_qyliZ4wK88GuHwHSDmAo5nRkc`

    const response = await fetch(_url).then(res =>res.json());
    
    videos.push(...response.items)
    nextPageToken = response.nextPageToken;
    } while(nextPageToken);

    return videos;
}

const youtubeData = await fetchPlaylist();

export default youtubeData;