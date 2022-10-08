import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../utils/firebaseUtil';

import SignUp from '../components/signUp';
import Button from '../components/button';

const SignIn = () => {
  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className='sign-in-container'>
      <h1>Sign In</h1>
      <Button onClick={logGooglePopupUser} buttonType='google'>
        Sign in with Google
      </Button>
      <div>
        <SignUp />
      </div>
    </div>
  );
};

export default SignIn;
