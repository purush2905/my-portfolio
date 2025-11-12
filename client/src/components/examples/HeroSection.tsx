import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  const handleNavigate = (section: string) => {
    console.log('Navigate to:', section);
  };

  return <HeroSection onNavigate={handleNavigate} />;
}
