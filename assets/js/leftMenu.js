$(document).ready(function() {
  let template = Hogan.compile(menu);
  let output = template.render();

  const div = $('.left-menu');
  div.prepend(output);
});

menu = '\
  <div class="left">\
    <div class="item">\
      <i class="fas fa-fw fa-home"></i>\
      <a class="nav-link" href="https://studio.evolvector.ru/">\
        Главная страница\
      </a>\
    </div>\
    <div class="item">\
      <i class="fas fa-fw fa-microchip"></i>\
      <div class="itemList">\
        <span>Вертор</span>\
        <div class="itemList-content">\
          <a class="nav-link" href="classicPage.html">Система Вертор Классик</a><br>\
          <a class="nav-link" href="standartPage.html">Система Вертор Стандарт</a><br>\
          <a class="nav-link" href="megaPage.html">Система Вертор Мега</a>\
        </div>\
      </div>\
    </div>\
    <div class="item">\
      <i class="fab fa-fw fa-js-square"></i>\
      <a class="nav-link" href="jsPage.html">\
        Вертор js\
      </a>\
    </div>\
    <div class="item">\
      <i class="fab fa-fw fa-python"></i>\
      <a class="nav-link" href="pyCodePage.html">\
        RPI-Вертор\
      </a>\
    </div>\
    <div class="item">\
      <i class="fas fa-fw fa-info"></i>\
      <a class="nav-link" href="info.html">\
        О приложении\
      </a>\
    </div>\
  </div>\
'