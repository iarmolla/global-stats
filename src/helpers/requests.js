import { Cookies } from '../auth/cookies/cookie'

function request(method, url, body = JSON.stringify({})) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(JSON.parse(xhr.response))
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        })
      }
    }
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      })
    }
    const jwt = Cookies.get('jwt')
    if (jwt) {
      xhr.setRequestHeader("Authorization", `Bearer ${jwt}`)
    }
    if (Object.keys(body).length) {
      xhr.setRequestHeader("Content-type", "application/json")
      xhr.send(body)
    } else {
      xhr.send()
    }
  })
}

function get(url, body = {}) {
  return request('GET', url, JSON.stringify(body))
}

function post(url, body = {}) {
  return request('POST', url, JSON.stringify(body))
}

export const requests = {
  get,
  post
}
