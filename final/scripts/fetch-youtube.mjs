const playlistURL = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCUekuiQDM_A2237QIk5_f-w&key=AIzaSyAo-VDju_qyliZ4wK88GuHwHSDmAo5nRkc"

async function fetchPlaylist() {
    try{
        const response = await fetch(playlistURL);
        if (response.ok){
            const playlist = await response;
            console.log(playlist)

        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}

fetchPlaylist();

// export default youtube