import youtubeData from "./fetch-youtube.mjs";

const youtube_container = document.querySelector("#youtubeVideos");

console.log(youtubeData);


youtubeData.forEach(video => {
    console
    const _video_literal=`
        <a href= "https://www.youtube.com/watch?v=${video.contentDetails.videoId}" p class = videoCard>
            <h3>
                ${video.snippet.title}
            </h3>
            <img src = "${video.snippet.thumbnails.standard.url}" loading="lazy"></img>
        </a>
    `
    youtube_container.innerHTML += _video_literal;
})

"If the maxresdefault image is unavailable, a 4:3 thumbnail can be used and cropped to fit a 16:9 display using CSS by setting the container to overflow: hidden."