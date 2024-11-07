import "./Menubar.scss";

type Props = {
  isMenuOpen: boolean;
  onClick: () => void;
};

export const Menubar = ({ isMenuOpen, onClick }: Props) => {
  return (
    <div className={`menuIcon ${isMenuOpen ? "open" : ""}`} onClick={onClick}>
      <div className="bar"></div>
    </div>
  );
};
