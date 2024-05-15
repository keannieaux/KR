var button= document.getElementById("button-light");
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
  button.addEventListener("click", function() {
    body.classList.toggle("dark");
    header.classList.toggle("dark");
    main.classList.toggle("dark");
    main_block.classList.toggle("dark");
    text_premium1.classList.toggle("dark");
    text_premium2.classList.toggle("dark");
    text_trending3.classList.toggle("dark");
    text_trending2.classList.toggle("dark");
    text_browse1.classList.toggle("dark");
    text_browse2.classList.toggle("dark");
    text_benefits1.classList.toggle("dark");
    text_benefits2.classList.toggle("dark");
    block_testimonials1.classList.toggle("dark");
    block_testimonials4.classList.toggle("dark");
    text_testimonials1.classList.toggle("dark");
    text_testimonials2.classList.toggle("dark");
    block_blog4.classList.toggle("dark");
    footer.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      button.textContent = "Светлая тема";
    } else {
      button.textContent = "Темная тема";
    }
  });