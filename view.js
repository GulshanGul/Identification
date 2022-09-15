var container = document.getElementById("container")

firebase.database().ref('Register Data/').on('child_added', (snapshot) => {
  const data = snapshot.val();

  var innerDiv = document.createElement("div")
  var span = document.createElement("span")
  span.innerHTML = data.name
  var innerDiv2 = document.createElement("div")
  var span2 = document.createElement("span")
  span2.innerHTML=data.Fathername
  var innerDiv3 = document.createElement("div")
  var span3 = document.createElement("span")
  span3.innerHTML = data.Distt
  var photo = document.createElement("img")
  photo.innerHTML= data.downloadURL
  innerDiv3.appendChild(span3)
  span2.appendChild(innerDiv3)
  innerDiv2.appendChild(span2)
  span.appendChild(innerDiv2)
  innerDiv.appendChild(span)
  container.appendChild(innerDiv)

});