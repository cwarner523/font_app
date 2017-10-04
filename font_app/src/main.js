export const darkRedFontColor = function() {
  var elements = document.querySelectorAll('h4');
  console.log(elements)
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = '#9E0000';
  }
  console.log('clickkkkked');
}

export const redFontColor = function() {
  var elements = document.querySelectorAll('h4');
  console.log(elements)
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = 'red';
  }
  console.log('clickkkkked');
}

export const darkOrangeFontColor = function() {
  var elements = document.querySelectorAll('h4');
  console.log(elements)
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = '#F54B1E';
  }
  console.log('clickkkkked');
}

export const orangeFontColor = function() {
  var elements = document.querySelectorAll('h4');
  console.log(elements)
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = '#F5852B';
  }
  console.log('clickkkkked');
}

export const lightOrangeFontColor = function() {
  var elements = document.querySelectorAll('h4');
  console.log(elements)
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = '#FFCB3C';
  }
  console.log('clickkkkked');
}

export const yellowFontColor = function() {
  var elements = document.querySelectorAll('h4');
  console.log(elements)
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = 'yellow';
  }
  console.log('clickkkkked');
}

export const lightGreenFontColor = function() {
  var elements = document.querySelectorAll('h4');
  console.log(elements)
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = '#D3D940';
  }
  console.log('clickkkkked');
}

export const greenFontColor = function() {
  var elements = document.querySelectorAll('h4');
  console.log(elements)
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = '#3AA034';
  }
  console.log('clickkkkked');
}

export const lightBlueFontColor = function() {
  var elements = document.querySelectorAll('h4');
  console.log(elements)
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = '#50A5D4';
  }
  console.log('clickkkkked');
}

export const blueFontColor = function() {
  var elements = document.querySelectorAll('h4');
  console.log(elements)
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = '#4044D4';
  }
  console.log('clickkkkked');
}

export const purpleFontColor = function() {
  var elements = document.querySelectorAll('h4');
  console.log(elements)
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = '#3E1F6B';
  }
  console.log('clickkkkked');
}

export const blackFontColor = function() {
  var elements = document.querySelectorAll('h4');
  console.log(elements)
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = 'black';
  }
  console.log('clickkkkked');
}

export const makeFontBigger = function (num) {
  var elements = document.querySelectorAll('h4');
  var fontSize = "270%";
  var newFont = (parseInt(fontSize) + num + "%");
  console.log(elements)

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = newFont;
    console.log(newFont);
    console.log(num);
    //console.log(biggerFont);
  }
}

export const makeFontNormal = function (num) {
  var elements = document.querySelectorAll('h4');
  var fontSize = "240%";
  var fontSpacing = "0.01em"
  var newFont = (parseInt(fontSize) + num + "%");
  console.log(elements)

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = newFont;
    elements[i].style.letterSpacing = fontSpacing;
    console.log(newFont);
    console.log(num);
    //console.log(biggerFont);
  }
}

export const makeFontSmaller = function (num) {
  var elements = document.querySelectorAll('h4');
  var fontSize = "140%";
  var newFont = (parseInt(fontSize) + num + "%");
  console.log(elements)

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = newFont;
    console.log(newFont);
    console.log(num);
    //console.log(biggerFont);
  }
}

export const makeLetterSpacingSmaller = function () {
  var elements = document.querySelectorAll('h4');
  var fontSpacing = "-0.06em";
  //var newFont = (parseInt(fontSpacing) + "em");
  console.log(elements)

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.letterSpacing = fontSpacing;
    //console.log(newFont);
    //console.log(biggerFont);
  }
}

export const makeLetterSpacingBigger = function () {
  var elements = document.querySelectorAll('h4');
  var fontSpacing = "0.12em";
  //var newFont = (parseInt(fontSpacing) + "em");
  console.log(elements)

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.letterSpacing = fontSpacing;
    //console.log(newFont);
    //console.log(biggerFont);
  }
}
