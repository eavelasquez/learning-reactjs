export const timeSince = (date: string) => {
  const baseDate = new Date(date)
  const seconds = Math.floor((new Date().getTime() - baseDate.getTime()) / 1000)

  let interval = Math.floor(seconds / 31536000) // 1 year = 31536000 seconds
  if (interval > 1) {
    return Math.floor(interval) + ' years'
  }

  interval = Math.floor(seconds / 2592000) // 1 month = 2592000 seconds
  if (interval > 1) {
    return Math.floor(interval) + ' months'
  }

  interval = Math.floor(seconds / 86400) // 1 day = 86400 seconds
  if (interval > 1) {
    return Math.floor(interval) + ' days'
  }

  interval = Math.floor(seconds / 3600) // 1 hour = 3600 seconds
  if (interval > 1) {
    return Math.floor(interval) + ' hours'
  }

  interval = Math.floor(seconds / 60) // 1 minute = 60 seconds
  if (interval > 1) {
    return Math.floor(interval) + ' minutes'
  }

  return Math.floor(seconds) + ' seconds'
}
