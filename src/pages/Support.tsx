import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Search,
  HelpCircle,
  FileText,
  Zap
} from 'lucide-react';

const supportTopics = [
  { id: 1, title: 'Account Issues', description: 'Login, password, profile problems', icon: <HelpCircle className="w-5 h-5" /> },
  { id: 2, title: 'Technical Support', description: 'Website bugs, performance issues', icon: <Zap className="w-5 h-5" /> },
  { id: 3, title: 'Academic Questions', description: 'Grades, assignments, courses', icon: <FileText className="w-5 h-5" /> },
  { id: 4, title: 'Payment Issues', description: 'Billing, refunds, payment methods', icon: <MessageSquare className="w-5 h-5" /> },
];

const faqItems = [
  {
    question: 'How do I reset my password?',
    answer: 'You can reset your password by clicking the "Forgot Password" link on the login page and following the instructions sent to your email.'
  },
  {
    question: 'How do I view my grades?',
    answer: 'Navigate to the Grades section in your dashboard to view all your current grades and academic performance.'
  },
  {
    question: 'How do I submit an assignment?',
    answer: 'Go to the Assignments page, find your assignment, and click the "Submit" button to upload your work.'
  },
  {
    question: 'How do I pay my fees?',
    answer: 'Visit the Payments section to view outstanding fees and make payments using various payment methods.'
  },
  {
    question: 'How do I contact my teacher?',
    answer: 'Use the Messages section to send direct messages to your teachers and receive responses.'
  }
];

const Support = () => {
  const [selectedTopic, setSelectedTopic] = React.useState<number | null>(null);
  const [message, setMessage] = React.useState('');

  const handleSubmitTicket = () => {
    if (message.trim() && selectedTopic) {
      // In a real app, this would submit the support ticket
      console.log('Submitting support ticket:', { topic: selectedTopic, message });
      setMessage('');
      setSelectedTopic(null);
      // Show success message
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Support Center</h1>
          <p className="text-muted-foreground">Get help and find answers to your questions</p>
        </div>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="stats-card hover:shadow-lg transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <MessageSquare className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-muted-foreground mb-3">Chat with our support team</p>
            <Badge className="grade-excellent">Available</Badge>
          </CardContent>
        </Card>

        <Card className="stats-card hover:shadow-lg transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Phone Support</h3>
            <p className="text-sm text-muted-foreground mb-3">Call us directly</p>
            <Badge variant="outline">+1 (555) 123-4567</Badge>
          </CardContent>
        </Card>

        <Card className="stats-card hover:shadow-lg transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <Mail className="w-8 h-8 text-success mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="text-sm text-muted-foreground mb-3">Send us an email</p>
            <Badge variant="outline">support@school.edu</Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Submit a Ticket */}
        <Card>
          <CardHeader>
            <CardTitle>Submit a Support Ticket</CardTitle>
            <CardDescription>Describe your issue and we'll get back to you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Select a topic</label>
              <div className="grid grid-cols-2 gap-2">
                {supportTopics.map((topic) => (
                  <div
                    key={topic.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedTopic === topic.id 
                        ? 'bg-primary/10 border-primary' 
                        : 'hover:bg-muted'
                    }`}
                    onClick={() => setSelectedTopic(topic.id)}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {topic.icon}
                      <span className="font-medium text-sm">{topic.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{topic.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium mb-2 block">
                Describe your issue
              </label>
              <Textarea
                id="message"
                placeholder="Please provide as much detail as possible..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
              />
            </div>

            <Button 
              className="w-full btn-primary"
              onClick={handleSubmitTicket}
              disabled={!selectedTopic || !message.trim()}
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Ticket
            </Button>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Find quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search FAQ..." className="pl-10" />
              </div>
            </div>

            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">{item.question}</h4>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Support Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Support Hours
          </CardTitle>
          <CardDescription>When our support team is available</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Live Chat & Phone Support</h4>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Email Support</h4>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Response Time:</span>
                  <span>Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Available:</span>
                  <span>24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency Support:</span>
                  <span>Available on weekends</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Support;