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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      {/* Galactic academic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full floating blur-2xl"></div>
        <div className="absolute top-32 right-1/4 w-80 h-80 bg-gradient-radial from-primary-light/8 to-transparent rounded-full floating blur-2xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-radial from-primary-glow/6 to-transparent rounded-full floating blur-2xl" style={{animationDelay: '4s'}}></div>
        
        {/* Stellar particles */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary/40 rounded-full stellar-drift" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-primary-light/60 rounded-full stellar-drift" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-3/4 left-32 w-1.5 h-1.5 bg-primary-glow/50 rounded-full stellar-drift" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-6 relative z-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center stellar-glow cosmic-pulse">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold cosmic-text">ELCON Academy</h1>
              <p className="text-xs text-muted-foreground">Building Young People in God's Light</p>
            </div>
          </div>
          <Button 
            onClick={() => navigate('/login')}
            className="btn-primary hover-scale relative z-10"
          >
            Portal Login
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-sm font-medium mb-8 golden-glow backdrop-blur-sm border border-primary/20">
              <Star className="w-4 h-4 mr-2" />
              Light Christian Outreach
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 animate-fade-in animation-delay-200">
            Welcome to{' '}
            <span className="cosmic-text cosmic-pulse">
              ELCON Academy
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
            Empowering young minds to grow <strong className="text-primary">Academically</strong>, <strong className="text-primary">Financially</strong>, 
            <strong className="text-primary"> Socially</strong>, and <strong className="text-primary">Spiritually</strong> through our comprehensive 
            Christian education platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animation-delay-600">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-12 py-6 relative group overflow-hidden"
              onClick={() => navigate('/login')}
            >
              <span className="relative z-10">Access Student Portal</span>
              <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
            <Button 
              size="lg" 
              className="btn-stellar text-lg px-12 py-6"
            >
              <Globe className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover-scale animate-fade-in card-gradient group" style={{animationDelay: `${800 + index * 100}ms`}}>
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-bold divine-text mb-3 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-muted-foreground font-medium text-sm uppercase tracking-wider">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Four Pillars of <span className="divine-text">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Our holistic approach ensures comprehensive development of every student
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover-scale card-gradient animate-fade-in relative overflow-hidden"
              style={{animationDelay: `${400 + index * 150}ms`}}
            >
              <CardContent className="p-10 text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-500 golden-glow">
                  <feature.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-5xl mx-auto card-gradient animate-fade-in relative overflow-hidden">
            <CardContent className="p-16 text-center relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-10 golden-glow floating">
                <Heart className="w-12 h-12 text-primary-foreground" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Our <span className="divine-text">Mission</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                At ELCON Academy, we are committed to building young people in God's light, 
                providing a nurturing environment where students can flourish academically, 
                develop financial wisdom, build meaningful relationships, and grow in their 
                spiritual journey with Christ.
              </p>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 animate-fade-in">
            Ready to Begin Your <span className="divine-text">Journey</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in animation-delay-200 max-w-2xl mx-auto">
            Join our community of learners and discover your potential in God's light.
          </p>
          <Button 
            size="lg" 
            className="btn-primary text-xl px-16 py-8 animate-fade-in animation-delay-400 group relative overflow-hidden"
            onClick={() => navigate('/login')}
          >
            <span className="relative z-10">Access Portal Now</span>
            <ArrowRight className="w-6 h-6 ml-3 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/10 via-background to-primary/10 border-t border-primary/20 py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center golden-glow">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-foreground text-lg divine-text">ELCON Academy</div>
                <div className="text-sm text-muted-foreground">Building Young People in God's Light</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 ELCON Academy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;