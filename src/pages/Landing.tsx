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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ELCON Academy</h1>
              <p className="text-xs text-muted-foreground">Building Young People in God's Light</p>
            </div>
          </div>
          <Button 
            onClick={() => navigate('/login')}
            className="btn-primary hover-scale"
          >
            Portal Login
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Light Christian Outreach Platform
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in animation-delay-200">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              ELCON Academy
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
            Empowering young minds to grow <strong>Academically</strong>, <strong>Financially</strong>, 
            <strong> Socially</strong>, and <strong>Spiritually</strong> through our comprehensive 
            Christian education platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
            <Button 
              size="lg" 
              className="btn-primary hover-scale text-lg px-8 py-6"
              onClick={() => navigate('/login')}
            >
              Access Student Portal
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 hover-scale"
            >
              <Globe className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover-scale animate-fade-in" style={{animationDelay: `${800 + index * 100}ms`}}>
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Four Pillars of Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Our holistic approach ensures comprehensive development of every student
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover-scale card-gradient border-border/50 animate-fade-in"
              style={{animationDelay: `${400 + index * 150}ms`}}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto card-gradient border-border/50 animate-fade-in">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Heart className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                At ELCON Academy, we are committed to building young people in God's light, 
                providing a nurturing environment where students can flourish academically, 
                develop financial wisdom, build meaningful relationships, and grow in their 
                spiritual journey with Christ.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in animation-delay-200">
            Join our community of learners and discover your potential in God's light.
          </p>
          <Button 
            size="lg" 
            className="btn-primary hover-scale text-lg px-12 py-6 animate-fade-in animation-delay-400"
            onClick={() => navigate('/login')}
          >
            Access Portal Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-foreground">ELCON Academy</div>
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