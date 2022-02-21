

import "../App.css";

export const MainPage = () => {
 

  return (
    <div>
      <div className="google-img">
        <img
          src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
          alt=""
        />
      </div>
      <input
        className="search-box"
        type="text"
        placeholder="Search here.."
        
      />
     <button className="search-btn" >
        Search
      </button>
    </div>
  );
};
