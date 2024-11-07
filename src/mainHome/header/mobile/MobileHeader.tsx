import { menuItems } from "../Header";
import { ScrollProps } from "../../../action/scroll";
import whiteLink from "../../../assets/image/white-link.png";
import blackLink from "../../../assets/image/black-link.png";
import "./MobileHeader.scss";
import { Menubar } from "./Menubar/Menubar";

type Props = {
  isScrolled: boolean;
  menuClick: () => void;
  isMenuOpen: boolean;
  itemClassName: string;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileHeader = ({
  scroll,
  isScrolled,
  menuClick,
  isMenuOpen,
  itemClassName,
  setIsMenuOpen,
}: ScrollProps & Props) => {
  return (
    <div className="mobile-header">
      <div className="header_content">
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
        <Menubar isMenuOpen={isMenuOpen} onClick={menuClick} />
      </div>
      <div className={`header_menu ${isMenuOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <div
            key={item}
            className={itemClassName}
            onClick={() => {
              scroll(item);
              setIsMenuOpen(false); // 클릭 시 메뉴 닫기
            }}
          >
            {item === "Aboutme" ? "About me" : item}
          </div>
        ))}
      </div>
    </div>
  );
};
