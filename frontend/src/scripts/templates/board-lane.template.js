export default function (id, userStory) {

  return `
    <div class="card" id="card-grid-${id}">
      <div class="card-header" id="card-header-${id}">
        <h5 class="mb-0">
          <button class="btn btn-link btn-link-header" data-toggle="collapse" data-target="#card-collapse-${id}" aria-expanded="true"
            aria-controls="card-collapse-${id}">
            ${userStory.title}
          </button>
        </h5>
      </div>

      <div id="card-collapse-${id}" class="collapse show" aria-labelledby="card-header-${id}" data-parent="#accordion">

        <br>
        <a href="#" class="list-group-item-action mt-5 ml-2" data-toggle="modal" data-target="#addCardNewItem${id}">
          <img class="contributed-icon contributed-icon-image bolt-image flex-noshrink img-new-work" src="./public/add.png">
          New Item
        </a>

        <div class="card-body p-0">
          <div id="board-${id}-app"></div>
        </div>
      </div>
    </div>
  `.trim();
};
