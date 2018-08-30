exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let value = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
        if (count < amount) {
          value += str[i];
        }
      } else {
        count = 0;
        value += str[i];
      }
    }
    return value;
  },

  wordWrap: function(str, cols) {
    let formatedString = '',
      wordsArray = str.split(' ');

    for (let i = 0; i < wordsArray.length; i++) {
      if (i === 0) {
        formatedString = wordsArray[0];
        continue;
      } else if (wordsArray[i].length > cols) {
        formatedString = formatedString + '\n' + wordsArray[i];
        continue;
      } else if (formatedString.length + wordsArray[i].length > cols) {
        formatedString = formatedString + '\n' + wordsArray[i];
        continue;
      } else {
        formatedString = formatedString + ' ' + wordsArray[i];
      }
    }

    return formatedString;
  },

  reverseString: function(str) {
    let sentence = '';
    for (let i = str.length - 1; i >= 0; i--) {
      sentence = sentence + str[i];
    }
    return sentence;
  }
};
