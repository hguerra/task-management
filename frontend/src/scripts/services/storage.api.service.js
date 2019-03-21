const isSupported = typeof (Storage) !== 'undefined';
const collection = 'app-boards';

export default class StorageApiService {

  constructor() {
    this.boards = [];
  }

  create(board) {
    if (!isSupported || !board) {
      return;
    }

    this.boards.push(board);
    this.updateStorage();
  }

  read() {
    this.boards = [];

    if (!isSupported) {
      return this.boards;
    }

    const items = window.localStorage.getItem(collection);
    if (items) {
      this.boards = JSON.parse(items);
    }

    return this.boards;
  }

  filter(id) {
    const index = this.boards.findIndex(board => board.id === id);
    if (index > -1) {
      return this.boards[index];
    }

    return null;
  }

  update(board) {
    if (!isSupported || !board) {
      return;
    }

    this.read();
    const index = this.boards.findIndex(b => b.id === board.id);
    if (index > -1) {
      this.boards[index] = board;
      this.updateStorage();
    }
  }

  delete(board) {
    if (!isSupported || !board) {
      return;
    }

    const index = this.boards.findIndex(b => b.id === board.id);
    if (index > -1) {
      this.boards.splice(index, 1);
      this.updateStorage();
    }
  }

  clear() {
    this.boards.forEach(board => this.delete(board));
  }

  updateStorage() {
    window.localStorage.setItem(collection, JSON.stringify(this.boards));
  }

}
