console.log("Exercise 3:");

const SongsManager = function() {
    const _songs = {}; 
    const _youtubeBase = "https://www.youtube.com/watch?v=";

    const addSong = function(name, url) {
        // מחלקים את הכתובת לשניים סביב "v=" ולוקחים את החלק השני (המזהה)
        const identifier = url.split("v=")[1];
        _songs[name] = identifier;
    }

    const getSong = function(name) {
        const identifier = _songs[name];
        const fullUrl = _youtubeBase + identifier;
        console.log(fullUrl);
        return fullUrl; 
    }

    return {
        addSong: addSong,
        getSong: getSong
    }
}

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");

songsManager.getSong("sax"); 