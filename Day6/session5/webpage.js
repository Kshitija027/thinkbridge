// Search keywords
const searchBox = document.getElementById("searchBox");
const allItems = document.querySelectorAll("section ul li");

searchBox.addEventListener("keyup", () => {
  const query = searchBox.value.toLowerCase();
  allItems.forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(query) ? "block" : "none";
  });
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Active nav highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
  });
});

// Fade-in examples
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });

document.querySelectorAll(".example").forEach(el => observer.observe(el));

// Extra: Console demo for arrays, strings, promises
console.log("=== Array Example ===");
let arr=[1,2,3,4];
console.log("Squares:", arr.map(x=>x*x));
console.log("Evens:", arr.filter(x=>x%2===0));
console.log("Sum:", arr.reduce((a,b)=>a+b,0));

console.log("=== String Example ===");
let s="Hello JS";
console.log(s.toUpperCase(), s.includes("JS"), s.split(" "));

console.log("=== Promise Example ===");
new Promise(res=>setTimeout(()=>res("Resolved after 1s"),1000))
  .then(msg=>console.log(msg));

(async ()=>{
  let data=await new Promise(res=>setTimeout(()=>res("Async Data Ready"),1500));
  console.log(data);
})();
// Contact form handling
const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formResponse.style.color = "red";
    formResponse.textContent = "⚠️ Please fill in all fields!";
    return;
  }

  // Simple email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formResponse.style.color = "red";
    formResponse.textContent = "⚠️ Please enter a valid email address!";
    return;
  }

  // Success
  formResponse.style.color = "green";
  formResponse.textContent = `✅ Thank you, ${name}! We’ll contact you at ${email}.`;

  // Reset form
  contactForm.reset();
});





















