import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Building2, BarChart3, DollarSign, UserCircle2, Home } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Building2, label: "Track Record", path: "/track-record" },
    { icon: BarChart3, label: "Current Opportunities", path: "/opportunities" },
    { icon: DollarSign, label: "Invest Now", path: "/invest" },
    { icon: UserCircle2, label: "Investor Portal", path: "/portal" },
  ];

  const NavLinks = ({ mobile = false, onClick = () => {} }) => (
    <div className={`${mobile ? 'flex flex-col space-y-4' : 'hidden md:flex md:space-x-6'}`}>
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors
              ${mobile ? 'text-lg py-2' : 'text-sm font-medium'}`}
            onClick={onClick}
          >
            <Icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">CoFlips</span>
          </Link>

          {/* Desktop Navigation */}
          <NavLinks />

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4">
                  <span className="text-lg font-semibold">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex-1">
                  <NavLinks mobile onClick={() => setIsOpen(false)} />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default MainNav;