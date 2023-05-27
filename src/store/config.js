const config = store => {
  store.on('@init', () => ({
    config: {
      skin: '',
      theme: '',
      width: 4,
      height: 4,
      time: false,
      timer: 15,
    },
  }))
  store.on('config/Maze', (_, newState) => newState)
  store.on('config/set', (oldState, { key, value }) => ({
    config: {
      ...oldState.config,
      [key]: value,
    },
  }))
}

export default config
