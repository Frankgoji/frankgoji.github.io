// Removes all the videos in a youtube playlist
javascript:(function(){
    _my_script=document.createElement('SCRIPT');
    _my_script.type='text/javascript';
    _my_script.src='https://googledrive.com/host/0B79SR6ca7vCeNWtqZTREMWRkNGs';
    document.getElementsByTagName('head')[0].appendChild(_my_script);
})();

// This is the script listed in the google drive file
alert("Removing videos from playlist.");

function clickButton() {
    _buttons = document.getElementsByClassName("yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup pl-video-edit-remove yt-uix-tooltip");
    if (_buttons[0].title === "Remove" && 0 < _buttons.length) {
        _buttons[0].click();
        setTimeout(clickButton, 500);
    }
}

clickButton();
