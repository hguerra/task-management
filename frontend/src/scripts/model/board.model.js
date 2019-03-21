import * as templateEngine from '../util/template';
import boardTemplate from '../templates/board.template';
import boardLaneTemplate from '../templates/board-lane.template';
import modalTemplate from '../templates/modal.template';
import cardTemplate from '../templates/card.template';

import StorageApiService from '../services/storage.api.service';

export default class Board {

  constructor(id, userStory, boardColumns) {
    this.id = id;
    this.userStory = userStory;
    this.boardColumns = boardColumns;
    this.storageApiService = new StorageApiService();
  }

  get columns() {
    return this.boardColumns;
  }

  get template() {
    return boardTemplate(this.id, this.userStory, this.boardColumns);
  }

  get element() {
    return document.getElementById(this.boardElementId);
  }

  get boardElementId() {
    return `board-${this.id}-app`;
  }

  addCard(card) {
    const col = this.boardColumns[0];
    col.cards.push(card);

    templateEngine.append(`card-list-${col.id}`, cardTemplate(card.id, card.priority, card.title, card.epicLink, card.userName));

    const htmlCardId = `card-${card.id}`;
    this.removeCardEvent(htmlCardId);
    this.editCardEvent(htmlCardId);
  }

  removeCard(cardToRemoveId, isUserStory) {
    if (isUserStory) {
      if (this.userStory && this.userStory.id && this.userStory.id.toString() === cardToRemoveId) {
        this.removeBoard();
      }
    } else {
      this.boardColumns.forEach(columns => {
        const index = columns.cards.findIndex(card => card.id === cardToRemoveId);
        if (index > -1) {
          columns.cards.splice(index, 1);
        }
      });

      templateEngine.remove(`card-${cardToRemoveId}`);
    }
  }

  removeBoard() {
    this.boardColumns.forEach(columns => {
      columns.cards.forEach(card => {
        templateEngine.remove(`card-${card.id}`);
      });
    });

    this.userStory = [];
    this.boardColumns = [];
    templateEngine.remove(`card-grid-${this.id}`);
  }

  append() {
    const boardLane = boardLaneTemplate(this.id, this.userStory);
    templateEngine.append('accordion', boardLane);

    const newItemModalId = `NewItem${this.id}`;
    const newItemModal = modalTemplate(newItemModalId, 'Task', 'Title', '', '');
    templateEngine.append('app-modal', newItemModal);

    templateEngine.append(this.boardElementId, this.template);
    this.addCardEvent(newItemModalId);
    this.applyEditCardsEvent(newItemModalId);
    this.applyRemoveCardsEvent();
  }

  addCardEvent(newItemModalId) {
    const callback = () => {
      const card = {
        id: Date.now().toString(),
        priority: 'LOW',
        title: document.getElementById(`recipient-name${newItemModalId}`).value,
        description: document.getElementById(`message-text${newItemModalId}`).value,
        epicLink: this.userStory.title,
        userName: 'Heitor Carneiro'
      };

      if (card.title.trim() !== '') {
        this.addCard(card);
        this._update();
        templateEngine.click(`btnCloseCard${newItemModalId}`);
      }
    };

    templateEngine.onclick(`btnAddCard${newItemModalId}`, callback);
  }

  removeCardEvent(id) {
    const callback = (event) => {
      const [cardId, isUserStory] = this.getCardIdAndIfIsUserStory(event);
      this.removeCard(cardId, isUserStory);
      this._update();
    };

    templateEngine.onclick(id, callback);
  }

  editCardEvent(id) {
    const callback = (event) => {
      const [cardId] = this.getCardIdAndIfIsUserStory(event);
      console.log('edit', cardId);
    };

    templateEngine.onclick(id, callback);
  }

  getCardIdAndIfIsUserStory(event) {
     const elementId = event.target.id;
     const partials = elementId.split('-');
     const cardId = partials[2];

     let isUserStory = false;
     if (partials.length > 2) {
       isUserStory = partials[3] === 'true';
     }

     return [cardId, isUserStory];
  }

  applyRemoveCardsEvent() {
    const links = document.querySelectorAll('.card-delete');

    links.forEach(el => {
      this.removeCardEvent(el.id);
    });
  }

  applyEditCardsEvent(newItemModalId) {
    const links = document.querySelectorAll('.card-edit');

    links.forEach(el => {
      this.editCardEvent(el.id);
    });
  }

  _update() {
    this.storageApiService.update({
      id: this.id,
      userStory: this.userStory,
      boardColumns: this.boardColumns
    });
  }
}
