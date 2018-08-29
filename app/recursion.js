exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let getFiles = (previous, data, foundDir) => {
      if (data.files) {
        for (let item in data.files) {
          let file = data.files[item],
            dirMatch = data.dir === dirName || foundDir;

          if (file.files) {
            dirMatch ? getFiles(previous, file, true) : getFiles(previous, file);
          } else {
            if (!dirName || (data.dir === dirName || dirMatch)) {
              previous.push(file);
            }
          }
        }
      }

      return previous;
    };

    return getFiles([], data);
  },

  permute: function(arr) {
    let tmp = [],
      result = [];

    let anagram = list => {
      for (let i = 0; i < arr.length; i++) {
        let elem = arr.splice(i, 1)[0];

        tmp.push(elem);

        if (arr.length > 0) {
          anagram(arr);
        } else {
          result.push(tmp.slice());
        }

        arr.splice(i, 0, elem);
        tmp.pop();
      }

      return result;
    };

    return anagram(arr);
  },

  fibonacci: function(n) {
    let fibonacci = [0, 1];

    if (n <= 2) {
      return 1;
    } else {
      for (let i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
      }
    }

    return fibonacci[n];
  },

  validParentheses: function(n) {
    let combinations = [];
    getCombinations = (openNum, closingNum, curr) => {
      if (openNum === 0 && closingNum === 0) combinations.push(curr);
      if (openNum > 0) {
        getCombinations(openNum - 1, closingNum + 1, curr + '(');
      }
      if (closingNum > 0) {
        getCombinations(openNum, closingNum - 1, curr + ')');
      }
    };
    getCombinations(n, 0, '');
    return combinations;
  }
};
