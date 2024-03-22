export function ajaxPromise(url, method = 'GET', data = {}, isAsync = true) {
  return new Promise((resolve, reject) => {
    const XHR = XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject('Microsoft.XMLHTTP')
    XHR.onreadystatechange = function () {
      if (XHR.readyState == 4) {
        if ((XHR.status >= 200 && XHR.status < 300) || XHR.status == 304) {
          const response = JSON.parse(XHR.responseText)
          resolve(response)
        } else {
          reject(new Error('Request was unsuccessful: ' + XHR.statusText))
        }
      }
    }
    XHR.open(method, url, isAsync)
    if (method.match(/get/i)) {
      XHR.send()
    } else {
      let str = ''
      for (const key in data) {
        str += key + '=' + data[key] + '&'
      }
      XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      XHR.send(str.slice(0, -1))
    }
  })
}
