import s from "./Form.module.css";
import { useState } from "react";
function Form() {
  const [urlInput, setUrlInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  function handleUrlChange(e) {
    setUrlInput(e.currentTarget.value);
  }
  function handleEmailChange(e) {
    setEmailInput(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
  }

  const isDisabled = () => {
    if (urlInput.trim() === "" && emailInput.trim() === "") return true;
  };

  return (
    <div className={s.formContainer}>
      <form action="" className={s.form} onSubmit={handleSubmit}>
        <fieldset>
          <p>URL address</p>
          <input
            className={s.form__input}
            type="text"
            name="url"
            title="Enter URL adress of account you want to find"
            onChange={handleUrlChange}
            placeholder="ex: https://github.com/markyatsuk"
          />
          <p>Or</p>
          <p>Email address</p>
          <input
            className={s.form__input}
            type="text"
            name="email"
            title="Enter email adress of account you want to find"
            placeholder="ex: markyatsuk@gmail.com"
            onChange={handleEmailChange}
          />
          <br />
          <button
            type="submit"
            className={s.form__button}
            disabled={isDisabled()}
          >
            Find
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export { Form };
