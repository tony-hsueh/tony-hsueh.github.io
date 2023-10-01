const yearDom = document.querySelector('.year')
const monthDom = document.querySelector('.month')
const dateZone = document.querySelector('.date')
const prevBtn = document.querySelector('.prev-month')
const nextBtn = document.querySelector('.next-month')
const now = dayjs()
let currentYear = now.year()
let currentMonth = now.month()

const daysCountInMonth = now.daysInMonth()
let firstDayInMonth = dayjs().set('year', currentYear).set('month', currentMonth).set('date', 1).day()
console.log(firstDayInMonth, currentYear, currentMonth)
if (firstDayInMonth === 0) firstDayInMonth = 7
let startDay = 1
for(i = 0; i < 6; i++) {
  const tr = document.createElement('tr')
  for (j = 0; j < 7; j++) {
    const td = document.createElement('td')
    // 當天會有不同的屬性
    if(startDay === now.date() && j + 1 === firstDayInMonth) {
      td.classList.add('event')
    }
    if (i === 0  && j >= firstDayInMonth -1) {
      td.innerHTML = startDay
      startDay++
    }
    if (i !== 0 && startDay <= daysCountInMonth) { 
      td.innerHTML = startDay
      startDay++
    } 
    
    tr.append(td)
  }
  
  dateZone.append(tr)
}

function renderCalendar(currentYear, currentMonth) {
  const daysCountInMonth = dayjs().set('year', currentYear).set('month', currentMonth).daysInMonth()
  let firstDayInMonth = dayjs().set('year', currentYear).set('month', currentMonth).set('date', 1).day()
  if (firstDayInMonth === 0) firstDayInMonth = 7
  let startDay = 1
  for(i = 0; i < 6; i++) {
    const tr = document.createElement('tr')
    for (j = 0; j < 7; j++) {
      const td = document.createElement('td')
      if(
        startDay === now.date() 
        && currentYear === now.year() 
        && currentMonth === now.month()
        && j + 1 === firstDayInMonth
      ) {
        td.classList.add('event')
      }
      if (i === 0  && j >= firstDayInMonth -1) {
        td.innerHTML = startDay
        startDay++
      }
      if (i !== 0 && startDay <= daysCountInMonth) { 
        td.innerHTML = startDay
        startDay++
      } 
      
      tr.append(td)
    }
    
    dateZone.append(tr)
  }
}

yearDom.innerHTML = currentYear
monthDom.innerHTML = currentMonth + 1

nextBtn.addEventListener('click', () => {
  dateZone.innerHTML = ''
  if (currentMonth + 1 > 11) {
    currentMonth = 0
    currentYear += 1
  } else {
    currentMonth += 1
  }
  yearDom.innerHTML = currentYear
  monthDom.innerHTML = currentMonth + 1

  renderCalendar(currentYear, currentMonth)
})

prevBtn.addEventListener('click', () => {
  dateZone.innerHTML = ''
  if (currentMonth - 1 < 0) {
    currentMonth = 11
    currentYear -= 1
  } else {
    currentMonth -= 1
  }
  console.log(currentMonth);
  yearDom.innerHTML = currentYear
  monthDom.innerHTML = currentMonth + 1
  renderCalendar(currentYear, currentMonth)
})    