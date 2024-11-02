import styles from './SignIn.module.scss';

function SignIn() {
   return(
      <form className={styles.form}>
         <header className={styles.form__header}>
            <div className={styles.form__header__logoBlock}>
               <img className={styles.form__header__logoBlock__logo} src='/img/modals/logo.svg' alt='logo'/>
               <img className={styles.form__header__logoBlock__logotype} src='/img/modals/logotype.svg' alt='logotype'/>
            </div>
            <p className={styles.form__header__title}>Merci d&apos;entrer vos informations de connexion</p>
         </header>
         <main className={styles.form__main}>
            <div className={styles.inputsBlock}>
               <div className={styles.inputBox}>
                  <label className={styles.inputBox__lable} >Email</label>
                  <input className={styles.inputBox__input} type="email" placeholder='johndoe@gmail.com' />
               </div>
               <div className={styles.inputBox}>
                  <label className={styles.inputBox__lable}>Mot de passe</label>
                  <input className={styles.inputBox__input} type="password" placeholder='********************'/>
                  <img className={styles.inputBox__icon} src='/img/modals/eye.svg'/>
               </div>
            </div>
            <div className={styles.buttonBlock}>
               <p className={styles.buttonBlock__title}>Mot de passe oublié ?</p>
               <div className={styles.buttonBlock__content}>
                  <div className={styles.btn}>
                     <p className={styles.btn__title}>Se connecter</p>
                     <img className={styles.btn__img} src='/img/modals/arrow.svg' alt='arrow'/>
                  </div>
                  <p className={styles.message}>Vous n’avez pas de compte ? <span className={styles.message_span}>Créer un compte</span></p>
               </div>
            </div>
         </main>
      </form>
   )
}

export default SignIn;
