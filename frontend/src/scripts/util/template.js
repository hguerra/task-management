export function createElement(str) {
  var frag = document.createDocumentFragment();

  var elem = document.createElement('div');
  elem.innerHTML = str;

  while (elem.childNodes[0]) {
    frag.appendChild(elem.childNodes[0]);
  }
  return frag;
};

export function append(id, str) {
  const element = document.getElementById(id);
  appendElement(element, str);
};

export function appendElement(element, str) {
  const newElement = createElement(str);

  if (element) {
    element.appendChild(newElement);
  }
};

export function remove(id) {
  const element = document.getElementById(id);
  if (element) {
    element.remove();
  }
};

export function onclick(id, callback) {
  addEventListener(id, 'click', callback);
}

export function click(id) {
  const element = document.getElementById(id);
  if (element.onclick) {
    element.onclick();
  } else if (element.click) {
    element.click();
  }
}

function addEventListener(id, event, callback) {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener(event, callback);
  }
}
