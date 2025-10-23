const LegalLinks = () => {
  return (
    <div className="text-center px-4">
      <p className="text-muted-foreground text-xs">
        Al continuar, aceptas nuestros{' '}
        <a
          href="/terms"
          className="text-primary hover:text-secondary transition-colors duration-150 ease-in underline"
        >
          Términos de Servicio
        </a>{' '}
        y{' '}
        <a
          href="/privacy"
          className="text-primary hover:text-secondary transition-colors duration-150 ease-in underline"
        >
          Política de Privacidad
        </a>
      </p>
    </div>
  );
};

export default LegalLinks;