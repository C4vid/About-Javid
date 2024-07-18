const image = document.getElementById('img')
const showImg = document.getElementById('showimg')

showImg.addEventListener('click', () => {
  let img = document.createElement('img')
  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-5iJKhZ8jeLqH9PbIIg_4QNDaAH7fmxiFw&s"

  image.appendChild(img)
})