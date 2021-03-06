export const pipe = (...fs) =>
  [...fs].reduce((f, g) => (...args) => g(f(...args)));
