export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  debounce,
  randomPastTime,
  saveToStorage,
  loadFromStorage,
  timePassed,
  adToDemoData
}

function makeId(length = 6) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}

function makeLorem(size = 100) {
  var words = ['The', 'sky', 'above', 'the', 'port', 'was', 'tuned', 'to', 'channel', 'All', 'this', 'more', '.', 'I', 'had', 'the story', 'bit by bit', 'from', 'and', 'generally', 'happens', 'cases', 'time', 'it', 'was', 'story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
  var txt = ''
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)] + ' '
  }
  return txt
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}


function randomPastTime() {
  const HOUR = 1000 * 60 * 60
  const DAY = 1000 * 60 * 60 * 24
  const WEEK = 1000 * 60 * 60 * 24 * 7

  const pastTime = getRandomIntInclusive(HOUR, WEEK)
  return Date.now() - pastTime
}

function debounce(func, timeout = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => { func.apply(this, args) }, timeout)
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key)
  return (data) ? JSON.parse(data) : undefined
}

function adToDemoData(array, key, value, nestedKey = null) {
  array.forEach((object) => {
    if (nestedKey) {
      object[nestedKey][key] = value
    } else {
      object[key] = value
    }
  })
}


function timePassed(date) {
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - date.getTime();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const millisecondsPerWeek = 7 * millisecondsPerDay;
  const millisecondsPerMonth = 30.436875 * millisecondsPerDay;
  const millisecondsPerYear = 365.2425 * millisecondsPerDay;

  if (differenceInTime < millisecondsPerWeek) {
    const daysPassed = Math.floor(differenceInTime / millisecondsPerDay);
    return `${daysPassed} day ago`
  } else if (differenceInTime < millisecondsPerMonth) {
    const weeksPassed = Math.floor(differenceInTime / millisecondsPerWeek);
    return `${weeksPassed} weeks ago`
  } else if (differenceInTime < millisecondsPerYear) {
    const monthsPassed = Math.floor(differenceInTime / millisecondsPerMonth);
    return `${monthsPassed} months ago`
  } else {
    const yearsPassed = Math.floor(differenceInTime / millisecondsPerYear);
    return `${yearsPassed} years ago`
  }
}


