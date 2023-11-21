import { CampaignsList } from "../Constants/MockData";
import Toggle from "./Toggle";
import edit_btn from "../../Assets/edit_btn.png";
import delete_btn from "../../Assets/delete_btn.png";
import { useState, useEffect } from "react";

const getStatus = (curr_status) => {
  if (curr_status.includes("Live")) {
    return (
      <div className="bg-[#E1FFE0] rounded-3xl text-[#317C2E] font-medium">
        Live Now
      </div>
    );
  } else if (curr_status.includes("Exhausted")) {
    return (
      <div className="bg-[#FFDEDE] rounded-3xl text-[#FC3F3F] font-medium">
        Exhausted
      </div>
    );
  } else if (curr_status.includes("Pause")) {
    return (
      <div className="bg-[#FFF8E0] rounded-3xl text-[#D1A307] font-medium">
        Paused
      </div>
    );
  }
};

const TableList = () => {
  const [campaignData, setCampaignData] = useState(CampaignsList);

  const handleDelete = (Id) => {
    setCampaignData(campaignData.filter((data) => data.Id !== Id));
  };

  return (
    <table className="table-auto w-full h-full ">
      <thead className="bg-[#F8F8F8] border-2 border-[#EAEAEA]-800 ">
        <tr className="text-[#00000080] h-12 text-center">
          <th>On/Off</th>
          <th>Campaign </th>
          <th>Date Range</th>
          <th>Clicks</th>
          <th>Budget</th>
          <th>Location</th>
          <th>Platform</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {campaignData.length > 0 ? (
          campaignData.map((row) => {
            return (
              <tr className="h-16 border-b-[1.5px]  text-center">
                <td>
                  <Toggle />
                </td>
                <td>{row.CampaignName}</td>
                <td>{row.DateRange}</td>
                <td>{row.Clicks}</td>
                <td>{row.Budget}</td>
                <td>{row.Location}</td>
                <td>{row.Platform}</td>
                <td>{getStatus(row.Status)}</td>
                <td className="flex flex-row justify-evenly items-center mt-5">
                  <img
                    src={edit_btn}
                    width={21}
                    height={21}
                    className="hover:cursor-pointer"
                    
                  />
                  <img
                    src={delete_btn}
                    width={21}
                    height={21}
                    className="hover:cursor-pointer"
                    onClick={() => handleDelete(row.Id)}
                  />
                </td>
              </tr>
            );
          })
        ) : (
          <td className="text-xl flex justify-center items-center">
            No Results Found!
          </td>
        )}
      </tbody>
    </table>
  );
};

export default TableList;
