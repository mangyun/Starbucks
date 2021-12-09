const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')

//브라우저 그 자체
window.addEventListener('scroll', _.throttle(function () { //0.3초 텀을 두어 함수의 반복실행을 통제
  if (window.scrollY > 500) {
    //뱃지 숨기기
    gsap.to(badgeEl, .6, { //요소, 지속시간, 옵션 추가
      opacity: 0, // 투명하게
      display: 'none' //투명해지지만, 클릭은 되기때문에 아예 없애버리기
    })

    //totop 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    })
  } else {
    //뱃지 보이기
    gsap.to(badgeEl, .6, { //요소, 지속시간, 옵션 추가
      opacity: 1, //보이게
      display: 'block' // 다시 생기기
    })

    //totop 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300))

//totop버튼을 누르면 최상단으로 이동하는 기능
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, { //window = 브라우저 그 자체
    scrollTo: 0 //화면의 위치를 0px지점으로 옮김
  })
})


const fadeEls = document.querySelectorAll('.visual .fade-in') //fade-in 클래스를 전부 다 찾음
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, { //요소, 지속시간, 옵션 추가
    delay: (index + 1) * .7, // 0.7초, 1.4초, 2.1,초 등 하나씩 나타남
    opacity: 1
  })
})




//notice의 swiper
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', //세로방향
  autoplay: true, //자동재생
  loop: true //다시 반복재생
})

//promotion의 swiper
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', //기본값, 가로방향
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true, //다시 반복재생
  autoplay: { //자동재생 옵션추가
    delay: 5000 //5초
  },
  pagination: { //.....으로 요소를 지정해 페이지 넘기기
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 클릭이 가능하게
  },
  navigation: { //이전과 다음 슬라이드를 볼 수 있는 기능 
    prevEl: '.promotion .swiper-prev', //이전 버튼
    nextEl: '.promotion .swiper-next' //다음 버튼
  }

})

new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생
  loop: true, // 반복 재생
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
  navigation: { //이전과 다음 슬라이드를 볼 수 있는 기능
    prevEl: '.awards .swiper-prev', // 이전 버튼
    nextEl: '.awards .swiper-next' // 다음 버튼
  }
})


//토글 기능
const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion //클릭되면 true로 지정

  if (isHidePromotion) { //숨김처리
    promotionEl.classList.add('hide') // promotion에 class hide 추가

  } else { //보임처리
    promotionEl.classList.remove('hide') // promotion에 class hide 제거

  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

//둥둥 떠있는 애니메이션
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

