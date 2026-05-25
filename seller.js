// ================= USER & ROLE CHECK =================

let user = localStorage.getItem("user");
let role = localStorage.getItem("role");

// Only seller allowed
if (role !== "seller") {
  alert("Only sellers allowed!");
  window.location.href = "index.html";
}

// ================= LOAD PRODUCTS =================

let products = JSON.parse(localStorage.getItem("products")) || [];

// ================= ADD PRODUCT =================

function addProduct() {

  let name = document.getElementById("pname").value.trim();
  let price = document.getElementById("price").value.trim();
  let type = document.getElementById("ptype").value;
  let img = document.getElementById("img").value.trim();

  // Validation
  if (!name || !price || !img) {
    alert("Please fill all fields!");
    return;
  }

  // Duplicate check
  let alreadyExists = products.some(product =>
    product.name.toLowerCase() === name.toLowerCase()
  );

  if (alreadyExists) {
    alert("Product already added!");
    return;
  }

  // Product object
  let product = {
    id: Date.now(),
    name: name,
    price: Number(price),
    type: type,
    img: img
  };

  // Add product
  products.push(product);

  // Save in localStorage
  localStorage.setItem("products", JSON.stringify(products));

  // Success alert
  alert("Product Added Successfully!");

  // Clear form
  document.getElementById("pname").value = "";
  document.getElementById("price").value = "";
  document.getElementById("ptype").value = "all";
  document.getElementById("img").value = "";
}

// ================= LOGOUT =================

function logout() {

  localStorage.removeItem("user");
  localStorage.removeItem("role");

  alert("Logged Out!");

  window.location.href = "login.html";
}