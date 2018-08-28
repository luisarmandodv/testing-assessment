exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function(start, end) {
    var timeout;
    let time;
    function doIt() {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(doIt, 100);
      }
    }

    async function showNumbers() {
      if (start <= end) {
        console.log(start);
        await time = setTimeout(showNumbers, 100);
      }
    }

    showNumbers();

    return {
      cancel: function() {
        time && clearTimeout(time);
      }
    };
  }
};
