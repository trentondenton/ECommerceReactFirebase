import SignIn from '../components/signIn';
import SignUp from '../components/signUp';

const Auth = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
