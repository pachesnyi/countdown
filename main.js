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

    this._target= 0;
    this._date = new Date();
    this._element = element;
    this._intervalId = null;

    if(element.hasAttribute("data-date")) {
      this.setDate(element.getAttribute('data-date'));
    } else {
      this.setDate(new Date());
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



    window.__test = this;

  }

  MyCountdown.prototype.setDate = function (date) {

    if(!date) {
      throw new Error('date is empty');
    }

    if(!(date instanceof Date)) {
      date = new Date(date);
    }

    if(date.getTime() < Date.now()) {
      throw new Error('date is incorrect');
    }

    if(this._intervalId !== null ) {
      clearInterval(this._intervalId);
    }

    this._intervalId = setInterval(this.render.bind(this), 1000);

    this._date = date;


  };

  MyCountdown.prototype.render = function () {
    if(this._date.getTime() <= Date.now()) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }






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
