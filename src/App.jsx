import styles from './App.module.scss';
import ResetPassword from './components/resetPassword/ResetPassword';
import SignIn from './components/singIn/SignIn';

function App() {

  return (
    <div className={styles.App}>
      {/* <SignIn /> */}
      <ResetPassword />
    </div>
  )
}

export default App;
