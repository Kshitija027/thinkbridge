
# tables
# before
ul>li*3

# after

<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>

# page layout
div.container>header+main+footer
<div class="container">
  <header></header>
  <main></main>
  <footer></footer>
</div>

# form elements

form>input:text+input:password+button
<form>
  <input type="text">
  <input type="password">
  <button></button>
</form>


section#about>h2.title+p.desc
<section id="about">
  <h2 class="title"></h2>
  <p class="desc"></p>
</section>

html boilerplate so that tab control + !
then it give boilerplate

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>
