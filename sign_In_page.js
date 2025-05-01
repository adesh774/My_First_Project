let attempts = 0;

function signin() {
  const username = document.getElementById("signinUser").value.trim();
  const password = document.getElementById("signinPass").value;
  const msg = document.getElementById("signinMsg");

  msg.innerHTML = "";

  if (!username || !password) {
    msg.style.color = "red";
    msg.innerHTML = "Please enter both username and password.";
    return;
  }

  const savedPassword = localStorage.getItem("user_" + username);

  if (savedPassword === null){
    msg.style.color = "red";
    msg.innerHTML = "User not found. Please sign up first.";
    return;
  }

  else if (password === savedPassword) {
    msg.style.color = "green";
    msg.innerHTML = "Login successful! Redirecting...";
    attempts = 0;

    setTimeout(() => {
      window.location.href = "Website_page.html";
    }, 500);
  } else {
    attempts++;
    msg.style.color = "red";
    const left = 3 - attempts;
    msg.innerHTML = `Incorrect password. Attempts left: ${left}`;

    if (attempts >= 3) {
      alert("3 incorrect attempts! You are locked out.");
      document.getElementById("signinUser").disabled = true;
      document.getElementById("signinPass").disabled = true;
      msg.innerHTML = "Account locked due to multiple failed attempts.";
      
    }
    
  }
}