const Gentlemen = ({ gentleman, action, actionRemove }) => {
  let classNameGentleman = "gentleman";

  if (gentleman.selected) {
    classNameGentleman += " selected";
  }

  return (
    <>
      <li className={classNameGentleman} onClick={action}>
        <div className="gentleman__avatar-container">
          <img
            className="gentleman__avatar"
            src={`img/${gentleman.picture}`}
            alt={`${gentleman.alternativeText}`}
          />
          <span className="gentleman__initial">F</span>
        </div>
        <div className="gentleman__data-container">
          <h2 className="gentleman__name">{gentleman.name}</h2>
          <ul className="gentleman__data-list">
            <li className="gentleman__data">
              <span className="gentleman__data-label">Profession:</span>
              {gentleman.profession}
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Status:</span>{" "}
              {gentleman.status}
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Twitter:</span>{" "}
              {gentleman.twitter}
            </li>
          </ul>
        </div>
        <i className="icon gentleman__icon fas fa-check"></i>
        <i
          onClick={actionRemove}
          className="icon gentleman__icon gentleman__icon--delete fas fa-times"
        ></i>
      </li>
    </>
  );
};

export default Gentlemen;
