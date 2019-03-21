import { onCardChange } from '../util/cardsevents';

export default class BoardController {

  constructor(board) {
    this.board = board;
    this.targetNode = this.board.element;
    this.observer = null;

    this.config = {
      attributes: true,
      childList: true,
      subtree: true
    };
  }

  observe() {
    const boardObject = this.board;
    const callback = (mutationsList, observer) => {
      switch (mutationsList.length) {
        case 2:
          onCardChange(boardObject, mutationsList);
          break;
        default:
          break;
      }
    };

    this.observer = new MutationObserver(callback);
    this.observer.observe(this.targetNode, this.config);
  }

  disconect() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
