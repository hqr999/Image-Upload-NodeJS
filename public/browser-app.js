const url = '/api/v1/produtos'
const fileFormDOM = document.querySelector('.file-form')

const nameInputDOM = document.querySelector('#name')
const priceInputDOM = document.querySelector('#price')
const imageInputDOM = document.querySelector('#image')

const containerDOM = document.querySelector('.container')
let imageValue;

// imageInputDOM.addEventListener('change',(e)=>{
//  const file = e.target.files[0];
//  console.log(file);
// })







imageInputDOM.addEventListener('change',async (e)=>{
 const imageFile = e.target.files[0];
 const formData = new FormData();
 formData.append('image',imageFile)
 try {
  const {data:{image:{src}}} = await axios.post(`${url}/uploads`,formData,{
   headers:{
    'Content-Type':'multipart/form-data'
   }
  })
  imageValue = src
 } catch (error) {
   imageValue = null
  console.log(error);
 }
})


fileFormDOM.addEventListener('submit',async (e)=>{
e.preventDefault()
const nameValue = nameInputDOM.value;
const priceValue = priceInputDOM.value;
try {
 
 const product = {nome:nameValue,preco:priceValue,imagem:imageValue}
 
  await axios.post(url,product);
  fetchProducts()
} catch (error) {
 console.log(error);
}
})



async function fetchProducts () {
 try {
  const {data:{produtos}} = await axios.get(url);
  
  const productsDOM = produtos.map((product)=>{
return `<article class="product">
<img src="${product.imagem}" alt="${product.nome}" class="img"/>
<footer>
<p>${product.nome}</p>
<span>$${product.preco}</span>
</footer>
</article>`
  }).join('')
  containerDOM.innerHTML = productsDOM
 } catch (error) {
  console.log(error);
 }
 
}

fetchProducts()