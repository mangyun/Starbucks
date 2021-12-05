const searchEl = document.querySelector('.search') //search 선택자 저장
const searchInputEl = searchEl.querySelector('input') //이미 저장한 search의 input 선택자 저장

searchEl.addEventListener('click', function () {
  searchInputEl.focus() //focus를 적용
})

searchInputEl.addEventListener('focus', function () { //포커스가 되면
  searchEl.classList.add('focused') // focused 클래스가 추가됨
  searchInputEl.setAttribute('placeholder', '통합검색') //속성인 힌트 통합검색을 저장
})

searchInputEl.addEventListener('blur', function () { //블러 되면
  searchEl.classList.remove('focused') // focused 클래스가 삭제됨
  searchInputEl.setAttribute('placeholder', '') //속성인 힌트 통합검색을 삭제
})




const badgeEl = document.querySelector('header .badges')

//브라우저 그 자체
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


  //.....으로 요소를 지정해 페이지 넘기기
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 클릭이 가능하게
  },

  //이전과 다음 슬라이드를 볼 수 있는 기능 
  navigation: {
    prevEl: '.promotion .swiper-prev', //이전 버튼
    nextEl: '.promotion .swiper-next' //다음 버튼
  }

})





//토글 기능 구현
const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion //클릭되면 true로 지정

  if(isHidePromotion){ //숨김처리
    promotionEl.classList.add('hide') // promotion에 class hide 추가

  }else{//보임처리
    promotionEl.classList.remove('hide') // promotion에 class hide 제거

  }
})
