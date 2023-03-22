import logo from "../../images/logo_AlabamaDom.png";
import s from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={s.container}>
      <img src={logo} alt="logo" className={s.logo} />
    </div>
  );
}
