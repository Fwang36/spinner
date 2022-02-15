const spin = ["|", "/", "-", "\\", "-"]
let delay = 0

const spinOnce = (times) => {
  for (let i = 0; i < times; i++) {
    for (const char of spin) {
      setTimeout(() => {
        process.stdout.write(`\r${char}`)
      }, delay += 200)
    }  
  }
}
