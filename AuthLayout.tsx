import { ReactNode } from 'react';
import LegalLinks from './LegalLinks.tsx';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        {children}
      </main>
      <footer className="pb-8">
        <LegalLinks />
      </footer>
    </div>
  );
};

export default AuthLayout;