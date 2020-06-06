export function debounce(func, wait = 500) {
  let timeout;
  return function (event) {
    clearTimeout(timeout);
    event.persist && event.persist();
    timeout = setTimeout(() => {
      func(event);
    }, wait);
  };
}

export function throttle(func, interval = 100) {
  let timeout;
  let startTime = new Date();
  return function (event) {
    event.persist && event.persist();
    clearTimeout(timeout);
    let curTime = new Date();
    if (curTime - startTime <= interval) {
      //小于规定时间间隔时，用setTimeout在指定时间后再执行
      timeout = setTimeout(() => {
        func(event);
      }, interval);
    } else {
      //重新计时并执行函数
      startTime = curTime;
      func(event);
    }
  };
}
