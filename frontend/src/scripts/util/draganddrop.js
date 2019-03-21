const events = {
  id: 'text'
};

events.allowDrop = (ev) => ev.preventDefault();

events.drag = (ev) => ev.dataTransfer.setData(events.id, ev.target.id);

events.drop = (ev) => {
  ev.preventDefault();

  const data = ev.dataTransfer.getData(events.id);
  const el = document.getElementById(data);

  if (el) {
    const target = ev.target;
    const targetClassName = target.className;

    if (targetClassName === 'boardColumn__taskList') {
      target.appendChild(el);
    }
  }
};

export default events;
