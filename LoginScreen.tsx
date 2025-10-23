import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import LoginForm from '../components/LoginForm';
import { useAuthStore } from '../stores/authStore';

const LoginScreen = () => {
  const navigate = useNavigate();
  const { signIn, signInWithGoogle, signInWithFacebook, isLoading, error } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await signIn(email, password);
    if (success) {
      // Navigate to main app or dashboard
      console.log('Login successful');
    }
  };

  const handleGoogleSignIn = async () => {
    const success = await signInWithGoogle();
    if (success) {
      console.log('Google sign-in successful');
    }
  };

  const handleFacebookSignIn = async () => {
    const success = await signInWithFacebook();
    if (success) {
      console.log('Facebook sign-in successful');
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto">
        <div className="mb-8 flex justify-center">
          <img
            src="https://c.animaapp.com/mh36bs1mvk1mPg/img/user_1.png"
            alt="undefined"
            width={120}
            height={120}
            className="w-28 h-28 object-contain"
            loading="lazy"
          />
        </div>

        <h1 className="font-heading font-bold text-3xl text-foreground text-center mb-4">
          Iniciar Sesión
        </h1>

        <p className="text-muted-foreground text-center mb-8 text-base">
          Inicie sesión desde cualquiera de sus cuentas
        </p>

        <LoginForm
          email={email}
          password={password}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onSubmit={handleSubmit}
          onGoogleSignIn={handleGoogleSignIn}
          onFacebookSignIn={handleFacebookSignIn}
          isLoading={isLoading}
          error={error}
        />

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/signup')}
            className="text-primary text-sm font-medium hover:text-secondary transition-colors duration-150 ease-in"
          >
            ¿No tienes una cuenta? Crear cuenta
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginScreen;
