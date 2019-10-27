const darkMode = window.matchMedia('(prefers-color-scheme: dark)')

const initState = {
  darkMode: darkMode.matches
}

export function reducer(state = initState, action) {
  switch (action.type) {
    case 'mode:dark':
      return { ...state, darkMode: true }
    case 'mode:light':
      return { ...state, darkMode: false }
  }
  return state
}

export function setDarkMode() {
  return { type: 'mode:dark' }
}

export function setLightMode() {
  return { type: 'mode:light' }
}
