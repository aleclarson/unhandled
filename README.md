# unhandled v0.0.1

Sets `process.unhandled` to a function that can be used to
do something when a process event has no other listeners.

By default, unhandled listeners are created for these events:
- `SIGINT` calls `process.exit(130)`
- `uncaughtException` prints the stack trace and exits
- `unhandledRejection` prints the stack trace and exits

```js
let unhandled = require('unhandled')

// Exit with code 143 unless someone else is listening.
unhandled('SIGTERM', () => process.exit(143))

process.unhandled('SIGKILL', () => {
  console.log("can't touch this")
})
```

Remember to avoid creating more than one unhandled listener
per process event. Otherwise, the event will go unhandled!

The `process.unhandled` property is set in order to
avoid multiple installations of this package from
cancelling each other out.

