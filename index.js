const time = document.querySelector('.time');

  const currentUTCTime = new Date();
  const hours = currentUTCTime.getUTCHours();
  const minutes = currentUTCTime.getUTCMinutes();
  const seconds = currentUTCTime.getSeconds();
  time.innerText = `${hours}:${minutes}:${seconds} UTC`;






