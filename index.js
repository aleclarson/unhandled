
if (!process.unhandled) {
  process.unhandled = unhandled
  function unhandled(evt, fn) {
    process.on(evt, function() {
      let n = process.listenerCount(evt)
      if (n == 1) fn(...arguments)
    })
  }

  unhandled('SIGINT', () => {
    console.log()
    process.exit(130)
  })

  unhandled('uncaughtException', (err) => {
    console.error('uncaught ' + err.stack)
    process.exit(1)
  })
}

