import StorageApiService from '../services/storage.api.service';

const storageApiService = new StorageApiService();

export function onCardChange(boardObject, mutationsList) {
  const mutationRemoved = mutationsList[0];
  const mutationAdded = mutationsList[1];

  const toListHtmlId = mutationAdded.target.id;

  const cardId = mutationAdded.addedNodes[0].id.split('-')[1];
  const fromListId = mutationRemoved.target.id.split('-')[2];
  const toListId = toListHtmlId.split('-')[2];

  const fromListIndex = boardObject.columns.findIndex(list => list.id === fromListId);
  const toListIndex = boardObject.columns.findIndex(list => list.id === toListId);

  if (fromListIndex > -1 && toListIndex > -1) {
    const oldCardIndex = boardObject.columns[fromListIndex].cards.findIndex(card => card.id === cardId);

    if (oldCardIndex > -1) {
      const card = boardObject.columns[fromListIndex].cards[oldCardIndex];
      boardObject.columns[fromListIndex].cards.splice(oldCardIndex, 1);

      const list = document.getElementById(toListHtmlId);
      const cardsOrdered = list.querySelectorAll('.taskCard');

      if (cardsOrdered && cardsOrdered.length) {
        let newCardIndex = 0;
        cardsOrdered.forEach((node, i) => {
          const id = node.id.split('-')[1];
          if (id === cardId) {
            newCardIndex = i;
          }
        });

        boardObject.columns[toListIndex].cards.splice(newCardIndex, 0, card);
        update(boardObject, card.id, fromListId, toListId, oldCardIndex, newCardIndex);
      }
    }
  }
}

function update(boardObject, cardId, fromListId, toListId, fromCardIndex, toCardIndex) {
  console.log('>> board: ', boardObject, 'move: ', cardId, 'from list', fromListId, 'to list', toListId, 'index', fromCardIndex, 'to', toCardIndex);
  storageApiService.update(boardObject);
}
