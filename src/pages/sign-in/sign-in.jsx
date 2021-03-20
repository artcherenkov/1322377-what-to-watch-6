import React from 'react';
import Logo from "../../components/logo/logo";
import Footer from "../../components/footer/footer";
import {useDispatch} from "react-redux";
import {login} from "../../store/api-actions";
import {useHistory} from 'react-router-dom';

function getFormValues(form) {
  const formData = new FormData(form);
  const formValues = {};
  for (let [name, value] of formData) {
    formValues[name.slice(5)] = value;
  }
  return formValues;
}

const SignInPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(evt) {
    evt.preventDefault();
    const formValues = getFormValues(evt.target);

    const user = {
      email: formValues[`email`],
      password: formValues[`password`]
    };

    dispatch(login(user)).then(() => history.push(`/`));
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                required
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                required
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignInPage;
