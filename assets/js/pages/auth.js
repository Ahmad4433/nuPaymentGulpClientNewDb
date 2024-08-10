let loginButton=document.getElementById("login-btn"),signUpButton=document.getElementById("signup-btn"),alertPopUp=document.getElementById("alert-message");var h6Element=alertPopUp?.querySelector("h6");let logoutButton=document.getElementById("logout-btn");const login=async e=>{try{e.preventDefault(),loginButton.innerHTML=`<span class=" align-items-center">
    <span class="spinner-border flex-shrink-0" role="status">
        <span class="visually-hidden">Loading...</span>
    </span>
    <span class="flex-grow-1 ms-2">
        Loading...
    </span>
 </span>`;var t,a,o=document.getElementById("email"),n=document.getElementById("password-input"),s=(console.log("emaill",n.value),await fetch(live_live+"/user/login",{method:"POST",body:JSON.stringify({email:o.value,password:n.value}),headers:{"Content-type":"application/json"}}));200===s.status?(alertPopUp.classList.add("show","border-primary"),h6Element.innerText="Login Success",t=await s?.json(),console.log(t),t?.success&&(localStorage.setItem("token","token"),localStorage.setItem("userType",t.userInfo.role),localStorage.setItem("name",t.name),localStorage.setItem("file",t.file),localStorage.setItem("email",t.email),localStorage.setItem("userId",t.userId),localStorage.setItem("bio",t.bio),localStorage.setItem("website",t.website),window.location.href="/")):(a=await s?.json(),alertPopUp.classList.add("show","border-danger"),h6Element.innerText=a?.message),loginButton.innerText="Log In"}catch(e){loginButton.innerText="Log In",alertPopUp.classList.add("show","border-danger"),h6Element.innerText="Something went wrong.",console.log("err",e)}setTimeout(()=>{alertPopUp.classList.remove("show"),alertPopUp.classList.remove("border-danger","border-primary")},3e3)},signUp=async e=>{try{e.preventDefault(),signUpButton.innerHTML=`<span class=" align-items-center">
    <span class="spinner-border flex-shrink-0" role="status">
        <span class="visually-hidden">Loading...</span>
    </span>
    <span class="flex-grow-1 ms-2">
        Loading...
    </span>
 </span>`;var t,a,o=document.getElementById("email"),n=document.getElementById("password-input"),s=document.querySelector(".currency-selector"),l=document.getElementById("username"),r=window.location.href.split("=")[1]||"individual",i=await fetch(live_live+"/user/register",{method:"POST",body:JSON.stringify({name:l.value,email:o.value,password:n.value,currency:s.value,role:r}),headers:{"Content-type":"application/json"}});console.log(i),200===i.status?(alertPopUp.classList.add("show","border-primary"),h6Element.innerText="Signup Success",(t=await i?.json())?.success&&(localStorage.setItem("token",t?.token),localStorage.setItem("userId",t.userId),localStorage.setItem("name",t.name),localStorage.setItem("email",t.email),localStorage.setItem("userType",t.role),window.location.href="/update-profile.html")):(a=await i?.json(),alertPopUp.classList.add("show","border-danger"),h6Element.innerText=a?.message),signUpButton.innerText="Sign Up"}catch(e){signUpButton.innerText="Sign Up",alertPopUp.classList.add("show","border-danger"),h6Element.innerText="Something went wrong.",console.log("err",e)}setTimeout(()=>{alertPopUp.classList.remove("show"),alertPopUp.classList.remove("border-danger","border-primary")},3e3)},updateProfile=async e=>{try{e.preventDefault(),signUpButton.innerHTML=`<span class=" align-items-center">
    <span class="spinner-border flex-shrink-0" role="status">
        <span class="visually-hidden">Loading...</span>
    </span>
    <span class="flex-grow-1 ms-2">
        Loading...
    </span>
 </span>`;var t,a,o=document.getElementById("update-email"),n=document.getElementById("username"),s=document.getElementById("website"),l=document.getElementById("bio"),r=document.querySelector(".update-profile-image"),i=(localStorage.getItem("token"),localStorage.getItem("userId")),d=(console.log(r.files[0]),new FormData),m=(d.append("name",n.value),d.append("email",o.value),d.append("image",r.files[0]),d.append("bio",l.value),d.append("website",s.value),d.append("userId",i),await fetch("https://newapp--4-f1f2be6aa8d1.herokuapp.com/user/update",{method:"PUT",body:d}));console.log(m),200===m.status?(alertPopUp.classList.add("show","border-primary"),h6Element.innerText="Profile Updated",(t=await m?.json())?.success&&(localStorage.setItem("token","token"),localStorage.setItem("file",t.file),localStorage.setItem("bio",t.bio),localStorage.setItem("website",t.website),localStorage.setItem("userType",t.role),localStorage.setItem("name",t.name),window.location.href="/")):(a=await m?.json(),alertPopUp.classList.add("show","border-danger"),h6Element.innerText=a?.message),signUpButton.innerText="Update Profile"}catch(e){signUpButton.innerText="Update Profile",alertPopUp.classList.add("show","border-danger"),h6Element.innerText="Something went wrong.",console.log("err",e)}setTimeout(()=>{alertPopUp.classList.remove("show"),alertPopUp.classList.remove("border-danger","border-primary")},3e3)},logout=e=>{e.preventDefault(),localStorage.clear(),window.location.href="/auth-signin.html"},initalizeData=(logoutButton&&(logoutButton.onclick=logout),()=>{var e=document.getElementById("update-email"),t=document.getElementById("username"),a=document.getElementById("bio"),o=localStorage.getItem("userInfo");o&&(o=JSON.parse(o),e.value=o?.user?.email,a.value=o?.user?.bio,t.value=o?.user?.userName)});