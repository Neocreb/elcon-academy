import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, BookOpen, Users, Award, ArrowRight, Star, Heart, Globe } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Comprehensive curriculum designed to nurture intellectual growth and academic achievement."
    },
    {
      icon: Award,
      title: "Financial Literacy", 
      description: "Building financial wisdom and entrepreneurial skills for future success."
    },
    {
      icon: Users,
      title: "Social Development",
      description: "Fostering strong relationships, leadership skills, and community engagement."
    },
    {
      icon: Heart,
      title: "Spiritual Growth",
      description: "Grounded in Christian values, nurturing faith and character development."
    }
  ];

  const stats = [
    { number: "500+", label: "Students" },
    { number: "50+", label: "Teachers" },
    { number: "15+", label: "Years of Excellence" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Professional galactic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating nebulae */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-gradient-radial from-primary/8 via-primary-light/4 to-transparent rounded-full floating blur-3xl opacity-70"></div>
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-gradient-radial from-primary-glow/6 via-primary/3 to-transparent rounded-full floating blur-3xl opacity-60" style={{animationDelay: '3s'}}></div>
        <div className="absolute -bottom-32 left-1/4 w-[550px] h-[550px] bg-gradient-radial from-primary-light/5 via-primary/2 to-transparent rounded-full floating blur-3xl opacity-50" style={{animationDelay: '6s'}}></div>
        
        {/* Constellation particles */}
        <div className="absolute top-20 left-1/5 w-3 h-3 bg-primary/30 rounded-full stellar-drift opacity-80" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary-light/40 rounded-full stellar-drift opacity-70" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-2.5 h-2.5 bg-primary-glow/35 rounded-full stellar-drift opacity-75" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 right-1/5 w-1.5 h-1.5 bg-primary/45 rounded-full stellar-drift opacity-85" style={{animationDelay: '7s'}}></div>
        
        {/* Grid overlay for professional look */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Professional Header */}
      <header className="relative z-10">
        <div className="glass-card border-0 border-b border-border/20">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-4 animate-fade-in">
                <div className="w-14 h-14 bg-gradient-to-br from-primary via-primary-light to-primary-glow rounded-2xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 text-primary-foreground drop-shadow-sm" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gradient">ELCON Academy</h1>
                  <p className="text-sm text-muted-foreground font-medium">Building Young People in God's Light</p>
                </div>
              </div>
              <Button 
                onClick={() => navigate('/login')}
                className="btn-professional px-8 py-3 rounded-xl font-semibold"
              >
                Portal Login
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Professional Hero Section */}
      <section className="container mx-auto px-6 py-24 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <span className="inline-flex items-center px-8 py-4 rounded-2xl glass-card text-primary text-base font-semibold mb-12 shadow-lg">
              <Star className="w-5 h-5 mr-3" />
              Light Christian Outreach
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-12 animate-fade-in animation-delay-200">
            Welcome to{' '}
            <span className="text-gradient block md:inline">
              ELCON Academy
            </span>
          </h1>
          
          <p className="text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in animation-delay-400 font-light">
            Empowering young minds to grow <strong className="text-primary font-semibold">Academically</strong>, <strong className="text-primary font-semibold">Financially</strong>, 
            <strong className="text-primary font-semibold"> Socially</strong>, and <strong className="text-primary font-semibold">Spiritually</strong> through our comprehensive 
            Christian education platform.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-center animate-fade-in animation-delay-600 max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="btn-professional text-xl px-16 py-8 rounded-2xl relative group overflow-hidden"
              onClick={() => navigate('/login')}
            >
              <span className="relative z-10 font-semibold">Access Student Portal</span>
              <ArrowRight className="w-6 h-6 ml-3 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glass-card text-xl px-16 py-8 rounded-2xl font-semibold border-2 hover:border-primary/50 hover:bg-primary/5"
            >
              <Globe className="w-6 h-6 mr-3" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Stats Section */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center card-gradient group animate-fade-in border-0 rounded-3xl overflow-hidden" style={{animationDelay: `${800 + index * 100}ms`}}>
              <CardContent className="p-12 relative">
                <div className="text-5xl lg:text-6xl font-bold text-gradient mb-4 group-hover:scale-110 transition-transform duration-500">{stat.number}</div>
                <div className="text-muted-foreground font-semibold text-base uppercase tracking-widest">{stat.label}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Professional Features Section */}
      <section className="container mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 animate-fade-in">
            Four Pillars of <span className="text-gradient">Excellence</span>
          </h2>
          <div className="section-divider w-32 mx-auto mb-8"></div>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-200 font-light leading-relaxed">
            Our holistic approach ensures comprehensive development of every student through 
            integrated academic, spiritual, and life skills education
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group card-gradient animate-fade-in relative overflow-hidden border-0 rounded-3xl"
              style={{animationDelay: `${400 + index * 150}ms`}}
            >
              <CardContent className="p-12 text-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/15 to-primary-light/10 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:from-primary/25 group-hover:to-primary-light/20 transition-all duration-500 shadow-lg">
                  <feature.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">{feature.description}</p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </section>

      {/* Professional Mission Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-primary-light/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Card className="max-w-6xl mx-auto glass-card border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-20 text-center relative">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-dark rounded-3xl flex items-center justify-center mx-auto mb-12 shadow-xl floating">
                <Heart className="w-16 h-16 text-primary-foreground" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-12">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <div className="section-divider w-24 mx-auto mb-12"></div>
              <p className="text-2xl text-muted-foreground leading-relaxed max-w-5xl mx-auto font-light">
                At ELCON Academy, we are committed to building young people in God's light, 
                providing a nurturing environment where students can flourish academically, 
                develop financial wisdom, build meaningful relationships, and grow in their 
                spiritual journey with Christ.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="container mx-auto px-6 py-32 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-bold mb-12 animate-fade-in">
            Ready to Begin Your <span className="text-gradient">Journey</span>?
          </h2>
          <div className="section-divider w-32 mx-auto mb-12"></div>
          <p className="text-2xl text-muted-foreground mb-16 animate-fade-in animation-delay-200 max-w-3xl mx-auto font-light leading-relaxed">
            Join our community of learners and discover your potential in God's light through 
            comprehensive Christian education.
          </p>
          <Button 
            size="lg" 
            className="btn-professional text-2xl px-20 py-10 animate-fade-in animation-delay-400 rounded-2xl font-semibold group"
            onClick={() => navigate('/login')}
          >
            <span className="relative z-10">Access Portal Now</span>
            <ArrowRight className="w-7 h-7 ml-4 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-light/3"></div>
        <div className="glass-card border-0 border-t border-border/30 relative">
          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="flex items-center space-x-6 mb-8 lg:mb-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary-light to-primary-glow rounded-2xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-9 h-9 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-2xl text-gradient">ELCON Academy</div>
                  <div className="text-lg text-muted-foreground font-medium">Building Young People in God's Light</div>
                </div>
              </div>
              <div className="text-base text-muted-foreground font-medium">
                © 2024 ELCON Academy. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;