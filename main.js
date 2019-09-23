(function () {

  var coundowns = [];

  // This is simple progress bar
  function MyProgressBar(element) {
    if (!(element instanceof HTMLElement)) {
      throw new Error('element should be HTMLElement');
    }
    this._element = element;
    this._days =document.createElement('div');
    this._days.classList.add('days');
    this._element.append(this._days);
    this._hours =document.createElement('div');
    this._hours.classList.add('hours');
    this._element.append(this._hours);
    this._minutes =document.createElement('div');
    this._minutes.classList.add('minutes');
    this._element.append(this._minutes);
    this._seconds =document.createElement('div');
    this._days.classList.add('seconds');
    this._element.append(this._seconds);

  }


  if(!window.MyProgressBar) {
    window.MyProgressBar = MyProgressBar;
  }


  if(!window.ProgressBarInstances) {
    window.ProgressBarInstances = coundowns;
  }

  document.addEventListener( 'DOMContentLoaded', function () {
    document.querySelectorAll('.countdown').forEach((countdown)=> {
      coundowns.push(new MyProgressBar(countdown));
    });
  });



})();
