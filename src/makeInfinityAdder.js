'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  const adder = (number) => {
    if (number !== undefined) {
      count += number;

      return adder;
    }

    const result = count;

    count = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
