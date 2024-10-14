const Sidebar = (props) => {
  const { handleToggleModal, data } = props;

  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="backgroundOverlay"></div>
      <div className="sideBarContents">
        <h2>{data?.title}</h2>
        <div>
          <p className="description">Description</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
