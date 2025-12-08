import youtubeData from "./fetch-youtube.mjs";

const youtube_container = document.querySelector("#youtubeVideos");
// const recent_first_buutton = document.querySelector("#")
// const not_recent_first_button = document.querySelector("#")


var displayRecentFirst = true;


if (localStorage.getItem("displayOrder")){
    displayRecentFirst = localStorage.getItem("displayOrder");
}





function showMostRecent(){
    displayRecentFirst = true;
    renderVideos(displayRecentFirst);
}

function showOldest(){
    displayRecentFirst = false;
    renderVideos(displayRecentFirst);
}




function renderVideos(_newestFirst){
    var literals_array = [];
    youtubeData.forEach(video => {
        const _video_literal=`
            <a href= "https://www.youtube.com/watch?v=${video.contentDetails.videoId}" class = videoCard>
                <h3>
                    ${video.snippet.title}
                </h3>
                <img src = "${video.snippet.thumbnails.high.url}" loading="lazy"></img>
            </a>
        `
        if (_newestFirst){
            literals_array.push(_video_literal);
        }
        else{
            literals_array.unshift(_video_literal)
        }
    })
    youtube_container.innerHTML = ''
    literals_array.forEach(element => {
        youtube_container.innerHTML += element;
    });
}

console.log(youtubeData)

renderVideos(displayRecentFirst);

"If the maxresdefault image is unavailable, a 4:3 thumbnail can be used and cropped to fit a 16:9 display using CSS by setting the container to overflow: hidden."