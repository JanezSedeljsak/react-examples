function Card({ title, description, date_created }) {
  return (
    <div className="col-xl-4 col-lg-6 mb-4">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <img
                src={"https://mdbootstrap.com/img/new/avatars/8.jpg"}
                alt=""
                style={{ width: 45, height: 45 }}
                class="rounded-circle"
              />
              <div class="ms-3">
                <p class="fw-bold mb-1">{title}</p>
                <p class="text-muted mb-0">{description}</p>
              </div>
            </div>
            <span class="badge rounded-pill badge-success">
              {date_created.toLocaleDateString()}
            </span>
          </div>
        </div>
        <div class="card-footer border-0 bg-light p-2 d-flex justify-content-around">
          <a
            class="btn btn-link m-0 text-reset"
            href="#"
            role="button"
            data-ripple-color="primary"
          >
            Edit<i class="fas fa-edit ms-2"></i>
          </a>
          <a
            class="btn btn-link m-0 text-reset"
            href="#"
            role="button"
            data-ripple-color="primary"
          >
            Delete<i class="fas fa-trash ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
