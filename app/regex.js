exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /(^|[^0-9-])(0*[1-9][0-9]*)([^0-9]|$)/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /([a-zA-Z]).*?\1/.test(str);
  },

  endsWithVowel: function(str) {
    return /[aeiouAEIOU]$/i.test(str);
  },

  captureThreeNumbers: function(str) {
    return /\d{3}/.exec(str) ? /\d{3}/.exec(str)[0] : false;
  },

  matchesPattern: function(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
  },

  isUSD: function(str) {
    return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str);
  }
};
