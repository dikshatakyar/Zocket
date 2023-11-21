import zocket_logo from "../../Assets/zocket_logo.png";
import home from "../../Assets/home.png";
import campaign from "../../Assets/campaign.png";
import product from "../../Assets/product.png";
import customer from "../../Assets/customer.png";

export const ZocketLogo = () => {
  return (
    <a className="m-10 hover:cursor-pointer">
      <img src={zocket_logo} alt="zocket-img" />
    </a>
  );
};

const Navbar = () => {
  return (
    <div className="bg-[#001738] text-white flex flex-col items-center text-center fixed w-1/12 h-full ">
      <ZocketLogo />

      <div className="flex flex-col mt-16">
        <div className="m-3 hover:cursor-pointer flex flex-col items-center">
          <img src={home} width={20} height={20} />
          <div>Home</div>
        </div>
        <div className="m-3 hover:cursor-pointer flex flex-col items-center">
          <img src={campaign} width={20} height={20} />
          <div>Campaign</div>
        </div>
        <div className="m-3 hover:cursor-pointer flex flex-col items-center">
          <img src={product} width={20} height={20} />
          <div>Products</div>
        </div>
        <div className="m-3 hover:cursor-pointer flex flex-col items-center">
          <img src={customer} width={20} height={20} />
          <div>Customers</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
