// Bookmarklet script that takes care of all the randomization

function clickButton() {
    _links = document.getElementsByClassName("pl-video-title-link yt-uix-tile-link yt-uix-sessionlink  spf-link ");
    _link = _links[Math.floor(Math.random() * _links.length)];
    _rand = Math.floor((Math.random() * 1000) + 1);
    window.location.href = _link.href + "&shuffle=" + _rand;
}

var load_button_interval = setInterval(function(){
    _load_more = "yt-uix-button yt-uix-button-size-default yt-uix-button-default load-more-button yt-uix-load-more browse-items-load-more-button";
    _load_button = document.getElementsByClassName(_load_more);
    if (_load_button.length !== 0) {
        _load_button[0].click();
    } else {
        clearInterval(load_button_interval);
        clickButton();
    }
}, 1000);
