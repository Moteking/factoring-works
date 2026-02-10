interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export default function CTAButton({ 
  href, 
  children, 
  variant = "primary",
  external = false 
}: CTAButtonProps) {
  const baseClass = "inline-block font-bold py-3 px-8 rounded-lg shadow-lg transition text-center";
  const variantClass = variant === "primary" 
    ? "bg-accent hover:bg-orange-600 text-white"
    : "bg-primary hover:bg-blue-800 text-white";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className={`${baseClass} ${variantClass}`}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={`${baseClass} ${variantClass}`}>
      {children}
    </a>
  );
}
