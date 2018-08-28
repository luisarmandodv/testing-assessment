exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures: function(arr, fn) {
    let array = [];

    let closure = val => {
      return () => {
        return fn(val);
      };
    };

    for (let i = 0; i < arr.length; i++) {
      array.push(closure(arr[i]));
    }

    return array;
  },

  partial: function(fn, str1, str2) {
    let partial = fn.bind(null, str1, str2);

    return partial;
  },

  useArguments: function(...args) {
    count = 0;
    for (let i = 0; i < args.length; i++) {
      count += args[i];
    }
    return count;
  },

  callIt: function(fn, ...args) {
    fn.apply(null, args);
  },

  partialUsingArguments: function(fn, ...args) {
    params = [];
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        params.push(args[i]);
      }
      return (partial = fn.bind(null, ...params));
    }

    return (partial = fn.bind(null));
  },

  curryIt: function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return fn(a, b, c);
        };
      };
    };
  }
};
