var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() { //유투브 라이브러리가 찾는 함수이기 때문에, 이름을 바꾸면 안됨
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //재생할 유투브 주소의 영상 id
    playerVars: {
      autoplay: true, //자동재생
      loop: true, //반복재생
      playlist: 'An6LvWQuj_8' // 반복재생할 유투브 영상 id
    },
    events: {
      onReady: function (event) { //영상이 준비되면
        event.target.mute() //영상 음소거
      }
    }
  });
}

