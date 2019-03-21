export default function (id, title, taskId, taskName, taskDescription) {

  return `
    <div class="modal fade" id="addCard${id}" tabindex="-1" role="dialog" aria-labelledby="addCard${id}Label" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addCard${id}Label">${title}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="btnCloseCard${id}">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name${id}" class="col-form-label">${taskId}:</label>
                <input type="text" class="form-control" id="recipient-name${id}" value="${taskName}" required>
              </div>
              <div class="form-group">
                <label for="message-text${id}" class="col-form-label">Description:</label>
                <textarea class="form-control" id="message-text${id}">${taskDescription}</textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="btnAddCard${id}">Save & Close</button>
          </div>
        </div>
      </div>
    </div>
  `.trim();
};
