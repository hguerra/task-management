import * as templateEngine from '../util/template';

import Board from '../model/board.model';
import BoardController from './board.controller';

import modalTemplate from '../templates/modal.template';

import StorageApiService from '../services/storage.api.service';

export default class BoardLaneController {

  constructor() {
    this._boards = [];
    this.userStoryModalId = 'UserStoryModal';
    this.userStoryModal = modalTemplate(this.userStoryModalId, 'USER STORY', 'Title', '', '');
    this.storageApiService = new StorageApiService();
  }

  get boards() {
    return this._boards;
  }

  build() {
    templateEngine.append('app-modal', this.userStoryModal);

    const userStoryCallback = () => {
      const title = document.getElementById(`recipient-name${this.userStoryModalId}`).value;
      if (title.trim() !== '') {
        const board = this.boardTemplate(title);
        this.boardFactory(board);

        templateEngine.click(`btnCloseCard${this.userStoryModalId}`);

        document.getElementById(`recipient-name${this.userStoryModalId}`).value = '';
      }
    };

    templateEngine.onclick(`btnAddCard${this.userStoryModalId}`, userStoryCallback);
  }

  loadBoards(boardsList, forceReplace) {
    if (!((boardsList && boardsList.length) || forceReplace)) {
      boardsList = JSON.parse(JSON.stringify(this.storageApiService.read()));
    }

    this.storageApiService.clear();
    boardsList.forEach(boardData => {
      const board = new Board(boardData.id, boardData.userStory, boardData.boardColumns);
      board.append();

      this.boardFactory(board);
    });
  }

  boardFactory(board) {
    const boardController = new BoardController(board);
    boardController.observe();
    this.storageApiService.create(board);
    this._boards.push({board: board, controller: boardController});
  }

  boardTemplate(title) {
    const userStory = {
      id: (Date.now() + 1).toString(),
      priority: 'LOW',
      title: title,
      description: document.getElementById(`message-text${this.userStoryModalId}`).value,
      epicLink: title,
      userName: 'Heitor Carneiro',
      cssClass: 'MEDIUM-custom'
    };

    const boardColumns = [{
        id: (Date.now() + 2).toString(),
        title: 'To Do',
        cssClass: 'TODO',
        cards: []
      },
      {
        id: (Date.now() + 3).toString(),
        title: 'In Progress',
        cssClass: 'INPROGRESS',
        cards: []
      }, {
        id: (Date.now() + 4).toString(),
        title: 'Done',
        cssClass: 'DONE',
        cards: []
      }
    ];

    const board = new Board((Date.now() + 5).toString(), userStory, boardColumns);
    board.append();

    document.getElementById(`message-text${this.userStoryModalId}`).value = '';

    return board;
  }
}
