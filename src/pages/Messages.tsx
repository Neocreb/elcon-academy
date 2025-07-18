import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  MessageSquare, 
  Search, 
  Send, 
  Phone, 
  Video, 
  MoreHorizontal,
  Plus,
  Paperclip
} from 'lucide-react';

const dummyConversations = [
  {
    id: 1,
    name: 'Dr. Smith',
    role: 'Mathematics Teacher',
    lastMessage: 'Your assignment submission looks great! Well done.',
    timestamp: '2 hours ago',
    unread: 0,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    online: true
  },
  {
    id: 2,
    name: 'Parent Support',
    role: 'Administration',
    lastMessage: 'We have received your fee payment. Thank you!',
    timestamp: '1 day ago',
    unread: 2,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    online: false
  },
  {
    id: 3,
    name: 'Prof. Johnson',
    role: 'Physics Teacher',
    lastMessage: 'Lab session is rescheduled to tomorrow at 2 PM.',
    timestamp: '2 days ago',
    unread: 0,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    online: true
  },
  {
    id: 4,
    name: 'Student Affairs',
    role: 'Support',
    lastMessage: 'Your scholarship application has been approved.',
    timestamp: '3 days ago',
    unread: 1,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c32d?w=150&h=150&fit=crop&crop=face',
    online: false
  }
];

const dummyMessages = [
  {
    id: 1,
    sender: 'Dr. Smith',
    content: 'Hello! I wanted to discuss your recent mathematics assignment.',
    timestamp: '10:30 AM',
    isOwn: false
  },
  {
    id: 2,
    sender: 'You',
    content: 'Hi Dr. Smith! I was wondering if you could provide some feedback on problem 7.',
    timestamp: '10:32 AM',
    isOwn: true
  },
  {
    id: 3,
    sender: 'Dr. Smith',
    content: 'Of course! Your approach is correct, but you can simplify the solution in the final step. Would you like to schedule a quick meeting to go over it?',
    timestamp: '10:35 AM',
    isOwn: false
  },
  {
    id: 4,
    sender: 'You',
    content: 'That would be great! When would be a good time for you?',
    timestamp: '10:37 AM',
    isOwn: true
  },
  {
    id: 5,
    sender: 'Dr. Smith',
    content: 'How about tomorrow at 2 PM in my office? We can go through the problems together.',
    timestamp: '10:40 AM',
    isOwn: false
  }
];

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = React.useState(dummyConversations[0]);
  const [newMessage, setNewMessage] = React.useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-muted-foreground">Communicate with teachers and support staff</p>
        </div>
        <Button className="btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          New Message
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Conversations</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {dummyConversations.map((conversation) => (
                <div 
                  key={conversation.id}
                  className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors border-b ${
                    selectedConversation.id === conversation.id ? 'bg-muted' : ''
                  }`}
                  onClick={() => setSelectedConversation(conversation)}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={conversation.avatar} alt={conversation.name} />
                        <AvatarFallback>{conversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-background"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium truncate">{conversation.name}</h4>
                        <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{conversation.role}</p>
                      <p className="text-sm truncate mt-1">{conversation.lastMessage}</p>
                    </div>
                    
                    {conversation.unread > 0 && (
                      <Badge className="grade-excellent">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-2 flex flex-col">
          {/* Chat Header */}
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={selectedConversation.avatar} alt={selectedConversation.name} />
                    <AvatarFallback>{selectedConversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {selectedConversation.online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-background"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">{selectedConversation.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedConversation.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Video className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {dummyMessages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isOwn 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.isOwn 
                        ? 'text-primary-foreground/70' 
                        : 'text-muted-foreground'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="btn-primary"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Messages;