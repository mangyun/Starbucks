//검색 기능
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


//footer의 올해연도
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear() //현재 2021년도 지정