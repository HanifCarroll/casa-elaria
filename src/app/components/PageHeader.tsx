interface PageHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function PageHeader({
  title,
  subtitle,
  className = "",
}: PageHeaderProps) {
  return (
    <section
      className={`pt-52 pb-6 bg-gradient-to-b from-cream to-white ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-olive-dark mb-12">
          {title}
        </h1>
        <p className="text-xl text-olive-primary/80 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
