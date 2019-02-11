
const app = (function (document) {

  const root = document.querySelector("div#root");

  const handlers = {
    isPrime: function (event) {

      const n = event.target.value;

      var primes = [];
      lol: for (var i = 2; i <= n; i++) {
        if (i <= 1) continue
        for (var j = 2; j < i; j++) if (i % j == 0) continue lol;
        primes.push(i);
      }

      event.target.nextElementSibling.nextElementSibling.innerText = primes.join(", ")
    },

    fibbo: function (event) {

      const n = event.target.value;

      var fibonacci_series = function (n) {
        if (n === 1) return [0, 1]

        var s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);

        return s;
      };

      event.target.nextElementSibling.nextElementSibling.innerText = fibonacci_series(n).join(", ")
    },

    sort: function (event) {

      const n = event.target.value;

      var lol = n.split(' ').filter(x => parseInt(x) == x).sort((a, b) => b - a)

      event.target.nextElementSibling.nextElementSibling.innerText = lol.join(", ")
    },

    truth: function (event) {
      const n = event.target.value;

      var lol = n.split(' ')
        .map(x => x.toLowerCase())
        .filter(x => x === 'true' || x === 'false')
        .slice(0, 4)
        .filter(x => x === 'true').length == 2

      event.target.nextElementSibling.nextElementSibling.innerText = lol
    },

    pal: function (event) {

      var pal = true;

      var str = event.target.value;

      if (str.length === 0) {
        pal = false
      } else {


        var re = /[^A-Za-zА-Яа-я0-9]/g;
        str = str.toLowerCase().replace(re, '');
        var len = str.length;
        for (var i = 0; i < len / 2; i++) {
          if (str[i] !== str[len - 1 - i]) {
            pal = false;
            break;
          }
        }
      }

      event.target.nextElementSibling.nextElementSibling.innerText = pal
    },

    nonnum: function (event) {

      event.target.nextElementSibling.nextElementSibling.innerText =
        event.target.value.replace(/[\W]*[0-9]+[.,]?[\W]*/g, '');
    }
  }


  const all = {
    I: { cap: 'I', type: 'text', el: null, handler: 'isPrime' },
    II: { cap: 'II', type: 'text', el: null, handler: 'fibbo' },
    III: { cap: 'III', type: 'text', el: null, handler: 'sort' },
    IV: { cap: 'IV', type: 'text', el: null, handler: 'truth' },
    V: { cap: 'V', type: 'text', el: null, handler: 'pal' },
    VI: { cap: 'VI', type: 'text', el: null, handler: 'nonnum' }
  }

  const router = {}


  const isPrime = function (n) {
    console.log("s", n);

  }


  const init = function () {
    render();

    var me = this;

    Object.keys(all).forEach(key => all[key].el = document.querySelector("div#" + key))

    document.addEventListener('DOMContentLoaded', function () {
      Object.keys(all).forEach(el => {
        all[el].el.onchange = handlers[all[el].handler]
      })
    }, false)
  }

  const render = function () {
    root.innerHTML = Object.keys(all)
      .map(x => `<div class="task" id="${x}">
      <span class="task__caption">${x}</span>
      <input type="text"/>
      <span>-></span>
      <span class="task__result">${x}</span>
      </div>`)
      .join("")
  }


  const wire = function () {

  }

  const simpleNumbers = function (n) {

  }


  return {
    init: init
  }

}(document))

app.init();