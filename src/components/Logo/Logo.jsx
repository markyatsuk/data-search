import logo from "../../images/logo_2_alabama_so_big.png";
import s from "./Logo.module.css";
// import IconLogo from "../Icons/Icons";

export default function Logo() {
  return (
    <div className={s.container}>
      {/* <IconLogo /> */}
      <img src={logo} alt="logo" className={s.logo} />
    </div>
  );
}
