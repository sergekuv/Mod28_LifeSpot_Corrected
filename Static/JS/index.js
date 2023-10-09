alert("Приветствуем на LifeSpot" + new Date().toLocaleString());

function FilterVideos(userInput) {

    //let userInput = document.getElementById("userInput").value.toLowerCase();
    console.log(`-- FilterVideos ( ${userInput} ) started --`);

    let videos = document.getElementsByClassName('video-container');

    for (let i = 0; i < videos.length; i++) {
        let containerChilds = videos[i];
        let description = containerChilds.getElementsByClassName('video-title')[0];
        console.log(description.textContent);
        if (description.textContent.toLowerCase().includes(userInput)) {
            console.log('+ ' + description.textContent);
            videos[i].style.display = "inline-block";
        } else {
            console.log('- ' + description.textContent);
            videos[i].style.display = "none";
        }
    }
}

