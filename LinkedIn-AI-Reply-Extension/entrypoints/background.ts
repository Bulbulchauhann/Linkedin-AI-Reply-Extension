export default defineBackground(() => {
  console.log('Initialized background!', { id: browser.runtime.id });
});
