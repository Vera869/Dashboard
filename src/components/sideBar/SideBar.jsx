import styles from './SideBar.module.scss';

function SideBar() {
  const navTitleList = ['Dossier', 'Projet', 'Direction Technique', 'Protection'];
  const navUrlsList = [
    '/img/sideBar/dossier.svg',
    '/img/sideBar/projet.svg',
    '/img/sideBar/dt.svg',
    '/img/sideBar/protection.svg',
  ];

  return (
    <div className={styles.wrapper}>
      <header className={styles.wrapper__header}>
        <img className={styles.wrapper__header__logo} src="/img/sideBar/logo.svg" alt="logo" />
        <img className={styles.wrapper__header__logo} src="/img/sideBar/logotype.svg" alt="logotype" />
      </header>
      <main className={styles.wrapper__main}>
        <nav className={styles.nav}>
          {navTitleList.map((title, index) => {
            return (
              <div className={styles.nav__box} key={index}>
                <div className={styles.nav__box__title}>
                  <img className={styles.nav__box__title__icon} src={`${navUrlsList[index]}`} alt="icon" />
                  <p className={styles.nav__box__title__txt}>{title}</p>
                </div>
                <img className={styles.nav__box__arrow} src="/img/sideBar/arrow.svg" alt="arrow" />
              </div>
            );
          })}
        </nav>
        <aside className={styles.aside}>
          <img className={styles.aside__img} src="/img/sideBar/avatar.svg" alt="avatar" />
          <div className={styles.aside__data}>
            <p className={styles.aside__data__txt}>
              Tim Cook<br></br>
              <span className={styles.aside__data__span}>timcook@force.com</span>
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default SideBar;
