import axios from 'axios'
import * as Status from './status-type'

let count = 0
let timer = null

const sHref = process.env.API_HOST

axios.interceptors.request.use(res => {
    res.url = sHref + res.url

    count++
    return res
})

axios.interceptors.response.use(res => {
    count--

    clearTimeout(timer)

    if (!count) {

    }

    return res
}, err => {
    count--

    return err
})
const SERVER_BASE = 'www.baidu.com'

const path_join = () => {

}


const http_factory = (method, options) => (url, params) => {
  url = path_join(SERVER_BASE, url)

  const defaultOpt = {
    method,
    url,
    timeout: 30000,
    responseType: 'json'
  }

  if (method === 'GET') {
    options.params = params
  } else {
    if (JSON.stringify(params) !== '{}') {
      let formData = new FormData()

      for ( let key in params ) formData.append(key, params[key])

      options.data = formData
    }
  }

  const opt = { ...defaultOpt, ...options }

  const fireDate = new Date()

  return new Promise((resolve, reject) => {
    axios(opt).then(res => {
      if (res.status === Status.SUCCESS) {
        const resultDate = new Date()
        const timeDifference = resultDate.getTime() - fireDate.getTime()

        console.log(`${opt.url}响应： ${timeDifference} ms`)

        resolve(res.data)
      } else {
        let msg = Status.ERROR_CODE[res.status] || '服务器错误，请稍后再试'

        reject(msg)
      }
    }).catch(err => {
      reject('网络错误，请重试')
    })
  })
}