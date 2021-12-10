
# ☕ STARBUCKS

연습용 스타벅스 메인과 로그인 페이지입니다. 

<br/>

[메인+로그인](https://laughing-roentgen-b3c0db.netlify.app/)
![image](https://user-images.githubusercontent.com/88188850/145527735-9ec26d64-9050-453e-ac2e-e8bac789aaa6.png)
![image](https://user-images.githubusercontent.com/88188850/145527846-2fc98e66-e4ef-4d40-9101-de27a69cb9c1.png)


<br/>



## 뷰포트 렌더링 설정

웹페이지가 화면(Viewport)에 표현되는 방식을 설정합니다.<br>
모바일 환경에서 적용됩니다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```


<br/>


## 오픈 그래프(The Open Graph protocol)

웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

[더 많은 오픈 그래프 속성 보기](https://ogp.me/)
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```

<br/>



## 트위터 카드(Twitter Cards)

웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

[더 많은 트위터 카드 보기](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:url" content="https://starbucks.co.kr" />
```


<br/>


## Favicon(favorites icon)

웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정합니다. link태그를 따로지정하지 않으면, 루트에서 favicon.ico를 자동으로 찾아서 설정합니다.
```html
<link rel="icon" href="./favicon.png">
```
### .ico 파일 제작

이미지를 업로드하면 손쉽게 `.ico` 파일을 제작할 수 있습니다.

[iconifier.net](https://iconifier.net/)

<br/>


## Reset.css

각 브라우저의 기본 스타일을 초기화합니다.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

<br/>


## Google Fonts

페이지에서 사용할 '나눔고딕' 폰트를 지정합니다.

> 폰트 라이선스를 꼭 확인해야 합니다!

[Google Fonts](https://fonts.google.com/)에서 고른 폰트 파일을 가져옵니다.

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet" />
```

페이지에 폰트를 적용(CSS 상속)합니다.

```css
body {
    font-family: 'Nanum Gothic', sans-serif;
}
```

<br/>


## Google Material Icons

[구글에서 제공하는 머터리얼 아이콘](https://material.io/resources/icons/?style=baseline)을 무료로 사용할 수 있습니다.

[Getting started for web](https://material.io/develop/web/getting-started)

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

다음과 같이 사용할 수 있습니다.

```html
<div class="material-icons">upload</div>
```

<br/>



## GSAP & ScrollToPlugin

[GSAP(The GreenSock Animation Platform)](https://greensock.com/gsap/)은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리입니다.
[ScrollToPlugin](https://greensock.com/scrolltoplugin/)은 스크롤 애니메이션을 지원하는 GSAP 플러그인입니다.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
```


<br/>


## Swiper

[Swiper](https://swiperjs.com/)는 하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 슬라이드 라이브러리입니다.


```html
<!-- HEAD -->
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<!-- BODY -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
</div>
```


<br/>


## Youtube API

[IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)를 통해 YouTube 동영상을 제어할 수 있습니다.

유튜브 영상이 출력될 위치에 요소를 지정(생성)합니다.

```html
<!-- HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- BODY -->
<div id="player"></div>
```

`onYouTubePlayerAPIReady` 함수 이름은 Youtube IFrame Player API에서 사용하는 이름이기 때문에 다르게 지정하면 동작하지 않고, 전역 등록(global)해야합니다.



```js
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
```

<br/>


## ScrollMagic

[ScrollMagic](https://github.com/janpaepke/ScrollMagic)은 스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리입니다. 대표적으로 어떤 요소가 현재 화면에 보이는 상태인지를 확인할 때 사용합니다.


```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
```

```js
const spyEls = document.querySelectorAll('section.scroll-spy') //scroll-spy 요소들을 찾아서 spyEls에 저장
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //해당 클래스를 감지하려고 지정
      triggerHook: .8 //뷰포트의 어느지점에 감지되었는지 판별, 뷰포트 기준으로 top은 0, bottom은 1임. 따라서 0.8이면 거의 아래지점임
    })
    .setClassToggle(spyEl, 'show') //show클래스 추가
    .addTo(new ScrollMagic.Controller()) //ScrollMagic 실행에 꼭 필요한 컨트롤러
})
```

<br/>


## Lodash

[Lodash](https://lodash.com/)는 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리입니다.


```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js" integrity="sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==" crossorigin="anonymous"></script>
```

<br/>


## animation
### 우측 뱃지 모션

```js
window.addEventListener('scroll', _.throttle(function () { //0.3초 텀을 두어 함수의 반복실행을 통제
  if (window.scrollY > 500) { //뱃지 숨기기
    gsap.to(badgeEl, .6, { //요소, 지속시간, 옵션 추가
      opacity: 0, // 투명하게
      display: 'none' //투명해지지만, 클릭은 되기때문에 아예 없애버리기
    })
  } else { //뱃지 보이기
    gsap.to(badgeEl, .6, { //요소, 지속시간, 옵션 추가
      opacity: 1, //보이게
      display: 'block' // 다시 생기기
    })
  }
}, 300))

```

<br/>


### 랜덤한 숫자를 생성하는 함수

```js
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
```
### 둥둥 떠있는 애니메이션
```js
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), { //1.5 ~ 2.5초 사이로 지속시간을 랜덤하게 설정
    y: size, //y축방향인 아래로 20 내려감
    repeat: -1, //무한반복
    yoyo: true, //재생된 애니메이션을 다시 역재생
    ease: Power1.easeInOut, //반복이 튕기지않고 자연스럽게 연결
    delay: random(0, delay) //0 ~ 밑의 지연시간사이로 지연시간을 랜덤하게 설정
  })
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)
```

<br/>


### ToTop 버튼  

기존 gsap 애니메이션 라이브러리를 포함



```html
 <!-- ToTop 기능을 위한 gsap ScrollToPlugin 라이브러리-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollToPlugin.min.js"
    integrity="sha512-eI+25yMAnyrpomQoYCqvHBmY4dLfqKWPnD4j8y0E3Js+yqpF26xncL4t81M1zxC+ISYfRoCN52rN/n0q2UIBZQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
```js
//totop버튼을 누르면 최상단으로 이동하는 기능
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, { //window = 브라우저 그 자체
    scrollTo: 0 //화면의 위치를 0px지점으로 옮김
  })
})
```
