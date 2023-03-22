import s from "./Section.module.css";

const Section = ({ title, center = false, children }) => (
  <div>
    <h2 className={center ? s.title + " " + s.titleCenter : s.title}>
      {title}
    </h2>
    {children}
  </div>
);

export { Section };
