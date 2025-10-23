import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface SignUpFormProps {
  email: string;
  password: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  error: string | null;
}

const SignUpForm = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  isLoading,
  error,
}: SignUpFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {error && (
        <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground font-medium text-sm">
          Correo electrónico
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="tu@ejemplo.com"
          required
          disabled={isLoading}
          className="bg-background text-foreground border-input focus:border-ring focus:ring-1 focus:ring-ring"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-foreground font-medium text-sm">
          Contraseña
        </Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          placeholder="••••••••"
          required
          disabled={isLoading}
          className="bg-background text-foreground border-input focus:border-ring focus:ring-1 focus:ring-ring"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary text-primary-foreground hover:bg-secondary font-normal text-base transition-colors duration-150 ease-in h-12"
      >
        {isLoading ? 'Cargando...' : 'Continuar'}
      </Button>

      <div className="text-center">
        <button
          type="button"
          className="text-primary text-sm font-medium hover:text-secondary transition-colors duration-150 ease-in"
        >
          ¿Olvidaste tu contraseña?
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
