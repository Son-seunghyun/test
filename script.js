


// const form = document.querySelector('.form-select')
// var pants = [28, 30, 32, 34]

// form.addEventListener('input', function(){
//   var values = form.options[form.selectedIndex].value;
//   if(values == '바지'){
//     document.querySelector('.form-select2').classList.add('show')
//     document.querySelector('.form-select2').innerHTML = ''
//     pants.forEach(el => {
//       document.querySelector('.form-select2').insertAdjacentHTML('beforeend',`<option>${el}</option>`)
//     })
//   }
// })


function 평균점수(arr,b) {
  let result = 0
  for(var i = 0; i < arr.length; i++){
    result = result + arr[i]
  }
  result = result / arr.length
  if( result < b) {
    console.log('올랐네요')
  } else {
    console.log('내렸네요')
  }
}

평균점수([10,20,30,40],50)



fetch('https://codingapple1.github.io/price.json')
  .then(res => res.json())
  .then(function(data){
    console.log(data.price)
  })
  .catch(function(error){
    console.log('실패함')
  });

let products = [
  { id : 0, price : 70000, title : 'Blossom Dress'},
  { id : 1, price : 100000, title : 'Apple shirt'},
  { id : 2, price : 90000, title : 'Monastery'}
]

products.forEach((el , i) => {
  var col = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${el.title}</h5><p>${el.price}</p><button class="buy">구매</button></div>`
  document.querySelector('.row').insertAdjacentHTML('beforeend',col)
})

let clicks = 0
document.querySelector('.btn-more').addEventListener('click',function(){
  clicks++
  if( clicks == 1){
    fetch('https://codingapple1.github.io/js/more2.json')
    .then(res => res.json())
    .then(function(data){
      data.forEach((el , i) => {
        var col = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${data[i].title}</h5><p>${data[i].price}</p></div>`
        document.querySelector('.row').insertAdjacentHTML('beforeend',col)
      })
    })
    .catch(function(error){
      console.log('실패함')
    });
  }
  if( clicks == 2){
    fetch('https://codingapple1.github.io/js/more2.json')
    .then(res => res.json())
    .then(function(data){
      data.forEach((el , i) => {
        console.log(data)
        var col = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${data[i].title}</h5><p>${data[i].price}</p></div>`
        document.querySelector('.row').insertAdjacentHTML('beforeend',col)
      })
    })
    .catch(function(error){
      console.log('실패함')
    });
  }
})

document.querySelector('.btn-sort').addEventListener('click', function(){
 products.sort(function(a,b){
  return a.price - b.price
 })
 document.querySelector('.row').innerHTML = ''
 products.forEach((el,i) => {
  var col = `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${products[i].title}</h5><p>${products[i].price}</p></div>`
  document.querySelector('.row').insertAdjacentHTML('beforeend',col)
 })
 console.log(products)
})

document.querySelector('.btn-abc').addEventListener('click',function(){
  products.sort(function(a,b){
    if( a.title < b.title ){
      return 1
    } else{
      return -1
    }
   })
   document.querySelector('.row').innerHTML = ''
   products.forEach((el,i) => {
    var col = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5><p>${products[i].price}</p><button class="buy">구매</button></div>`
    document.querySelector('.row').insertAdjacentHTML('beforeend',col)
   })
})

document.querySelector('.btn-under').addEventListener('click',function(){
  var newProducts = products.filter(function(a){
    return a.price <= 90000
  })
    document.querySelector('.row').innerHTML = ''
    newProducts.forEach((el,i) => {
      var col = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${newProducts[i].title}</h5><p>${newProducts[i].price}</p><button class="buy">구매</button></div>`
      document.querySelector('.row').insertAdjacentHTML('beforeend',col)
    })
})
  
// document.querySelectorAll('.buy').forEach( (el) =>{
//   el.addEventListener('click', function(){
//     const title = el.previousSibling.previousSibling.innerHTML
//     const cart = localStorage.getItem('cart')
//     const 꺼낸거 = JSON.parse(cart)
//     if( cart == null){
//       localStorage.setItem('cart',JSON.stringify([title]))
//     } else if(cart != null && 꺼낸거 != title){
//       꺼낸거.push(title)
//       localStorage.setItem('cart', JSON.stringify(꺼낸거))
//     } 
//   })
// })
document.querySelectorAll('.buy').forEach((el) => {
  el.addEventListener('click', function() {
    const title = el.previousSibling.previousSibling.innerHTML;
    const cart = localStorage.getItem('cart');
    let 꺼낸거 = [];

    if (cart != null) {
      꺼낸거 = JSON.parse(cart);
    }

    if (cart == null || !꺼낸거.includes(title)) {
      꺼낸거.push(title);
      localStorage.setItem('cart', JSON.stringify(꺼낸거));
    }

    // 중복 제거
    꺼낸거 = Array.from(new Set(꺼낸거));

    // 중복 제거 후 다시 로컬 스토리지에 저장
    localStorage.setItem('cart', JSON.stringify(꺼낸거));

    const cartString = 꺼낸거.join(', ');
    console.log(cartString);
  });
});
