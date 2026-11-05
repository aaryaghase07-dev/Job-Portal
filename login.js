let form=document.querySelector("#loginForm");
let loginbtn=document.querySelector("#loginbtn");
let pass=document.querySelector("#password");
let toggle=document.querySelector("#togglePassword")





let successMsg = document.querySelector(".success-msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    successMsg.classList.add("succ");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
});
    
toggle.addEventListener("click",()=>{
  if(pass.type==="password"){
  pass.type="text";
  }
  else{
    pass.type="password";
  }
});
