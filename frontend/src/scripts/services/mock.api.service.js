const userStory = {
  id: (Date.now() + 1).toString(),
  priority: 'MEDIUM',
  title: 'UserStory Title',
  epicLink: 'Imagem Teste',
  userName: 'Heitor Carneiro',
  cssClass: 'MEDIUM-custom'
};

const boardColumns = [{
    id: (Date.now() + 2).toString(),
    title: 'To Do',
    cssClass: 'TODO',
    cards: [{
      id: (Date.now() + 3).toString(),
      priority: 'LOW',
      title: 'Task 1',
      epicLink: 'Imagem Teste',
      userName: 'Heitor Carneiro'
    }]
  },
  {
    id: (Date.now() + 4).toString(),
    title: 'In Progress',
    cssClass: 'INPROGRESS',
    cards: [{
      id: (Date.now() + 5).toString(),
      priority: 'MEDIUM',
      title: 'Task 2',
      epicLink: 'Imagem Teste',
      userName: 'Heitor Carneiro'
    }]
  },
  {
    id: (Date.now() + 6).toString(),
    title: 'Done',
    cssClass: 'DONE',
    cards: [{
      id: (Date.now() + 7).toString(),
      priority: 'HIGHEST',
      title: 'Task 2',
      epicLink: 'Imagem Teste',
      userName: 'Heitor Carneiro'
    }]
  }
];

export default [{
  id: (Date.now() + 8).toString(),
  userStory: userStory,
  boardColumns: boardColumns
}];
