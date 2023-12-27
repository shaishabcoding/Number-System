const id = name => document.getElementById(name);

const inputs = document.getElementsByTagName('input');

for (const input of inputs) {
  input.addEventListener('input', e => conversion(input))
}

function conversion(element) {
  const currentMode = element.getAttribute('id');
  const modes = {
    d: 10,
    b: 2,
    o: 8,
    h: 16
  }
  for (const mode in modes) {
    if (currentMode != mode) {
      id(mode).value = convert(element.value, modes[currentMode]).toString(modes[mode]).replace('NaN',0)
    }
  }
}

function convert(value, base = 10) {
  const [integer, fraction = ''] = `${value}`.split('.');
  return parseInt(integer, base) +
    (integer[0] !== '-' || -1) * fraction.split('').reduceRight((r, a) => (r + parseInt(a, base)) / base, 0)
}