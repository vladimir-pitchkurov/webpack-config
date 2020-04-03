function createAnalytics() {
  let counter;
  const listener = () => counter++
  document.addEventListener('click', listener)
  return {
    destroy: function () {
      document.removeEventListener('click', listener)
    },

    getClicks() {
      return counter;
    }
  }
}
