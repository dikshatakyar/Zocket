import Dropdown from "./Dropdown";

export const Filter = () => {
  const PlatformProps = ["All Platforms", "Facebook", "YouTube", "Google"];

  const StatusProps = ["All Status","Live Now", "Paused", "Exhausted"];

  console.log("platformProps", PlatformProps);

  return (
    <>
      <div className="flex items-center">
        <label className="mr-2">Platform : </label>
        {/* <input
            className="rounded-lg m-4 p-2  border-2 border-grey-300"
            type="text"
            value="All Platform"
          /> */}
        <Dropdown {...PlatformProps} />
      </div>
      <div className="flex items-center">
        <label className="mr-2">Status: : </label>
        {/* <input
          className="rounded-lg m-4 p-2  border-2 border-grey-300"
          type="text"
          value="All Status"
        /> */}
        <Dropdown {...StatusProps} />
      </div>
      <input
        className="rounded-lg m-4 p-2  border-2 border-grey-300"
        type="text"
        value="Last 30 days"
      />
    </>
  );
};
