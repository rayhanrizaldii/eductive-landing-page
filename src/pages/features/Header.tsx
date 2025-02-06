import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import Logo from "/Logo.svg";

export default function Header() {
  type NavItemProps = {
    to: string;
    children: string;
  };
  const NavItem = (props: NavItemProps) => {
    return (
      <NavLink
        to={props.to}
        className={({ isActive }) =>
          isActive ? "font-extrabold underline underline-offset-8" : ""
        }
      >
        <span className="text-primary underline-offset-8 hover:underline">
          {props.children}
        </span>
      </NavLink>
    );
  };
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full shrink-0 items-center justify-between px-4 md:px-10">
        <img src={Logo} alt="Eductive" className="h-8 lg:h-12" />

        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center gap-4">
          <Button size="sm">Menu</Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden gap-10 lg:flex items-center mx-auto">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">Our Class</NavItem>
          <NavItem to="/about">Our Mentor</NavItem>
          <NavItem to="/about">Pricing</NavItem>
          <NavItem to="/about">About Us</NavItem>
        </div>

        {/* Desktop "Start Learn" button */}
        <Button size={"lg"} className="hidden lg:block justify-self-end">
          Start Learn
        </Button>
      </header>
    </div>
  );
}
