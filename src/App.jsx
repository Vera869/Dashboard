import styles from './App.module.scss';
import SideBar from './components/sideBar/SideBar';
// import ResetPassword from './components/resetPassword/ResetPassword';
// import SignIn from './components/singIn/SignIn';

function App() {

  return (
    <div className={styles.App}>
      {/* <SignIn /> */}
      {/* <ResetPassword /> */}
      <SideBar />
    </div>
  )
}

export default App;
