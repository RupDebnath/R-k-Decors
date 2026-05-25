// AUTH
let user = localStorage.getItem("user");
let role = localStorage.getItem("role");

if(!user && !location.pathname.includes("login.html")){
  location.href = "login.html";
}

// PRODUCTS
let defaultProducts = [

 {
  id:1,
  name:"Royal Wedding Mandap",
  price:12000,
  type:"wedding",
  img:"https://png.pngtree.com/thumb_back/fh260/background/20240705/pngtree-indian-wedding-mandap-decor-yellow-and-white-flowers-image_15937538.jpg",
  desc:`
• Premium royal-style wedding mandap decoration.
• Fresh flower arrangements with elegant drapes.
• LED lighting setup for a luxury atmosphere.
• Traditional and modern theme customization available.
• Perfect for indoor and outdoor wedding events.
• Includes stage background and seating decoration.
• Professional setup and complete event support included.
`
},

{
  id:2,
  name:"Reception Stage Decoration",
  price:9000,
  type:"wedding",
  img:"https://5.imimg.com/data5/SELLER/Default/2023/2/OR/PN/CE/184545542/img20220829161354-2.jpg",
  desc:`
• Stylish reception stage decoration with modern design.
• Beautiful floral backdrop with premium curtains.
• Decorative lighting and LED focus effects included.
• Romantic seating arrangement for couples.
• Suitable for wedding receptions and grand celebrations.
• Attractive entrance and side decoration available.
• Fully customizable according to event theme.
`
},

{
  id:3,
  name:"Haldi Ceremony Setup",
  price:4500,
  type:"haldi",
  img:"https://varniya.com/cdn/shop/articles/Trendy_Haldi_Ceremony_Decoration_Ideas_for_Function_at_Home_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x50_ad08cef9-b9f3-4e96-a673-4d3bd37d4097.png?v=1748863374",
  desc:`
• Traditional haldi ceremony decoration setup.
• Yellow floral arrangements and umbrella decor included.
• Decorative seating with colorful cushions.
• Natural lighting and vibrant festive appearance.
• Suitable for home and outdoor haldi events.
• Customized name boards and props available.
• Budget-friendly and elegant decoration service.
`
},

{
  id:4,
  name:"Mehendi Decoration",
  price:5000,
  type:"mehendi",
  img:"https://www.flowernpetals.com/wp-content/uploads/2025/01/IMG_9353.JPEG.webp",
  desc:`
• Colorful mehendi function decoration setup.
• Floral hanging decor with vibrant cushions.
• Decorative umbrellas and boho-style seating included.
• LED lights create a festive atmosphere.
• Perfect for bridal mehendi celebrations.
• Traditional and modern themes available.
• Complete decoration handled by professionals.
`
},

{
  id:5,
  name:"Engagement Stage Decor",
  price:7000,
  type:"engagement",
  img:"https://www.marriagecolours.com/wp-content/uploads/2024/10/sree-varaaham-engagement-decor-floral-decor-stage.jpg",
  desc:`
• Elegant engagement stage decoration service.
• Romantic flower arrangements and backdrop design.
• Premium lighting and decorative elements included.
• Couple seating setup with modern styling.
• Perfect for engagement and ring ceremonies.
• Customized color themes available.
• Professional installation and support provided.
`
},

{
  id:6,
  name:"Birthday Balloon Decoration",
  price:2500,
  type:"birthday",
  img:"https://4.imimg.com/data4/MW/IS/ANDROID-23383767/product.jpeg",
  desc:`
• Attractive birthday balloon decoration setup.
• Colorful balloons with LED lighting effects.
• Customized age number and name decoration.
• Cake table styling included in the package.
• Suitable for kids and adult birthday parties.
• Indoor and outdoor decoration available.
• Creative themes designed by professionals.
`
},

{
  id:7,
  name:"Baby Shower Decoration",
  price:5500,
  type:"babyshower",
  img:"https://www.vistaballoondecoration.co.in/uploads/products/1730340324.jpeg",
  desc:`
• Beautiful baby shower decoration service.
• Pastel balloon setup with floral decoration.
• Welcome boards and theme backdrop included.
• Perfect for indoor baby shower celebrations.
• Customized pink and blue themes available.
• Comfortable seating and table styling included.
• Complete event decoration handled professionally.
`
},

{
  id:8,
  name:"Anniversary Decoration",
  price:3500,
  type:"anniversary",
  img:"https://www.manyavar.com/dw/image/v2/BJZV_PRD/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dwaf8559e5/Manyavar%20images%20J/54401/Manyavar%20&%20Mohey%20Non-Apparel%20-%20Stunning%20Wedding%20Anniversary%20Decoration%20Ideas%20to%20Celebrate%20Your%20Love_blog%201%20copy.jpg",
  desc:`
• Romantic anniversary room decoration setup.
• Heart-shaped balloons and floral arrangements.
• Decorative candles and fairy lights included.
• Couple name customization available.
• Suitable for home and banquet celebrations.
• Luxury decoration with elegant appearance.
• Perfect for surprise anniversary parties.
`
},

{
  id:9,
  name:"Floral Entrance Gate",
  price:3000,
  type:"floral",
  img:"https://img.pikbest.com/photo/20240821/wedding-ceremony-gate-design-with-flowers-and-fabric_10746799.jpg!w700wp",
  desc:`
• Elegant floral entrance gate decoration setup.
• Fresh flowers with attractive hanging elements.
• Perfect for weddings and grand celebrations.
• Traditional and modern designs available.
• Creates a luxurious first impression for guests.
• Customized color combinations supported.
• Complete setup and removal service included.
`
},

{
  id:10,
  name:"School Event Decoration",
  price:8500,
  type:"event",
  img:"https://i.pinimg.com/736x/1f/8f/ff/1f8fff6261249e02edb6ab443af646ba.jpg",
  desc:`
• Professional school event decoration service.
• Stage setup with lighting and banner support.
• Decorative balloon and floral arrangements included.
• Suitable for annual functions and ceremonies.
• Attractive entrance and seating decoration available.
• High-quality materials used for event setup.
• Managed by experienced decoration professionals.
`
},

{
  id:11,
  name:"Luxury Wedding Entrance",
  price:6500,
  type:"wedding",
  img:"https://i.pinimg.com/1200x/1b/e1/5f/1be15f20c8c703ddd276a99ad530d3b5.jpg",
  desc:`
• Grand wedding entrance decoration with floral styling.
• LED lighting and hanging decorative elements included.
• Royal carpet setup for guest welcome.
• Fresh flowers create a premium atmosphere.
• Suitable for indoor and outdoor wedding venues.
• Customized entrance themes available.
• Professional installation with elegant finishing.
`
},

{
  id:12,
  name:"Couple Stage Backdrop",
  price:7200,
  type:"wedding",
  img:"https://thumbs.dreamstime.com/b/indian-wedding-stage-mandap-beautiful-shot-ceremony-night-city-palace-jaipur-india-38454598.jpg",
  desc:`
• Premium couple stage backdrop decoration service.
• Decorative flower walls and curtain styling included.
• LED lighting creates a romantic atmosphere.
• Modern and traditional themes available.
• Perfect for receptions and engagement events.
• Luxury sofa setup included in package.
• Complete professional decoration support provided.
`
},

{
  id:13,
  name:"Traditional Puja Decoration",
  price:4800,
  type:"puja",
  img:"https://t4.ftcdn.net/jpg/09/38/50/99/360_F_938509980_ug6K5kWri7Wv5ymaZRIAct7mh16FwGzV.jpg",
  desc:`
• Traditional puja decoration with cultural styling.
• Fresh flowers and diya arrangements included.
• Decorative cloth and lighting setup available.
• Suitable for temple and home puja events.
• Attractive background decoration included.
• Peaceful and spiritual ambiance creation.
• Experienced decorators manage complete setup.
`
},

{
  id:14,
  name:"Saraswati Puja Stage",
  price:5200,
  type:"puja",
  img:"https://edumission.online/ERPLEDUMISSION/modules/images/clg_gallery/65_738_5.jpg",
  desc:`
• Elegant Saraswati Puja stage decoration service.
• Yellow and white floral arrangements included.
• Decorative idol background setup available.
• School and college event friendly design.
• Soft lighting for traditional appearance.
• Customized banners and name boards supported.
• Complete decoration handled professionally.
`
},

{
  id:15,
  name:"Wedding Floral Ceiling",
  price:11000,
  type:"floral",
  img:"https://content.jdmagicbox.com/v2/comp/kakinada/p7/9999px884.x884.250118183700.r5p7/catalogue/maha-lakshmi-events-kakinada-photographers-qcujr27ojl.jpg",
  desc:`
• Luxury floral ceiling decoration setup.
• Hanging flowers create premium visual appearance.
• Suitable for wedding halls and receptions.
• Elegant lighting effects included in package.
• Fresh flower combinations available.
• Customized ceiling themes supported.
• Professional setup with detailed finishing.
`
},

{
  id:16,
  name:"Birthday Surprise Room Decor",
  price:2800,
  type:"birthday",
  img:"https://celebrationmanagement.com/super_admin/uploads/package/gallery/74651.jpg",
  desc:`
• Romantic birthday surprise room decoration.
• Balloon setup with candles and rose petals.
• LED lights create attractive ambiance.
• Perfect for surprise birthday celebrations.
• Customized name and age decoration available.
• Suitable for hotel and home decoration.
• Quick setup with premium materials included.
`
},

{
  id:17,
  name:"Wedding Pathway Decoration",
  price:4300,
  type:"wedding",
  img:"https://t4.ftcdn.net/jpg/10/01/61/71/360_F_1001617164_3dApliD42BmMigjfZKLvaCY59luGywwa.jpg",
  desc:`
• Decorative wedding pathway setup service.
• Floral arrangements with lighting included.
• Red carpet styling creates royal appearance.
• Suitable for indoor and outdoor weddings.
• Customized pathway themes available.
• Elegant guest walking experience provided.
• Complete professional decoration support included.
`
},

{
  id:18,
  name:"Corporate Conference Decor",
  price:8500,
  type:"meeting",
  img:"https://wallpapers.com/images/hd/corporate-event-1536-x-1024-wallpaper-hopw9ca5ayddm607.jpg",
  desc:`
• Professional conference decoration service.
• Modern stage and seating arrangement setup.
• LED screen and branding support available.
• Ideal for business meetings and seminars.
• Elegant entrance and backdrop included.
• High-quality decorative materials used.
• Complete event management assistance provided.
`
},

{
  id:19,
  name:"College Fest Decoration",
  price:12000,
  type:"event",
  img:"https://5.imimg.com/data5/SELLER/Default/2024/10/462190587/IR/PN/UE/10376327/college-fest-event-photography-service.jpeg",
  desc:`
• Attractive college fest decoration setup.
• Large stage with creative lighting effects.
• Balloon and banner arrangements included.
• Suitable for cultural and annual programs.
• Modern and energetic event atmosphere.
• Customized college branding supported.
• Professional event decoration team available.
`
},

{
  id:20,
  name:"Floral Photo Booth",
  price:3800,
  type:"floral",
  img:"https://i.pinimg.com/736x/b6/73/5e/b6735e148a7f13ed728ae0b1fd054754.jpg",
  desc:`
• Stylish floral photo booth decoration.
• Fresh flowers and decorative frames included.
• Perfect selfie and photography corner setup.
• Suitable for weddings and parties.
• Customized themes and colors available.
• Premium lighting setup included.
• Attractive and modern event appearance guaranteed.
`
},

{
  id:21,
  name:"Ring Ceremony Stage",
  price:6800,
  type:"engagement",
  img:"https://i.pinimg.com/originals/0b/7a/ab/0b7aabef6fd792766fd891408cf0d449.jpg",
  desc:`
• Elegant ring ceremony stage decoration.
• Romantic floral and curtain arrangements included.
• Decorative lighting for premium appearance.
• Comfortable seating setup for couples.
• Perfect for engagement and family events.
• Customized themes supported.
• Professional decoration team available.
`
},

{
  id:22,
  name:"Baby Welcome Decoration",
  price:3500,
  type:"babyshower",
  img:"https://image.cdn.shpy.in/337348/SKU-1341_5-1712553819886.jpg?format=webp",
  desc:`
• Cute baby welcome decoration setup.
• Balloon arches and pastel themes included.
• Name boards and floral styling available.
• Suitable for indoor celebrations.
• Soft lighting creates warm atmosphere.
• Customized themes for baby boy or girl.
• Professional event decoration service provided.
`
},

{
  id:23,
  name:"Anniversary Candle Decor",
  price:2600,
  type:"anniversary",
  img:"https://s.alicdn.com/@sc04/kf/Af62a4c43080d40ff833dc9bbd64382c9D.jpeg",
  desc:`
• Romantic anniversary candle decoration setup.
• Rose petals and balloons included.
• LED lights create luxury atmosphere.
• Perfect for couple surprise celebrations.
• Suitable for hotels and homes.
• Customized couple name setup available.
• Elegant and affordable decoration package.
`
},

{
  id:24,
  name:"Temple Entrance Decoration",
  price:4000,
  type:"puja",
  img:"https://thumbs.dreamstime.com/b/colorful-durga-festival-pandal-ornate-gopuram-style-decorations-pune-maharashtra-india-colorful-durga-festival-pandal-447327076.jpg",
  desc:`
• Traditional temple entrance decoration setup.
• Flower garlands and diya styling included.
• Decorative lighting creates spiritual ambiance.
• Suitable for puja and religious functions.
• Premium floral arrangements available.
• Attractive cultural appearance provided.
• Complete decoration support included.
`
},

{
  id:25,
  name:"Luxury Balloon Ceiling",
  price:5000,
  type:"birthday",
  img:"https://balloonartistry.com/wp-content/gallery/ceiling-balloon-decor/white_and_silver_balloon_ceiling.jpg",
  desc:`
• Decorative balloon ceiling setup service.
• LED balloons and hanging ribbons included.
• Perfect for birthday and party events.
• Customized color combinations available.
• Creates premium party atmosphere.
• Indoor hall decoration supported.
• High-quality balloons and materials used.
`
}

];

let sellerProducts =
  JSON.parse(localStorage.getItem("products")) || [];

/* ✅ ROLE BASED PRODUCTS */
let products;

if(role === "seller"){
  products = sellerProducts;
} else {
  products = defaultProducts;
}

// WISHLIST
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function toggleWishlist(id){
  let index = wishlist.findIndex(w => w.id === id);

  if(index > -1) wishlist.splice(index,1);
  else wishlist.push(products.find(p => p.id === id));

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  loadProducts();
}

// RATINGS
let ratings = JSON.parse(localStorage.getItem("ratings")) || {};

function rateProduct(id,val){
  ratings[id]=val;
  localStorage.setItem("ratings",JSON.stringify(ratings));
  loadProducts();
}

// CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id){
  let item = products.find(p=>p.id===id);
  let exist = cart.find(c=>c.id===id);

  if(exist){
    exist.qty++;
  } else {
    cart.push({...item, qty:1});
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  toggleCart(true);
  loadCart();

  setTimeout(() => {
    window.location.href = "cart.html";
  }, 50000);
}

// PRODUCTS LOAD
function loadProducts(list=products){
  let box=document.getElementById("products");
  if(!box) return;

  box.innerHTML="";

  list.forEach(p=>{
    let rate=ratings[p.id]||0;
    let isWish=wishlist.find(w=>w.id===p.id);

    box.innerHTML+=`
      <div class="card">
        <div class="wishlist" onclick="toggleWishlist(${p.id})">
          ${isWish?"❤️":"🤍"}
        </div>

        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>

        <div class="stars">
          ${[1,2,3,4,5].map(i=>`
            <span class="star ${i<=rate?"active":""}"
            onclick="rateProduct(${p.id},${i})">★</span>
          `).join("")}
        </div>

        <button class="btn" onclick="addToCart(${p.id})">
          Add to Book
        </button>

        <!-- ✅ NEW FEATURE BUTTON (ADDED ONLY) -->
        <button class="btn" onclick="viewFullProduct(${p.id})">
          View Full Info
        </button>

      </div>
    `;
  });
}

// SEARCH
function searchProducts(){
  let val=document.getElementById("search").value.toLowerCase();
  loadProducts(products.filter(p=>p.name.toLowerCase().includes(val)));
}

// FILTER
function filterProducts(){
  let val=document.getElementById("filter").value;
  loadProducts(val==="all"?products:products.filter(p=>p.type===val));
}

// CART LOAD
function loadCart(){
  let box=document.getElementById("cartItems");
  let totalBox=document.getElementById("cartTotal");
  if(!box) return;

  box.innerHTML="";
  let total=0;

  cart.forEach((c,i)=>{
    let sub=c.price*c.qty;
    total+=sub;

    box.innerHTML+=`
      <div class="cart-item">
        <img src="${c.img}">
        <div class="cart-info">
          <h4>${c.name}</h4>
          <p>₹${c.price}</p>

          <div class="qty-box">
            <button onclick="changeQty(${i},-1)">-</button>
            ${c.qty}
            <button onclick="changeQty(${i},1)">+</button>
          </div>

          <small>Subtotal: ₹${sub}</small><br>
          <button onclick="removeItem(${i})">Remove</button>
        </div>
      </div>
    `;
  });

  if(totalBox) totalBox.innerText="Total: ₹"+total;
}

// QTY
function changeQty(i,val){
  cart[i].qty+=val;
  if(cart[i].qty<=0) cart.splice(i,1);
  localStorage.setItem("cart",JSON.stringify(cart));
  loadCart();
}

// REMOVE
function removeItem(i){
  cart.splice(i,1);
  localStorage.setItem("cart",JSON.stringify(cart));
  loadCart();
}

// CART TOGGLE
function toggleCart(force=false){
  let sidebar=document.getElementById("cartSidebar");
  if(force) sidebar.classList.add("active");
  else sidebar.classList.toggle("active");
  loadCart();
}

// CHECKOUT
function goToCheckout(){
  if(cart.length===0){
    alert("Cart is empty!");
    return;
  }
  location.href="checkout.html";
}

// MENU / DARK / LOGOUT
function toggleMenu(){
  let m=document.getElementById("mobileMenu");
  if(m) m.style.display=m.style.display==="flex"?"none":"flex";
}

function toggleDark(){
  document.body.classList.toggle("dark");
}

function logout(){
  localStorage.clear();
  location.href="login.html";
}

function logout(){

  // ONLY REMOVE LOGIN SESSION
  localStorage.removeItem("user");
  localStorage.removeItem("role");

  // KEEP:
  // profile image
  // wishlist
  // cart
  // theme
  // orders
  // etc.

  location.href = "login.html";
}

// INIT
loadProducts();
loadCart();

// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

// LOAD SAVED THEME
if(localStorage.getItem("theme") === "dark"){

  document.body.classList.add("dark");
  themeBtn.innerHTML = "🌛";

}else{

  themeBtn.innerHTML = "🌞";
}

// TOGGLE THEME
function toggleDarkMode(){

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){

    themeBtn.innerHTML = "🌛";
    localStorage.setItem("theme","dark");

  }else{

    themeBtn.innerHTML = "🌞";
    localStorage.setItem("theme","light");
  }
}

// WISHLIST VIEW
function viewWishlist(){
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if(wishlist.length === 0){
    alert("Your wishlist is empty");
    return;
  }

  let items = wishlist.map(item =>
    `${item.name} (₹${item.price || 0})`
  ).join("\n");

  alert("Your Wishlist:\n\n" + items);
}

// ================= NEW FEATURE =================

// VIEW FULL PRODUCT (MODAL)
function viewFullProduct(id){

  let products = JSON.parse(localStorage.getItem("products")) || [];
  let product = products.find(p => p.id === id) || defaultProducts.find(p => p.id === id);

  if(!product){
    alert("Product not found");
    return;
  }

  document.getElementById("modalImg").src = product.img;
  document.getElementById("modalName").innerText = product.name;
  document.getElementById("modalPrice").innerText = "₹" + product.price;
  document.getElementById("modalDesc").innerText =
    product.desc || "No description available";

  document.getElementById("productModal").style.display = "block";

   
}

// CLOSE MODAL
function closeModal(){
  document.getElementById("productModal").style.display = "none";

   document.body.style.overflow = "auto";
}

// ADD TO CART FROM MODAL
function modalAddToCart(){
  let name = document.getElementById("modalName").innerText;

  let item = products.find(p => p.name === name) || defaultProducts.find(p => p.name === name);

  let exist = cart.find(c => c.id === item.id);

  if(exist){
    exist.qty++;
  } else {
    cart.push({...item, qty:1});
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart Successfully!");
  closeModal();
}      






