const menuItems = [
  {id:1,name:'برجر لحم',cat:'fast',price:8.5,img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',desc:'برجر لحم طازج مع الخضار والجبنة الخاصة'},
  {id:2,name:'بيتزا دجاج',cat:'italian',price:12,img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',desc:'بيتزا دجاج بالجبنة والصوص الإيطالي'},
  {id:3,name:'مندي لحم',cat:'eastern',price:14,img:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80',desc:'مندي عربي مع الأرز والبهارات'},
  {id:4,name:'مشاوي مشكلة',cat:'grill',price:15,img:'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80',desc:'تشكيلة مشاوي مع السلطات'},
  {id:5,name:'باستا ألفريدو',cat:'italian',price:11,img:'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80',desc:'باستا كريمية بالدجاج والفطر'},
  {id:6,name:'سمك مقلي',cat:'sea',price:13,img:'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=600&q=80',desc:'سمك طازج مقلي مع بطاطس'},
  {id:7,name:'شاورما دجاج',cat:'fast',price:6,img:'https://images.unsplash.com/photo-1662116765994-1e4200c43589?auto=format&fit=crop&w=600&q=80',desc:'شاورما دجاج بصوص الثوم'},
  {id:8,name:'تشيز كيك',cat:'dessert',price:4.5,img:'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',desc:'تشيز كيك بالفراولة'},
  {id:9,name:'عصير برتقال',cat:'drink',price:3,img:'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=600&q=80',desc:'عصير برتقال طبيعي'},
  {id:10,name:'موهيتو نعناع',cat:'drink',price:4,img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',desc:'موهيتو منعش بالليمون والنعناع'},
  {id:11,name:'قهوة مثلجة',cat:'drink',price:3.5,img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80',desc:'قهوة مثلجة بالحليب'},
  {id:12,name:'مشروب غازي',cat:'drink',price:2,img:'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=600&q=80',desc:'مشروب غازي بارد'}
];
let cart = [];
const menuGrid=document.getElementById('menuGrid');
function renderMenu(cat='all'){
 const items=cat==='all'?menuItems:menuItems.filter(i=>i.cat===cat);
 menuGrid.innerHTML=items.map(item=>`<article class="card"><img src="${item.img}" alt="${item.name}"><div class="card-body"><h3>${item.name}</h3><p>${item.desc}</p><div class="price">$${item.price.toFixed(2)}</div><button onclick="addToCart(${item.id})">إضافة +</button></div></article>`).join('');
}
function filterItems(cat){renderMenu(cat)}
function addToCart(id){const item=menuItems.find(i=>i.id===id);const found=cart.find(i=>i.id===id);found?found.qty++:cart.push({...item,qty:1});renderCart()}
function changeQty(id,delta){const found=cart.find(i=>i.id===id);if(!found)return;found.qty+=delta;if(found.qty<=0)cart=cart.filter(i=>i.id!==id);renderCart()}
function clearCart(){cart=[];renderCart()}
function renderCart(){const box=document.getElementById('cartItems');document.getElementById('cartCount').textContent=cart.reduce((s,i)=>s+i.qty,0);if(!cart.length){box.className='cart-items empty';box.textContent='السلة فارغة'}else{box.className='cart-items';box.innerHTML=cart.map(i=>`<div class="cart-row"><img src="${i.img}"><div><b>${i.name}</b><br><small>$${i.price.toFixed(2)}</small></div><div class="qty"><button onclick="changeQty(${i.id},-1)">-</button><span>${i.qty}</span><button onclick="changeQty(${i.id},1)">+</button></div></div>`).join('')}
 const subtotal=cart.reduce((s,i)=>s+i.price*i.qty,0);const discount=subtotal>20?subtotal*.2:0;const taxed=(subtotal-discount)*.1;const total=subtotal-discount+taxed;document.getElementById('subtotal').textContent=`$${(subtotal-discount).toFixed(2)}`;document.getElementById('tax').textContent=`$${taxed.toFixed(2)}`;document.getElementById('total').textContent=`$${total.toFixed(2)}`}
function scrollToCart(){document.getElementById('cartBox').scrollIntoView({behavior:'smooth'})}
document.querySelectorAll('input[name="payment"]').forEach(r=>r.addEventListener('change',()=>{document.getElementById('bankakInfo').classList.toggle('hidden',document.querySelector('input[name="payment"]:checked').value!=='bankak')}));
function submitOrder(){const msg=document.getElementById('orderMessage');if(!cart.length){msg.textContent='الرجاء إضافة وجبة إلى السلة أولاً.';msg.classList.remove('hidden');return}const name=document.getElementById('customerName').value.trim();const phone=document.getElementById('phone').value.trim();const address=document.getElementById('address').value.trim();if(!name||!phone||!address){msg.textContent='الرجاء إدخال الاسم ورقم الهاتف والعنوان.';msg.classList.remove('hidden');return}msg.textContent='تم استلام طلبك بنجاح. سيتم التواصل معك لتأكيد الطلب.';msg.classList.remove('hidden');clearCart()}
renderMenu();renderCart();
