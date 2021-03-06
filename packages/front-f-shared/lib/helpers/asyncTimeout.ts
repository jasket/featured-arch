export function asyncTimeout(time: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
