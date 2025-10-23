import { Button } from '@/components/ui/button';

interface SocialLoginButtonProps {
  provider: 'google' | 'facebook';
  onClick: () => void;
  disabled?: boolean;
}

const SocialLoginButton = ({ provider, onClick, disabled }: SocialLoginButtonProps) => {
  const providerConfig = {
    google: {
      text: 'Continue with Google',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.8055 10.2292C19.8055 9.55056 19.7501 8.86667 19.6306 8.19861H10.2V12.0486H15.6014C15.3773 13.2911 14.6571 14.3898 13.6025 15.0875V17.5861H16.8251C18.7173 15.8444 19.8055 13.2722 19.8055 10.2292Z" fill="#4285F4"/>
          <path d="M10.2 20C12.9573 20 15.2729 19.1044 16.8295 17.5861L13.6069 15.0875C12.7046 15.6972 11.5519 16.0433 10.2044 16.0433C7.54068 16.0433 5.28546 14.2828 4.48796 11.9167H1.16797V14.4917C2.75886 17.6583 6.31591 20 10.2 20Z" fill="#34A853"/>
          <path d="M4.48364 11.9167C4.04545 10.6742 4.04545 9.33056 4.48364 8.08806V5.51306H1.16795C-0.389318 8.61667 -0.389318 12.3878 1.16795 15.4914L4.48364 11.9167Z" fill="#FBBC04"/>
          <path d="M10.2 3.95667C11.6254 3.93556 13.0032 4.47222 14.0359 5.45889L16.8906 2.60444C15.1818 0.990556 12.9309 0.0949998 10.2 0.116111C6.31591 0.116111 2.75886 2.45778 1.16797 5.51306L4.48366 8.08806C5.27682 5.71667 7.53636 3.95667 10.2 3.95667Z" fill="#EA4335"/>
        </svg>
      ),
      bgColor: 'bg-background',
      textColor: 'text-foreground',
      borderColor: 'border-input',
      hoverBg: 'hover:bg-gray-50',
    },
    facebook: {
      text: 'Continue with Facebook',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="#1877F2"/>
        </svg>
      ),
      bgColor: 'bg-background',
      textColor: 'text-foreground',
      borderColor: 'border-input',
      hoverBg: 'hover:bg-gray-50',
    },
  };

  const config = providerConfig[provider];

  return (
    <Button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full ${config.bgColor} ${config.textColor} border ${config.borderColor} ${config.hoverBg} font-normal text-base transition-colors duration-150 ease-in h-12 flex items-center justify-center gap-3`}
      variant="outline"
    >
      {config.icon}
      {config.text}
    </Button>
  );
};

export default SocialLoginButton;
