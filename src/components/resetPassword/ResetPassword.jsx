import { useState } from 'react';
import styles from './ResetPassword.module.scss';

function ResetPassword() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);
  return (
    <form className={styles.form}>
      <header className={styles.form__header}>
        <div className={styles.form__header__logoBlock}>
          <img className={styles.form__header__logoBlock__logo} src="/img/modals/logo.svg" alt="logo" />
          <img className={styles.form__header__logoBlock__logotype} src="/img/modals/logotype.svg" alt="logotype" />
        </div>
        <p className={styles.form__header__title}>Merci d&apos;entrer vos informations de connexion</p>
      </header>
      <main className={styles.form__main}>
        <div className={styles.inputsBlock}>
          <div className={styles.inputBox}>
            <label className={styles.inputBox__lable}>Email</label>
            <input className={styles.inputBox__input} type="email" placeholder="johndoe@gmail.com" />
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputBox__lable}>Numéro de téléphone</label>
            <input className={styles.inputBox__input} type="tel" placeholder="(+237) 696 88 77 55" />
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputBox__lable}>Mot de passe</label>
            <input className={styles.inputBox__input} type="password" placeholder="********************" />
            <img className={styles.inputBox__icon} src="/img/modals/eye.svg" />
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputBox__lable}>Confirmer votre mot de passe</label>
            <input className={styles.inputBox__input} type="password" placeholder="********************" />
            <img className={styles.inputBox__icon_bottom} src="/img/modals/eye.svg" />
          </div>
        </div>
        <div className={styles.buttonBlock}>
          <div className={styles.buttonBlock__title}>
            <input
              className={styles.buttonBlock__title__checkbox}
              type="checkbox"
              id="checkbox"
              checked={checked}
              onChange={handleChange}
            />
            <p className={styles.message}>
              J&apos;accepte{' '}
              <span className={styles.message_span}>
                les termes et les conditions d&apos;utilisation.
              </span>
            </p>
          </div>
          <div className={styles.buttonBlock__content}>
            <button className={styles.btn}>S’inscrire</button>
            <p className={styles.message}>
              Vous n’avez pas de compte ? <span className={styles.message_span}>Créer un compte</span>
            </p>
          </div>
        </div>
      </main>
    </form>
    // <form>
    //    <header className={styles.form__header}>
    //       <div className={styles.form__header__logoBlock}>
    //          <img className={styles.form__header__logoBlock__logo} src='/img/modals/logo.svg' alt='logo'/>
    //          <img className={styles.form__header__logoBlock__logotype} src='/img/modals/logotype.svg' alt='logotype'/>
    //       </div>
    //       <p className={styles.form__header__title}>Merci d&apos;entrer vos informations de connexion</p>
    //    </header>
    //    <main className={styles.form__main}>
    //       <div className={styles.inputsBlock}>
    //          <div className={styles.inputBox}>
    //             <label className={styles.inputBox__lable} >Email</label>
    //             <input className={styles.inputBox__input} type="email" placeholder='johndoe@gmail.com' />
    //          </div>
    //          <div className={styles.inputBox}>
    //             <label className={styles.inputBox__lable}>Mot de passe</label>
    //             <input className={styles.inputBox__input} type="password" placeholder='********************'/>
    //             <img className={styles.inputBox__icon} src='/img/modals/eye.svg'/>
    //          </div>
    //       </div>
    //    </main>
    // </form>
  );
}

export default ResetPassword;
