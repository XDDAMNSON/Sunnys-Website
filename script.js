function scrollToTop() {
    window.scrollTo({ top: 1, behavior: 'smooth' });
  }
  
  function showAbout() {
    var aboutContent = document.getElementById("aboutContent");
    aboutContent.classList.toggle("hidden");
  }
  
  function showContact() {
    var contactContent = document.getElementById("contactContent");
    contactContent.classList.toggle("hidden");
  }
