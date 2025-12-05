const playlistURL = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCUekuiQDM_A2237QIk5_f-w&key=AIzaSyAo-VDju_qyliZ4wK88GuHwHSDmAo5nRkc"

const lastPlaylistFetch = localStorage.getItem("lastFetch");
var lastPlaylistId = localStorage.getItem("lastId");

var playlistID = '';

var youtube = [];

async function fetchPlaylist() {
    try{
        const response = await fetch(playlistURL);
        if (response.ok){
            const playlist = await response;
            console.table(playlist.json());
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

async function fetchYoutube(_playlistID) {
    const _url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=$"UUUekuiQDM_A2237QIk5_f-w"&maxResults=50&key=AIzaSyAo-VDju_qyliZ4wK88GuHwHSDmAo5nRkc`
    const response = await fetch(_url);
    youtube = await response.json();
    console.log(youtube);
    console.log(_url)
}

console.log(fetchYoutube("a"));

function onceDaily(){
    if (lastPlaylistFetch && lastPlaylistId){
        let days = Math.abs((lastPlaylistFetch - Date.now())/86400000);
        if (days >=1){
            playlistID = fetchPlaylist();
            localStorage.setItem("lastFetch",Date.now())
            lastPlaylistId = localStorage.getItem("lastId")

        }
        else{
            console.log("playlist URL fetched in last 24 hours")
        }
    }
    else{
        playlistID = fetchPlaylist();
        localStorage.setItem("lastFetch",Date.now())

    }
}

onceDaily()

export default youtube