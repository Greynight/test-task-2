function once(func) {
  let result = null;

  return function(...args) {
    if (!result) {
      result = func(...args);
    }

    return result;
  }
}