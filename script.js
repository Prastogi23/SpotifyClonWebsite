console.log("Welcome to Spotify")

// Initiali the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songsItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Kesariya - Arijit Singh,Pritam,Amitabh Bhattacharya", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Tu Hi Yaar Mera - Arijit Singh", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Baarish Ban Jana - Stebin Ben,Payal Dev", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Humnava Mere - Jubin Nautiyal", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Mere Humsafar Ost - Yashal Shahid,Amanat Ali", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Raatan Lambiyan - Jubin Nautiyal,Asees Kaur", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Naam e Wafa - Farhan Saeed,Tulsi Kumar", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Titliyan - Afsana Khan,Jani", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Barish - Stebin Ben,Payal Dev", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    
]



//audioelement.play();

// Handle playpause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 1;
    }
    
})
// Listen to Events 
audioElement.addEventListener('timeupdate', ()=>{
    
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})
const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
    
});

document.getElementById("next").addEventListener("click", ()=>{
    if(songIndex>=9){
        songIndex = 1;
    }
    else{
        songIndex += 1;

    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})
document.getElementById("previous").addEventListener("click", ()=>{
    if(songIndex<=0){
        songIndex = 9;
    }
    else{
        songIndex -= 1;

    }
    audioElement.src = `${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})