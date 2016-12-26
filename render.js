// Generated by CoffeeScript 1.12.2
(function() {
  var render, renderSlide, slideEl, slideIndex, slides, text;

  slides = [];

  slideEl = null;

  slideIndex = 0;

  text = '# Hello World';

  render = function() {
    var html, index, parser;
    parser = new HyperDown;
    html = parser.makeHtml(text);
    slides = html.split('<hr>');
    if (location.hash != null) {
      index = parseInt(location.hash.slice(1));
      return renderSlide(index);
    } else {
      return renderSlide(0);
    }
  };

  renderSlide = function(index) {
    index = parseInt(index);
    if (slides[index] == null) {
      index = 0;
    }
    slideIndex = index;
    return slideEl.innerHTML = slides[index];
  };

  document.addEventListener('DOMContentLoaded', function() {
    var i, len, resize, script, scripts;
    slideEl = document.getElementById('slide');
    scripts = document.getElementsByTagName('script');
    for (i = 0, len = scripts.length; i < len; i++) {
      script = scripts[i];
      if ('text/markdown' === script.getAttribute('type')) {
        text = script.innerHTML;
        break;
      }
    }
    render();
    window.onhashchange = render;
    window.onpopstate = function(e) {
      return renderSlide(e.state);
    };
    (resize = function() {
      if (window.innerWidth / window.innerHeight > 4 / 3) {
        slideEl.style.width = window.innerHeight * 4 / 3 + 'px';
        return slideEl.style.height = window.innerHeight + 'px';
      } else {
        slideEl.style.width = window.innerWidth + 'px';
        return slideEl.style.height = window.innerWidth * 3 / 4 + 'px';
      }
    })();
    return window.addEventListener('resize', resize);
  });

}).call(this);