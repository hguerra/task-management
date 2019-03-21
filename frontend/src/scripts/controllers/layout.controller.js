import * as templateEngine from '../util/template';
import navbarTemplate from '../templates/navbar.template';
import sidebarMenuTemplate from '../templates/sidebar-menu.template';

import dragEvents from '../util/draganddrop';

import BoardLaneController from '../controllers/board.-lane.controller';

export default class LayoutController {

  constructor() {
    this.boardLaneController = new BoardLaneController();
  }

  build() {
    const sideBarMenu = sidebarMenuTemplate();
    templateEngine.append('sidebar-wrapper', sideBarMenu);

    const navbar = navbarTemplate();
    templateEngine.append('navbar', navbar);

    this.boardLaneController.build();
  }

  load() {
    this.boardLaneController.loadBoards();
  }

  enableDragAndDrop() {
    __app_global_scope.events = dragEvents;
  }
}
