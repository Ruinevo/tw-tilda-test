/** промис для имитации запроса к серверу */

const DELAY = 1000;

export const waitForTheAnswer = () => new Promise(resolve => {
  setTimeout(resolve, DELAY);
});
