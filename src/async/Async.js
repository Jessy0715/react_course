const fs = require('fs')

// const getData = () => {

  // 情境: 希望讀完文件可以知道 content 內容

  
  // 錯誤寫法1: 這裡的 return 是「箭頭函式的 return 值」
  // fs.readFile('./data.json', (err, content) => {
  //   return content
  // })

  // 錯誤寫法2:  因為不確定 content 內容何時返回，return 放在外面讀取不到
//   let cnt = content
//   fs.readFile('./data.json', (err, content) => {
//     cnt = content
//   })
//   return cnt
// }


// const start = () => {
//   const data = getData()
//   console.log(data) // undefined
// }

// start();


// 正確寫法1: callback

// 在完成一個非同步的工作之後，傳入一個callback，並將結果傳給這個函式做為他的參數
const getJson = (callback) => {
  fs.readFile('./data.json', (err, content) => {
    callback(content)
  })
}
// 把 content 作為 callback 參數傳出去，才可以讀取 content 內容
const get = () => {
  getJson((data) => {
    console.log(data);
  })
}
get();





// 正確寫法2: Promise

const getData = () => {
  return new Promise((resolve, reject)=> {
    fs.readFile('./data.json', (err, content) => {
      if (err) {
        reject(err)
      } else {
        resolve(content)
      }
    })
  })
}
const start = () => {
  getData().then((res) => {
    console.log(res);
  })
}
start()



// 正確寫法3: async await

const startAsync = async () => {
  const data = await getData()
  console.log(data);
}
startAsync()
