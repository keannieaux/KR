var themeButton = document.getElementById("button-light");
  var body = document.body;
  var header = document.getElementsByClassName("header");
  var main = document.getElementsByClassName("main>div");
  var main_block = document.getElementsByClassName("main-block");
  var text_premium1 = document.getElementsByClassName("text-block-premium1");
  var text_premium2 = document.getElementsByClassName("text-block-premium2");
  var text_trending3 = document.getElementsByClassName("text-trending3");
  var text_trending2 = document.getElementsByClassName("text-trending2");
  var text_browse1 = document.getElementsByClassName("text-browse1");
  var text_browse2 = document.getElementsByClassName("text-browse2");
  var text_benefits1 = document.getElementsByClassName("text-benefits1");
  var text_benefits2 = document.getElementsByClassName("text-benefits2");
  var block_testimonials1 = document.getElementsByClassName("block-testimonials1");
  var block_testimonials4 = document.getElementsByClassName("block-testimonials4");
  var text_testimonials1 = document.getElementsByClassName("text-testimonials1");
  var text_testimonials2 = document.getElementsByClassName("text-testimonials2");
  var block_blog4 = document.getElementsByClassName("block-blog4");
  var footer = document.getElementsByClassName("footer");

function toggleTheme() {
  localStorage.setItem('body-theme','light')
body.classList.toggle("dark");
if (body.classList.contains("dark")) {
  localStorage.setItem('body-theme','dark')
} else {
  localStorage.setItem('body-theme','light')
}

}
if (localStorage.getItem('body-theme') === 'dark')
    {
      body.classList.toggle("dark");
    }
    else{
      body.classList.remove("dark");
    }
