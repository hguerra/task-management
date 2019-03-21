import cardTemplate from './card.template';
import cardListTemplate from './card-list.template';

export default function (id, userStory, boardColumns) {

  const userStoryStr = cardTemplate(userStory.id, userStory.priority, userStory.title, userStory.epicLink, userStory.userName, null, 'MEDIUM-custom', true);

  let columns = '';
  boardColumns.forEach(list => {
    columns += cardListTemplate(list.id, list.title, list.cards, list.cssClass);
  });

  return `
    <div class="board" id="board-${id}">
      ${userStoryStr}
      ${columns}
    </div>
  `.trim();
};
