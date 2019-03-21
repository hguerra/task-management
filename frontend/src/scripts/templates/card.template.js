export default function (id, priority, title, epicLink, userName, userImage, cssClass, isUserStory) {
  userImage = userImage || './public/avatar.jpg';
  cssClass = cssClass || priority;

  let userStoryTemplate = '';
  let draggableTemplate = 'draggable="true" ondragstart="__app_global_scope.events.drag(event)"';
  if (isUserStory === true) {
    userStoryTemplate = '-true';
    draggableTemplate = '';
  }

  return `
    <div class="taskCard taskCard--${cssClass}" id="card-${id}" ${draggableTemplate}>
      <header class="taskCard__header">
        <h4 class="taskCard__title d-inline-block">${title}</h4>
        <div class="dropdown d-inline-block float-right">
          <button class="btn btn-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">...</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; transform: translate3d(-100px, 38px, 0px); top: 0px; left: 0px; will-change: transform;">
            <a class="dropdown-item card-edit" href="javascript:void(0);" id="card-edit-${id}${userStoryTemplate}">Edit</a>
            <a class="dropdown-item card-delete" href="javascript:void(0);" id="card-delete-${id}${userStoryTemplate}">Delete</a>
          </div>
        </div>
        <div class="taskCard__epicLink-wrapper"><span class="taskCard__epicLink-title">${epicLink}</span></div>
      </header>
      <footer class="taskCard__footer"><span class="taskCard__type">${priority}</span>
        <div><span class="taskCard__id">${userName}</span><img class="taskCard__avatar" src="${userImage}"></div>
      </footer>
    </div>
  `.trim();
};
