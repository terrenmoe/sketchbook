function idGeneratorFactory({ start = 0, stop = Number.MAX_SAFE_INTEGER, step = 1 } = {}) {
  return (function* idFactory() {
    while (start < stop) {
      yield start += step;
    }
  }());
}

exports.idGeneratorFactory = idGeneratorFactory;
// Used like:
//   const passedKeygen = idGeneratorFactory({start:1,stop:4,step:2});
//   passedKeygen.next().value // 1
//   passedKeygen.next().value // 3
//   passedKeygen.next().value // undefined
