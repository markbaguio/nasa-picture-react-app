import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import Loading from "./Components/Loading";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_API_KEY}`;

      try {
        const response = await fetch(url);
        const apiData = await response.json();

        setData(apiData);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchAPIData();
  }, []);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      {data ? <Main data={data} /> : <Loading />}
      {showModal && (
        <Sidebar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
