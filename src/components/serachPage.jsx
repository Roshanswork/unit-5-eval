import { useEffect, useState } from "react";

export const SearchPage = () => {
  const [data, setdata] = useState([]);
  const getData = () => {
    fetch("https://fast-reef-22226.herokuapp.com/data")
      .then((d) => d.json())
      .then((res) => {
        setdata(res);
        console.log(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  

  return (
    <div>
      <div className="cont">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
            alt=""
          />
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <button className="search" onClick={getData}>
            Search
          </button>
        </div>
      </div>

      <div>
        <button>Sort A-Z</button>
        <button>Sort Z-A</button>
        <button>Sort by Date (Asc)</button>
        <button>Sort by Date (Desc)</button>
        <button>Sort by quality (Asc)</button>
        <button>Sort by quality (Desc)</button>
        <button>Filter Explict</button>
      </div>

      <div>
        {data.map((e) => (
          <div key={e.id} className="page-body">
            <div className="box-data">
            <p style={{color:"gray"}}>{e.url}</p>
            <span style={{color:"blue", fontSize : "19px"}}>{e.title} </span>
            <span> | {e.author} </span>
            <p style={{color:"gray"}}>{e.description}</p>
            <p>
              Explicit: {e.explicit ? "Yes" : "No"} Quality %: {e.quality}
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
