import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import SignUpForm from '../components/SignUpForm';
import { useAuthStore } from '../stores/authStore';

const SignUpScreen = () => {
  const navigate = useNavigate();
  const { signUp, isLoading, error } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await signUp(email, password);
    if (success) {
      navigate('/login');
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
          Crea una cuenta
        </h1>

        <p className="text-muted-foreground text-center mb-8 text-base">
          Introduce tu correo electrónico para registrarte en esta aplicación
        </p>

        <SignUpForm
          email={email}
          password={password}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          error={error}
        />

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/login')}
            className="text-primary text-sm font-medium hover:text-secondary transition-colors duration-150 ease-in"
          >
            ¿Ya tienes una cuenta? Iniciar sesión
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUpScreen;
