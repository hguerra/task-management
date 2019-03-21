export default function () {
  return `
    <div class="sidebar-heading">
      <img class="contributed-icon contributed-icon-image bolt-image flex-noshrink" src="./public/azure-devops.jpg">
      Azure <span class="sidebar-heading-color">DevOps</span>
      </div>
      <div id="sidebar-items" class="list-group list-group-flush">
      <a href="#" class="list-group-item list-group-item-action bg-light">
        <img class="contributed-icon contributed-icon-image bolt-image flex-noshrink" src="./public/sidebar-overview.png">
        Overview</a>

      <a class="list-group-item list-group-item-action bg-light" data-toggle="collapse" href="#collapseBoard" role="button"
        aria-expanded="false" aria-controls="collapseBoard">
        <img class="contributed-icon contributed-icon-image bolt-image flex-noshrink" src="./public/sidebar-boards.png">
        Boards
      </a>

      <div class="collapse show" id="collapseBoard">
        <div class="card card-body p-0">
          <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">
            <img class="contributed-icon contributed-icon-image bolt-image flex-noshrink" src="./public/clipboards.png">
            Work Items
          </a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">
            <img class="contributed-icon contributed-icon-image bolt-image flex-noshrink" src="./public/trello.png">
            Boards
          </a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">
            <img class="contributed-icon contributed-icon-image bolt-image flex-noshrink" src="./public/list.png">
            Backlogs
          </a>
          <a href="#" class="list-group-item list-group-item-action bg-grey">
            <img class="contributed-icon contributed-icon-image bolt-image flex-noshrink" src="./public/agile.png">
            Sprints
          </a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">
            <img class="contributed-icon contributed-icon-image bolt-image flex-noshrink" src="./public/filter.png">
            Queries
          </a>
        </div>
      </div>

      <a href="#" class="list-group-item list-group-item-action bg-light">
        <img class="contributed-icon contributed-icon-image bolt-image flex-noshrink" src="./public/sidebar-repos.png">
        Repos</a>

      <a href="#" class="list-group-item list-group-item-action bg-light">
        <img class="contributed-icon contributed-icon-image bolt-image flex-noshrink" src="./public/sidebar-pipeline.png">
        Pipeline</a>

      <a href="#" class="list-group-item list-group-item-action bg-light">
        <img class="contributed-icon contributed-icon-image bolt-image flex-noshrink" src="./public/sidebar-testplan.png">
        Test Plans</a>

      <a href="#" class="list-group-item list-group-item-action bg-light">
        <img class="contributed-icon contributed-icon-image bolt-image flex-noshrink" src="./public/sidebar-artifacts.png">
        Artifacts</a>

      <div class="list-group-item list-group-item-action bg-light fixed-bottom-custom">
        <img class="contributed-icon contributed-icon-image bolt-image flex-noshrink" src="./public/settings.png">
        Project Settings

        <img class="contributed-icon contributed-icon-image-settings bolt-image flex-noshrink" src="./public/double-left-chevron.png">
      </div>
    </div>
  `.trim();
};
