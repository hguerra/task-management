export default function (src, label) {
  return `
  <a href="#" class="list-group-item list-group-item-action bg-light">
    <img class="contributed-icon contributed-icon-image bolt-image flex-noshrink" src="${src}">
    ${label}
  </a>
  `.trim();
};
