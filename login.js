function login(){
  let name = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let role = document.getElementById("role").value;

  if(!name){
    alert("Enter name");
    return;
  }
  if(!password){
    alert("Enter password");
    return;
  }

  localStorage.setItem("user", name);
  localStorage.setItem("role", role);
  localStorage.setItem("password", password);

  if(role === "seller"){
    location.href = "seller.html";
  } else {
    location.href = "index.html";
  }
}