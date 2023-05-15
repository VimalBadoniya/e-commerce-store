import React, { useState, useCallback, useEffect } from "react";
import "./Home.css";
// import Button from "../UI/Button";
import NewMovie from "./NewMovie";
import Tours from "./Tours";
import GetMovies from "./GetMovies";

// const tours = [
//   { date: "5th May", city: "New Delhi", venue: "Canaught Place", id: "T01" },
//   { date: "7th May", city: "Indore", venue: "Holker Stadium", id: "T02" },
//   { date: "10th May", city: "Jodhpur", venue: "Ummaid Bhavan", id: "T03" },
//   { date: "15th May", city: "Surat", venue: "Sindhi House", id: "T04" },
// ];

const Home = () => {
  const [response, setResponse] = useState(null);
  //const [apiButton, setApiButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isForm, setIsForm] = useState(false);

  const showFormHandler = () => {
    setIsForm(true);
  };
  const hideFormHandler = () => {
    setIsForm(false);
  };

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true); //data is being received , please wait
      const responseData = await fetch("https://crudcrud.com/api/37695353e0ed4a41a42fe4e71ce2a42d/movies");
      if (!responseData.ok) {
        throw new Error("Some Error Occured");
      }
      const data = await responseData.json();
      setResponse(data);
      console.log(data)
      setIsLoading(false); //loading complete , data can be displayed
      //setApiButton(true);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
//console.log(response)
  return (
    <React.Fragment>
      {/* <section className="containersection">
        <h2 className="h2">TOURS</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>City</th>
              <th>Venue</th>
              <th>Tickets</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.city}</td>
                  <td>{item.venue}</td>
                  <td>
                    <Button name="Buy Tickets"></Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section> */}
      <Tours/>
      <section className="containersection">
        <button
          className="apiButton"
          onClick={showFormHandler}
          style={{ fontSize: "xxlarger" }}
        >
          Add New Movie
        </button>
        {isForm && <NewMovie hideForm={hideFormHandler}  getdata={fetchData}/>}
      </section>

      <section>
        <div
          className="containersection"
          style={{ marginTop: "50px", marginBottom: "40px" }}
        >
          <button
            className="apiButton"
            onClick={fetchData}
            //disabled={apiButton}
          >
            Get Movies
          </button>
          {/* {response && !isLoading && (
            <div>
              <h1>{response.title}</h1>
              <h2>
                <span>Directed By : {response.director}</span>
                <br></br>
                <span>Produced By : {response.producer}</span>
              </h2>
            </div>
          )} */}
          {response && <GetMovies data={response} getdata={fetchData}/> }
          {isLoading && (
            <p style={{ fontSize: "larger" }}>Getting Data Please Wait...</p>
          )}

          {error && !isLoading && (
            <div>
              <h3>
                {error}.
                <button className="button" onClick={fetchData}>
                  Retry
                </button>
              </h3>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default React.memo(Home);
