get2JS.onclick = ()=>{
  const request = new XMLHttpRequest()
  request.open('get',"/2.js")
  request.onload = () => {
    console.log("请求成功");
    const script = document.createElement("script");
    console.log(request.response);
    script.innerHTML = request.response;
    document.body.appendChild(script);
  }
  request.onerror= ()=> {
    console.log("请求失败");
  }
  request.send()
}
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "style.css"); //专业的前段只用前面两个参数
  // request.onload = () => {
  //   console.log("请求成功");
  //   console.log(request.response);
  //   const style = document.createElement("style");
  //   style.innerHTML = request.response;
  //   document.head.appendChild(style);
  // }
  // request.onerror = () => {
  //   console.log("请求失败");
  // }
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert('css请求失败')
      }
    }
  }
  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('get', "/3.html")
  request.onload = () =>{
    const div = document.createElement('div')
    div.innerHTML=request.response
    document.body.appendChild(div)
  }
  request.onerror = () => {

  };
  request.send()
}

getXML.onclick = () => {
  const request = new XMLHttpRequest
  request.open('get', '/4.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status<300) {
      console.log('d');
      const dom = request.responseXML
      const text =  dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim());
     }
  }
  request.send()
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('get', '/5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      const name = document.createElement("span")
      const data = JSON.parse(request.response)
      const h2 = document.querySelector('h2')
      name.innerHTML = data.name + " " + data.call
      h2.appendChild(name)
    }
  }
  request.send()
}

let page = 1
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('get', `/page${ page + 1 }`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      console.log(request.response);
      const array = JSON.parse(request.response);
      array.forEach(item => {
        let li = document.createElement('li')
        li.textContent = item.id
        xxx.appendChild(li)
      });
    }
  }
  request.send()
}