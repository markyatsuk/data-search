import s from "./UserCard.module.css";
import mark from "../../images/mark.png";
import serhii from "../../images/serhii.png";
import mykolai from "../../images/mykolai.png";
// import { useState } from "react";
// import { useEffect } from "react";

export default function UserCard() {
  //   const [cards, setCards] = useState(
  //     email !== ""
  //
  //           {
  //             email: "markyatsuk@gmail.com",
  //             name: "Mark",
  //             nickname: "markyatsuk",
  //             logo,
  //           },
  //           {
  //             email: "markyatsuk@gmail.com",
  //             name: "Mark",
  //             nickname: "markyatsuk",
  //             logo,
  //           },
  //         ]
  //       : [
  //           {
  //             email: "markyatsuk@gmail.com",
  //             name: "Mark",
  //             nickname: "markyatsuk",
  //             logo,
  //           },
  //         ]
  //   );
  //   let cards = [
  //     {
  //       email: "markyatsuk@gmail.com",
  //       name: "Mark",
  //       nickname: "markyatsuk",
  //       logo,
  //     },
  //     {
  //       email: "markyatsuk@gmail.com",
  //       name: "Mark",
  //       nickname: "markyatsuk",
  //       logo,
  //     },
  //   ];
  //   useEffect(() => {
  //     if (url !== "" || email !== "") {
  //       cards.push({
  //         email: "markyatsuk@gmail.com",
  //         name: "Mark",
  //         nickname: "markyatsuk",
  //         logo,
  //       });
  //     }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [url, email]);

  //   useEffect(() => {
  // setCards([
  //   ...cards,
  //   {
  //     email,
  //     name: "Mark",
  //     nickname: "markyatsuk",
  //     logo,
  //   },
  // ]);
  //   }, [cards, email]);

  //   console.log(cards);

  //   return cards.map((el, id) => {
  //     if (
  //       el.email === "markyatsuk@gmail.com" ||
  //       url === "https://github.com/markyatsuk"
  //     ) {
  //       console.log(el);
  return (
    <>
      <li className={s.card} key={1}>
        <div className={s.mainInfo}>
          <img src={mark} alt="user logo" className={s.logo} />
          <h2 className={s.name}>Mark</h2>
        </div>
        <p className={s.username}>markyatsuk</p>
        <p className={s.email}>markyatsuk@gmail.com</p>
      </li>
      <li className={s.card} key={2}>
        <div className={s.mainInfo}>
          <img src={serhii} alt="user logo" className={s.logo} />
          <h2 className={s.name}>Serhii</h2>
        </div>
        <p className={s.username}>enl1ve</p>
        <p className={s.email}>sersbaklanov@gmail.com</p>
      </li>
      <li className={s.card} key={3}>
        <div className={s.mainInfo}>
          <img src={mykolai} alt="user logo" className={s.logo} />
          <h2 className={s.name}>Mykolai</h2>
        </div>
        <p className={s.username}>klerk000</p>
        <p className={s.email}>koliasenyk562@gmail.com</p>
      </li>
    </>
  );
  //     }
  //   });
}

//   setCards([...cards, email ? email : url]);
//   cards.map((el) => {
//     if (
//       el === "https://github.com/markyatsuk" ||
//       el === "markyatsuk@gmail.com"
//     ) {
