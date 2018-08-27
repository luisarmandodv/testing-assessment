exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum: function(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }

    return total;
  },

  remove: function(arr, item) {
    var total = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        total.push(arr[i]);
      }
    }

    return total;
  },

  removeWithoutCopy: function(arr, item) {
    var total = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        total.push(arr[i]);
      }
    }

    for (let i = 0; i < total.length; i++) {
      arr[i] = total[i];
    }

    arr.length = total.length;

    return arr;
  },

  append: function(arr, item) {
    arr.splice(arr.length, 0, item);

    return arr;
  },

  truncate: function(arr) {
    let total = [];
    for (let i = 0; i < arr.length - 1; i++) {
      total.push(arr[i]);
    }

    return total;
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item);

    return arr;
  },

  curtail: function(arr) {
    let total = [];
    for (let i = 1; i < arr.length; i++) {
      total.push(arr[i]);
    }

    return total;
  },

  concat: function(arr1, arr2) {
    let total = [];
    for (let i = 0; i < arr1.length; i++) {
      total.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
      total.push(arr2[i]);
    }

    return total;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);

    return arr;
  },

  count: function(arr, item) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }

    return count;
  },

  duplicates: function(arr) {
    var seen = {};
    var dupes = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    }

    for (var item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        dupes.push(+item);
      }
    }

    return dupes;
    /*
    let duplicates = [];
    let firstTime = true;
    let alreadyDuplicated = false;
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      for (let j = i + 1; j < arr.length; j++) {
        console.log(arr[j]);

        if (arr[i] == arr[j]) {
          if (firstTime) {
            duplicates.push(arr[i]);
            firstTime = false;
          } else {
            for (let k = 0; k < duplicates.length; k++) {
              console.log(k);

              if (arr[i] === duplicates[k]) {
                alreadyDuplicated = true;
              }
            }
            if (alreadyDuplicated) {
              duplicates.push(arr[i]);
            }
          }
        }
      }
      alreadyDuplicated = false;
    }

    return duplicates;*/
  },

  square: function(arr) {
    let total = [];
    for (let i = 0; i < arr.length; i++) {
      total.push(arr[i] * arr[i]);
    }

    return total;
  },

  findAllOccurrences: function(arr, target) {
    let total = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        total.push(i);
      }
    }

    return total;
  }
};
