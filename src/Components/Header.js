import buy_plan from "../../Assets/buy_plan.png";

const Header = () => {
  return (
    <div className="flex justify-end pr-10 text-center py-4">
      <div className="text-[#00000099] m-2">Free trial ends in 2 days</div>
      <div className="flex px-4 items-center bg-[#F29A2E1A] rounded-lg">
        <img src={buy_plan} />
        <div className="text-[#FF8C00] px-2 ">Buy Plan</div>
      </div>
    </div>
  )
};

export default Header;
