document.addEventListener("DOMContentLoaded", () => {  
  const icon = document.getElementById("icon");  
  const spans = document.querySelectorAll("span"); // انتخاب تمام spanها  
  const navTexts = document.querySelectorAll("nav *");  
  
  // انتخاب تگ‌های a که باید رنگ‌شان تغییر کند  
  const links = document.querySelectorAll(".id a"); // فرض می‌کنیم که تگ‌های مورد نظر در div با کلاس "id" هستند  

  const currentTheme = localStorage.getItem("theme");  

  if (currentTheme === "dark") {  
    document.body.classList.add("dark-mode");  
    icon.classList.remove("fas", "fa-sun");  
    icon.classList.add("fas", "fa-moon");  

    spans.forEach((span) => {  
      span.style.color = "#facc15";   
    });  

    document.body.style.backgroundColor = "#000";  

    navTexts.forEach((el) => {  
      el.style.color = "#fff";   
    });  

    // تغییر رنگ تگ‌های a به سفید در دارک مود (فقط در بخش id)  
    links.forEach(link => {  
      link.style.color = "#fff";   
    });  
  } else {  
    document.body.classList.remove("dark-mode");  
    icon.classList.remove("fas", "fa-moon");  
    icon.classList.add("fas", "fa-sun");  

    spans.forEach((span) => {  
      span.style.color = "#96a6f4"; // رنگ همه spanها در لایت مود  
    });  

    document.body.style.backgroundColor = "#fff";  

    navTexts.forEach((el) => {  
      el.style.color = "#000";   
    });  

    // تغییر رنگ تگ‌های a به مشکی در لایت مود (فقط در بخش id)  
    links.forEach(link => {  
      link.style.color = "#000"; // رنگ مشکی برای تگ‌های a در لایت مود  
    });  
  }  
});  

const myFunction = () => {  
  document.body.classList.toggle("dark-mode");  
  const icon = document.getElementById("icon");  
  const spans = document.querySelectorAll("span"); // گرفتن همه spanها  
  const navTexts = document.querySelectorAll("nav *");  
  
  // انتخاب تگ‌های a که باید رنگ‌شان تغییر کند  
  const links = document.querySelectorAll(".id a"); // فرض می‌کنیم که تگ‌های مورد نظر در div با کلاس "id" هستند  

  if (document.body.classList.contains("dark-mode")) {  
    localStorage.setItem("theme", "dark");   
    icon.classList.remove("fas", "fa-sun");  
    icon.classList.add("fas", "fa-moon");  

    spans.forEach((span) => {  
      span.style.color = "#facc15";  
    });  

    document.body.style.backgroundColor = "#000";  

    navTexts.forEach((el) => {  
      el.style.color = "#fff";  
    });  

    // تغییر رنگ تگ‌های a به سفید در دارک مود (فقط در بخش id)  
    links.forEach(link => {  
      link.style.color = "#fff";   
    });  
  } else {  
    localStorage.setItem("theme", "light");   
    icon.classList.remove("fas", "fa-moon");  
    icon.classList.add("fas", "fa-sun");  

    spans.forEach((span) => {  
      span.style.color = "#96a6f4"; // رنگ همه spanها در لایت مود  
    });  

    document.body.style.backgroundColor = "#fff";  

    navTexts.forEach((el) => {  
      el.style.color = "#000";  
    });  

    // تغییر رنگ تگ‌های a به مشکی در لایت مود (فقط در بخش id)  
    links.forEach(link => {  
      link.style.color = "#000"; // رنگ مشکی برای تگ‌های a در لایت مود  
    });  
  }  
};