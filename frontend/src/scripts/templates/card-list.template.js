import cardTemplate from './card.template';

export default function (id, title, cards, cssClass) {

  let cardsStr = '';
  cards.forEach(card => {
    cardsStr += cardTemplate(card.id, card.priority, card.title, card.epicLink, card.userName);
  });

  return `
    <div class="boardColumn boardColumn--${cssClass}" id="board-column-${id}" ondrop="__app_global_scope.events.drop(event)" ondragover="__app_global_scope.events.allowDrop(event)">
      <header class="boardColumn__header">
        <h1 class="boardColumn__title">${title}</h1>
      </header>
      <div class="boardColumn__taskList" id="card-list-${id}">
        ${cardsStr}
      </div>
    </div>
  `.trim();
};
