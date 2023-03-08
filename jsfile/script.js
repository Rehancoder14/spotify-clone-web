console.log('hello');
let songIndex = 0;

let audioElement = new Audio('assets/songs/song1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressbar = document.getElementById('myProgress');
let gif = document.getElementById('gif');
let songinfo = document.getElementsByClassName('songInfo');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let nameofsong = document.getElementById('nameofsong');
let songs = [

    { songname: 'Kehndi Hundi si    ', filepath: 'assets/songs/song1.mp3', coverpath: 'assets/song1.png', },
    { songname: 'Apna Bana le       ', filepath: 'assets/songs/song2.mp3', coverpath: 'assets/song2.png', },
    { songname: 'Tere Pyar me       ', filepath: 'assets/songs/song3.mp3', coverpath: 'assets/song3.png', },
    { songname: 'tera Jabra fan     ', filepath: 'assets/songs/song4.mp3', coverpath: 'assets/song4.png', },
    { songname: 'kya mujhe pyaar hai', filepath: 'assets/songs/song5.mp3', coverpath: 'assets/song5.png', },
    { songname: 'challa song        ', filepath: 'assets/songs/song6.mp3', coverpath: 'assets/song6.png', },
    { songname: 'Thoda thoda pyaar  ', filepath: 'assets/songs/song7.mp3', coverpath: 'assets/song7.png' }


]
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        // songinfo.style.opacity = 0;
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressbar.value = progress;
})
myProgressbar.addEventListener('change', () => {

    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100;
})

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath
    element.getElementsByClassName("songnames")[0].innerText = songs[i].songname
})

const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e);
        makeAllPlays();
        index = parseInt(e.target.id);
       if(audioElement.paused ||audioElement.currentTime<=0){
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        
        audioElement.src = `assets/songs/song${index}.mp3`
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       }
       else{
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
       
        audioElement.src = `assets/songs/song${index}.mp3`
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
       }
        nameofsong.innerText = songs[index-1].songname;
        console.log(songs[index].songname);
        
        
        

    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >=7) {
        songIndex = 1;
    }
    else {
        songIndex += 1;
    } audioElement.src = `assets/songs/song${songIndex}.mp3`
    audioElement.currentTime=0;
    audioElement.play();nameofsong.innerText ='          '+ songs[songIndex-1].songname;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 1;
    }
    else {
        songIndex -= 1;
    } audioElement.src = `assets/songs/song${songIndex}.mp3`
    audioElement.currentTime=0;
    audioElement.play();nameofsong.innerText = '          '+songs[songIndex-1].songname;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})