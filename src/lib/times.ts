export const times = <T>(iterations: number, callback: (index: number) => T): Array<T> => {
  return [...new Array(iterations)].map((_, index) => callback(index))
}
