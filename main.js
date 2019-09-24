(function () {

  var countdowns = [];

  var arr = [
    {
      text: 'Days',
      varName: '_days'
    },
    {
      text: 'Hours',
      varName: '_hours'
    },
    {
      text: 'Minutes',
      varName: '_minutes'
    },
    {
      text: 'Seconds',
      varName: '_seconds'
    },
  ];


  // This is simple progress bar
  function MyCountdown(element) {
    if (!(element instanceof HTMLElement)) {
      throw new Error('element should be HTMLElement');
    }

    this._element = element;

    if(element.hasAttribute("data-date")) {
      this._date = this.setDate(element.getAttribute('data-date'));
    } else {
      this._date = this.setDate(new Date());
    }

    arr.forEach( function(el) {
      var item = document.createElement('div');
      item.classList.add('item');
      this._element.append( item );

      // Create value in item
      this[el.varName] = document.createElement('div');
      this[el.varName].classList.add('value');
      this[el.varName].innerHTML = 0;
      item.append(this[el.varName]);

      // Create description in item
      var elemText = document.createElement('div');
      elemText.classList.add('description');
      elemText.innerHTML = el.text;
      item.append(elemText);

    }.bind(this));

    setInterval(this.render.bind(this), 1000)

  }

  MyCountdown.prototype.setDate = function (date) {
    if(!(date instanceof Date)) {
      date = new Date(date);
    } else {

    }

    if(date.getTime() > Date.now() ) {

    }

  };

  MyCountdown.prototype.render = function () {
    console.log(Date.now());
  };


  if(!window.MyCountdown) {
    window.MyCountdown = MyCountdown;
  }


  if(!window.CoundownInstances) {
    window.CoundownInstances = countdowns;
  }

  document.addEventListener( 'DOMContentLoaded', function () {
    document.querySelectorAll('.countdown').forEach((countdown)=> {
      countdowns.push(new MyCountdown(countdown));
    });
  });



})();
