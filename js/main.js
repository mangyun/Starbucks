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