import React from "react";
import Sidebar from "./Sidebar";
import EventInfo from "./EventInfo"; // Import the new Event Info component

const Dashboard = () => {
  const [activePage, setActivePage] = useState("Overview");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar setActivePage={setActivePage} />
      <div className="content">
        {activePage === "Event Info" ? <EventInfo /> : <h1>{activePage}</h1>}
      </div>
    </div>
  );
};

export default Dashboard;
