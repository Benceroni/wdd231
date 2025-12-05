const playlistURL = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCUekuiQDM_A2237QIk5_f-w&key=AIzaSyAo-VDju_qyliZ4wK88GuHwHSDmAo5nRkc"

const lastPlaylistFetch = localStorage.getItem("lastFetch");
const lastPlaylistId = localStorage.getItem("lastId");

async function fetchPlaylist() {
    try{
        const response = await fetch(playlistURL);
        if (response.ok){
            const playlist = await response;
            console.log("Response is:")
            console.log(playlist.json().items[0].contentDetails.relatedPlaylists.uploads)
            return playlist.json().items[0].contentDetails.relatedPlaylists.uploads;
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}

async function fetchYoutube(playlistID) {
    
}

function onceDaily(){
    if (lastPlaylistFetch && lastPlaylistId){
        let days = Math.abs((lastPlaylistFetch - Date.now())/86400000);
        if (days >=1){
            fetchPlaylist();
            localStorage.setItem("lastFetch",Date.now())
        }
        else{
            console.log("playlist URL fetched in last 24 hours")
        }
    }
    else{
        localStorage.setItem("lastFetch",Date.now())
        fetchPlaylist()
    }
}

onceDaily()

// export default youtube