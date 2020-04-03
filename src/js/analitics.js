export default function createAnalytics() {
  let counter = 0;
  const listener = () => counter++;
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

window.analitics = createAnalytics();
