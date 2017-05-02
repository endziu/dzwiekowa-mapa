const randomizeList = (list) => list.sort(() => 0.5 - Math.random())

const prettyTime = (time) => {
  let hours = Math.floor(time / 3600)
  let mins = '' + Math.floor((time % 3600) / 60)
  let secs = '0' + Math.floor((time % 60))
  mins = mins.substr(mins.length - 2)
  secs = secs.substr(secs.length - 2)
  if (!isNaN(secs)) {
    if (hours) {
      return `${hours}:${mins}:${secs}`
    }
    return `${mins}:${secs}`
  }
  return '0:00'
}

const takeFirst = (arr) => arr[0]

const asNumber = (n) => parseInt(n, 10)

const copyTextToClipboard = (text) => {
  const textArea = document.createElement('textarea')
  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed'
  textArea.style.top = 0
  textArea.style.left = 0
  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em'
  textArea.style.height = '2em'
  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0
  // Clean up any borders.
  textArea.style.border = 'none'
  textArea.style.outline = 'none'
  textArea.style.boxShadow = 'none'
  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent'
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.select()
  try {
    const successful = document.execCommand('copy')
    const msg = successful ? 'successful' : 'unsuccessful'
    console.log('Copying text command was ' + msg)
  } catch (err) {
    console.log('Oops, unable to copy')
  }
  document.body.removeChild(textArea)
}

const getSoundById = (id, sounds) => {
  const sameID = sound => asNumber(sound.id) === asNumber(id)
  const item = takeFirst(sounds.filter(sameID))
  return item
}

const getSoundByTitle = (permalink, sounds) => {
  const sameTitle = sound => sound.permalink === permalink
  const item = takeFirst(sounds.filter(sameTitle))
  return item
}

const isDigitOnly = (s) => /^\d+$/.test(s)

const filterList = (prevState, props) => {
  const isFilterInItem = (filter) => (item) => (item.toLowerCase().search(filter) !== -1)
  const isNotIn = isFilterInItem(prevState.filter)

  const filteredSounds = props.sounds.filter(
    (item) =>
      isNotIn(item.info.opis) ||
      isNotIn(item.info.author) ||
      isNotIn(item.userName) ||
      isNotIn(item.title) ||
      isNotIn(item.info.gear)
  )

  return {
    sounds: filteredSounds
  }
}

export {
  randomizeList,
  prettyTime,
  takeFirst,
  asNumber,
  copyTextToClipboard,
  getSoundById,
  getSoundByTitle,
  isDigitOnly,
  filterList
}
