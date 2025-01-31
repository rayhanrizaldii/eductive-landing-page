import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <span className="text-3xl font-semibold">Eductive</span>
        <div className="mx-auto flex justify-center items-center gap-5">
          <NavLink to={"/"}>
            <Button variant={'link'}>Home</Button>
          </NavLink>
          <NavLink to={"/about"}>
            <Button variant={'link'}>Our Class</Button>
          </NavLink>
          <NavLink to={"/about"}>
            <Button variant={'link'}>Our Mentor</Button>
          </NavLink>
          <NavLink to={"/about"}>
            <Button variant={'link'}>Pricing</Button>
          </NavLink>
          <NavLink to={"/about"}>
            <Button variant={'link'}>About Us</Button>
          </NavLink>
        </div>
        <Button className="justify-self-end">Start Learn</Button>
      </header>
    </div>
  );
}
