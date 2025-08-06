interface TestimonialProps {
  name: string;
  age: number;
  location: string;
  content: string;
  highlight?: string;
}

export const TestimonialCard = ({ name, age, location, content, highlight }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-elevation transition-smooth">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-foreground">{name}, {age} anos</h4>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute -top-2 -left-2 text-4xl text-primary opacity-20">"</div>
        <p className="text-muted-foreground leading-relaxed italic relative z-10">
          {content}
        </p>
      </div>
      
      {highlight && (
        <div className="mt-4 p-3 bg-accent rounded-lg">
          <p className="text-sm font-medium text-accent-foreground">
            ✨ {highlight}
          </p>
        </div>
      )}
    </div>
  );
};