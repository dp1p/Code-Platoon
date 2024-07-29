// const replaceImages = () => {
//   imgTag = document.body.getElementsByTagName('img')
//   console.log(imgTag)
// }

function replaceImages() {
  let images = document.body.getElementsByTagName("img"); // assigning the element tag "image" from html to a variable called images
  for (let i = 0; i <= images.length; i++) { 
    console.log(i)
    let image = images[i];

    if (image.alt) { //if the image has an alt attribute in the html file
      let text = document.createTextNode(image.alt); //grahs the img alt text, and creates a text node (which is essentially an object) 
      image.parentNode.replaceChild(text, image); //grabs the parentnode, replaces it with the text node object (which the text contains the <alt> tag)
    }
  }
}