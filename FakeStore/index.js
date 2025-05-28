const mainDiv= document.getElementById('main');
function fetchData()
{
    fetch('https://fakestoreapi.com/products')
    .then(function(res){ return res.json()})
    .then(function(data){displaydata(data)})

}
function displaydata(data)
{
    data.forEach(function(val)
{
    const newDiv= document.createElement('div');
    newDiv.classList.add('booksapi')
    const productImage= document.createElement('img')
    const productTitle=document.createElement('h3')
    const productPrice= document.createElement('p')
    const productButton= document.createElement('button')
    productImage.src=val.image;
    productImage.alt=val.title;
    productTitle.textContent=val.title;
    productPrice.textContent="$"+val.price;
    productButton.textContent='add to cart'
    productButton.addEventListener('click',addtocart);
    newDiv.append(productImage,productTitle,productPrice,productButton)
    mainDiv.appendChild(newDiv)
})

}
fetchData();
let c=0;
function addtocart()
{
    c++;
   let cnt= document.getElementById('count');
   cnt.textContent=c;
  const pop= document.getElementById('popup');
  pop.style.display='block'
  if(pop.timeoutId) clearTimeout(pop.timeoutId);
  pop.timeoutId=setTimeout(()=>{
    pop.style.display='none';
  },2000)
 

}
let h=document.getElementById('humber');
let menu= document.getElementById('menu')
h.addEventListener('click',()=>{
    menu.classList.toggle('hide')
})