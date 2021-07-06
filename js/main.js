let wrapper = ''
let url = location.hash

if(url === '#product' || url === '') {
    product()
} else if (url === '#buy') {
  buy()
}

function product () {
  wrapper = document.getElementById('app')
  let product = document.getElementById('product').content
  let copyProduct = document.importNode(product, true)
  wrapper.appendChild(copyProduct)
  
  document.querySelector('.product__button').addEventListener('click', buy)
}

function buy() {
  wrapper = document.getElementById('app')
  wrapper.removeChild(wrapper.firstChild)
  let buy = document.getElementById('form').content
  let copyBuy = document.importNode(buy, true)
  wrapper.appendChild(copyBuy)
  console.log('hiiiieee');
}