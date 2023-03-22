import s from "./CardsView.module.css";
import { Section } from "../../components/Section/Section";
import { Form } from "../../components/Form/Form";
import UserCard from "../../components/UserCard/UserCard";
export default function CardsView() {
  return (
    <>
      <div className={s.container}>
        <Section title="LinkiGit">
          <Form />
        </Section>
      </div>
      <div className={s.containerBottom}></div>
      <Section title="History" center={true}>
        <div>
          <ul className={s.cardsList}>
            <UserCard />
          </ul>
        </div>
      </Section>
    </>
  );
}
