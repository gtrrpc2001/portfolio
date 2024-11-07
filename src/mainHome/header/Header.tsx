import "./Header.scss";
import whiteLink from "../../assets/image/white-link.png";
import blackLink from "../../assets/image/black-link.png";
import { ScrollProps, useScroll } from "../../action/scroll";
import { useMenuVisible } from "../../action/menu";
import { useState } from "react";
import { MobileHeader } from "./mobile/MobileHeader";

export const menuItems = [
  "Aboutme",
  "Skills",
  "Archiving",
  "Projects",
  "Career",
];

export const Header = ({ scroll }: ScrollProps) => {
  const menuVisible = useMenuVisible();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll({ isMobile: menuVisible });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const itemClassName = `header_menu_item ${isScrolled ? "scroll" : ""}`;

  return (
    <header className={`header ${isScrolled ? "scroll" : ""}`}>
      {menuVisible ? (
        <MobileHeader
          scroll={scroll}
          isScrolled={isScrolled}
          menuClick={toggleMenu}
          isMenuOpen={isMenuOpen}
          itemClassName={itemClassName}
          setIsMenuOpen={setIsMenuOpen}
        />
      ) : (
        <div className={`header_content`}>
          <div
            className={`header_title ${isScrolled ? "scroll" : ""}`}
            onClick={() => scroll("")}
          >
            <img
              className={`header_img ${isScrolled ? "scroll" : ""}`}
              src={!isScrolled ? whiteLink : blackLink}
              alt="header_img"
            />
            Portfolio
          </div>
          <div className={`header_menu`}>
            {menuItems.map((item) => (
              <div
                key={item}
                className={itemClassName}
                onClick={() => {
                  scroll(item);
                  setIsMenuOpen(false);
                }}
              >
                {item === "Aboutme" ? "About me" : item}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
