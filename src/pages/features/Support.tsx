import logo1 from "@/assets/images/logo-1.svg";
import logo2 from "@/assets/images/logo-2.svg";
import logo3 from "@/assets/images/logo-3.svg";
import logo4 from "@/assets/images/logo-4.svg";
import logo5 from "@/assets/images/logo-5.svg";

function Support() {
  return (
    <div className="h-[200px] w-full bg-gray-900 flex space-x-16 overflow-hidden items-center group">
      <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
        <img src={logo2} className="max-w-none" />
        <img src={logo1} className="max-w-none" />
        <img src={logo2} className="max-w-none" />
        <img src={logo3} className="max-w-none" />
        <img src={logo2} className="max-w-none" />
        <img src={logo4} className="max-w-none" />
        <img src={logo2} className="max-w-none" />
        <img src={logo5} className="max-w-none" />
      </div>
      <div className="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
        <img src={logo2} className="max-w-none" />
        <img src={logo1} className="max-w-none" />
        <img src={logo2} className="max-w-none" />
        <img src={logo3} className="max-w-none" />
        <img src={logo2} className="max-w-none" />
        <img src={logo4} className="max-w-none" />
        <img src={logo2} className="max-w-none" />
        <img src={logo5} className="max-w-none" />
      </div>
    </div>
  );
}

export default Support;
