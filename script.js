// DOG API https://dog.ceo/api/breeds/image/random

// 🔥🔥 After fetching we have to do something right away
// we use .then( something ) after feteching .. this is called as ⚠️ PROMISE ⚠️ in JavaScript


// console.log('RUN 1st')  -- goes first
// console.log('RUN 3rd') -- goes second
// .then(json => console.log('RUN 2nd', json)) -- goes 3rd at last

// This here is called tha ⚠️ ASYNCHRONOUS ⚠️ Programming
// Here, code doesn't run linearly anymore ... the things tha JS knows first runs first then the
// requests to serevers runs .. like simple console.log() runs first and the at last the request from
// servers runs at last.. fetch request takes like 2-3 secs and JS deciedes to run then at the end
// This here is called the ASYNCHRONOUS programming 🔥🔥


// get image holder html 

// const img_holder = document.getElementById('image-holder')
// console.log(img_holder.innerHTML)


// console.log('RUN 1st') // don't have to wait for

// fetch('https://dog.ceo/api/breeds/image/random') // stuff to wait for
//   .then(response => response.json())
//   .then(json => {
//     img_holder.innerHTML = `<img src="${json.message}" height = 320px width = 340px>`
//   })  


// console.log('RUN 3rd')



// Now we want to make a function that will give us images when it is clicked!

const image_holder = document.getElementById('image-holder')

const give_image = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {
    image_holder.innerHTML = `<img src="${json.message}" height = 320px width = 340px>`
    console.log('Link:', json.message)
  })
}
give_image()
const get_iamge = document.getElementById('get-image')

get_iamge.onclick = () => give_image()