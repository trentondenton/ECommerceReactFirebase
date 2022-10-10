import SignIn from '../components/auth/signIn';
import SignUp from '../components/auth/signUp';

const Auth = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
