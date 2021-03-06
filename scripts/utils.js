function hidePanel(selector) {
  let panel = document.querySelector(selector);
  panel.className = '';

  let classes = selector.split('.');
  for (const c of classes) panel.className += c + ' ';

  panel.className += 'hide-panel';
  panel.className = panel.className.trim();
}

function showPanel(selector) {
  let panel = document.querySelector(selector);
  panel.className = '';

  let classes = selector.split('.');
  for (const c of classes) panel.className += c + ' ';

  panel.className = panel.className.trim();
}

function disable(element) {
  element.style.pointerEvents = 'none';
}

function enable(element) {
  element.style.pointerEvents = 'auto';
}

function range(start, end) {
  const size = end - start;
  return [...Array(size).keys()].map((i) => i + start);
}

function random(lowerBound, upperBound) {
  return Math.floor(Math.random() * (upperBound - lowerBound + 1) + lowerBound);
}

function vwToPx(vw, totalWidth) {
  return (vw * totalWidth) / 100;
}

function vhToPx(vh, totalHeight) {
  return (vh * totalHeight) / 100;
}
