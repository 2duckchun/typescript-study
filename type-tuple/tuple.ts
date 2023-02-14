/*
Tuples
Tuples are a special type exclusive to TypeScript (they don't exist in JS)
Tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays.
*/

const tuples: [string, number, boolean] = ['2DC', 2, false]

const rgbcolor: [number, number, number] = [255, 255, 255]

// [200, "OK"]
// 404 Not found

type HTTPResponse = [number, string]

const goodRes: HTTPResponse = [200, "OK"]
// goodRes[0] = false
// goodRes.push(123)
// goodRes.push(456)
// goodRes.pop()
// goodRes.pop()
// goodRes.pop()
// goodRes.pop()

const response: HTTPResponse[] = [[200, "OK"], [404, "Not Found"]]
