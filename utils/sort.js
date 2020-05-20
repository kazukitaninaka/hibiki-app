exports.dynamicSort = (propFn) => {
  return function (a, b) {
    const result = propFn(a) < propFn(b) ? -1 : propFn(a) > propFn(b) ? 1 : 0;
    return result;
  };
};
