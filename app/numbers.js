exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    let binary = num.toString(2);
    return parseInt(binary[binary.length - bit], 10);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    function pad(s) {
      while (s.length < 8) s = '0' + s;
      return s;
    }

    return pad(num.toString(2));
  },

  multiply: function(a, b) {
    return parseFloat((a * b).toFixed(b.toString().length));
  }
};
