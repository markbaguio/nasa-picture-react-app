const Main = (props) => {
  const { data } = props;
  return (
    <div className="imageContainer">
      <img className="backgroundImage" src={data.hdurl} alt="Image of Mars" />;
    </div>
  );
};

export default Main;
