import add_circle from "../../Assets/add_circle.png";
import ListofCampaigns from "./ListofCampaigns";
import CreateAdCampaign from "./CreateAdCampaign";
import { useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="bg-[#DAE6FF] flex flex-col h-full pb-28">
      <div className="flex flex-row justify-between items-center p-5">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Your Campaigns</h1>
          <div className="text-base text-[#00000080]">
            Check the list of campaigns you created
          </div>
        </div>

        <Link to="/new">
          <button className="bg-[#0F6EFF] text-white rounded-xl flex flex-row items-center p-3">
            <img src={add_circle} />
            <div className="pl-2">Create new campaign</div>
          </button>
        </Link>
      </div>

      <ListofCampaigns />
    </div>
  );
};

export default Body;
