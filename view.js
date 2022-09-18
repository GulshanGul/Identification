var container = document.getElementById("container")

firebase.database().ref('Register Data/').on('child_added', (snapshot) => {
  const data = snapshot.val();
  const _data = snapshot.key
  console.log(data)

  var innerDiv = document.createElement("div")
  innerDiv.setAttribute("class","padding")
  var innerDiv1 = document.createElement("div")
  innerDiv1.setAttribute("class", "font")
  var innerDiv2 = document.createElement("div")
  innerDiv2.setAttribute("class", "companyname")
  innerDiv2.innerHTML="System Limited"
  var lineBreak = document.createElement("br")
  var span = document.createElement("span")
  span.setAttribute("class", "tab")
  span.innerHTML="Karachi Pvt LTD"
  var imagDiv = document.createElement("div")
  imagDiv.setAttribute("class", "top")
  var imag = document.createElement("img")
  imag.setAttribute("src", data.url)
  var empDiv = document.createElement("div")
  empDiv.setAttribute("class", "")
  var nameDiv = document.createElement("div")
  nameDiv.setAttribute("class", "ename")
  var para = document.createElement("p")
  para.setAttribute("id", "ful")
  para.innerHTML = data.name


  var bold = document.createElement("b")
  var para2 = document.createElement("p")
  var detaile = document.createElement("div")
  detaile.setAttribute("id", "fath")


  var pGraph = document.createElement("p")
  var thin = document.createElement("div")
  pGraph.innerHTML= data.Fathername
  var pGraph1 = document.createElement("p")
  var thin1 = document.createElement("div")
  pGraph1.innerHTML= data.Distt

  var signn = document.createElement("div")
  signn.setAttribute("class", "pic")
  var signImg = document.createElement("img")
  signImg.setAttribute("src", 'sign.jpg')


  var lastImg = document.createElement("div")
  lastImg.setAttribute("class", "barcode")
  var qrImg = document.createElement("img")
  qrImg.setAttribute("src", 'qr.jpg')





//   <div class="signature">
//   <img src="sign.jpg" alt="">
// </div>
// <div class="barcode">
//   <img src="qr.jpg" alt="">
// </div>



// lastImg.appendChild(qrImg)
// signImg.appendChild(qrImg)
lastImg.appendChild(qrImg)
signn.appendChild(lastImg)
signn.appendChild(signImg)


thin.appendChild(signn)
thin.appendChild(thin1)
thin.appendChild(pGraph1)
detaile.appendChild(thin)
detaile.appendChild(pGraph)
nameDiv.appendChild(detaile)
nameDiv.appendChild(para2)
nameDiv.appendChild(bold)
nameDiv.appendChild(para)
empDiv.appendChild(nameDiv)
// imag.appendChild(empDiv)
imagDiv.appendChild(imag)
imagDiv.appendChild(empDiv)

innerDiv2.appendChild(imagDiv)
innerDiv2.appendChild(span)
innerDiv2.appendChild(lineBreak)
innerDiv1.appendChild(innerDiv2)
innerDiv.appendChild(innerDiv1)
container.appendChild(innerDiv)




//   var span = document.createElement("span")
//   span.innerHTML = data.name
//   var innerDiv2 = document.createElement("div")
//   var span2 = document.createElement("span")
//   span2.innerHTML=data.Fathername
//   var innerDiv3 = document.createElement("div")
//   var span3 = document.createElement("span")
//   span3.innerHTML = data.Distt


//   var photo = document.createElement("img")
//   photo.setAttribute("src",data.url)






//   span3.appendChild(photo)
//   innerDiv3.appendChild(span3)
//   span2.appendChild(innerDiv3)
//   innerDiv2.appendChild(span2)
//   span.appendChild(innerDiv2)
//   innerDiv.appendChild(span)
//   container.appendChild(innerDiv)

});







