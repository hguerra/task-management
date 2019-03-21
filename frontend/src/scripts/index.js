import 'bootstrap';
import '../styles/index.scss';

import LayoutController from './controllers/layout.controller';

const layoutController = new LayoutController();
layoutController.build();
layoutController.enableDragAndDrop();

layoutController.load();
