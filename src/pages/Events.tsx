import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, MapPin, Users, Search, Filter, Star } from 'lucide-react';

const dummyEvents = [
  {
    id: 1,
    title: 'Annual Science Fair',
    date: '2024-02-15',
    time: '9:00 AM - 3:00 PM',
    location: 'Main Auditorium',
    type: 'academic',
    description: 'Students will showcase their science projects and experiments.',
    organizer: 'Science Department',
    attendees: 150,
    isStarred: true,
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'Parent-Teacher Conference',
    date: '2024-01-25',
    time: '2:00 PM - 6:00 PM',
    location: 'Classrooms',
    type: 'meeting',
    description: 'Individual meetings between parents and teachers to discuss student progress.',
    organizer: 'Administration',
    attendees: 200,
    isStarred: true,
    status: 'upcoming'
  },
  {
    id: 3,
    title: 'Winter Sports Championship',
    date: '2024-01-20',
    time: '10:00 AM - 4:00 PM',
    location: 'Sports Complex',
    type: 'sports',
    description: 'Annual winter sports competition featuring basketball and volleyball.',
    organizer: 'Sports Department',
    attendees: 300,
    isStarred: false,
    status: 'upcoming'
  },
  {
    id: 4,
    title: 'Art Exhibition Opening',
    date: '2024-01-18',
    time: '7:00 PM - 9:00 PM',
    location: 'Art Gallery',
    type: 'cultural',
    description: 'Showcase of student artwork from the fall semester.',
    organizer: 'Art Department',
    attendees: 80,
    isStarred: false,
    status: 'upcoming'
  },
  {
    id: 5,
    title: 'Holiday Concert',
    date: '2023-12-15',
    time: '7:30 PM - 9:00 PM',
    location: 'Main Auditorium',
    type: 'cultural',
    description: 'Winter holiday concert featuring school choir and orchestra.',
    organizer: 'Music Department',
    attendees: 250,
    isStarred: true,
    status: 'past'
  }
];

const getEventTypeColor = (type: string) => {
  switch (type) {
    case 'academic': return 'bg-blue-100 text-blue-800';
    case 'sports': return 'bg-green-100 text-green-800';
    case 'cultural': return 'bg-purple-100 text-purple-800';
    case 'meeting': return 'bg-orange-100 text-orange-800';
    case 'holiday': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'upcoming': return 'bg-green-100 text-green-800';
    case 'ongoing': return 'bg-yellow-100 text-yellow-800';
    case 'past': return 'bg-gray-100 text-gray-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  
  const filteredEvents = dummyEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  const upcomingEvents = filteredEvents.filter(e => e.status === 'upcoming');
  const starredEvents = filteredEvents.filter(e => e.isStarred);

  const eventTypes = [...new Set(dummyEvents.map(e => e.type))];

  const toggleStar = (eventId: number) => {
    // In a real app, this would update the database
    console.log('Toggle star for event:', eventId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">School Events</h1>
          <p className="text-muted-foreground">Stay updated with school activities and important dates</p>
        </div>
        <Button className="btn-primary hover-scale">
          <Calendar className="w-4 h-4 mr-2" />
          View Calendar
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Events</p>
                <p className="text-3xl font-bold text-foreground">{dummyEvents.length}</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Upcoming</p>
                <p className="text-3xl font-bold text-foreground">{upcomingEvents.length}</p>
              </div>
              <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Starred</p>
                <p className="text-3xl font-bold text-foreground">{starredEvents.length}</p>
              </div>
              <div className="h-12 w-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">This Month</p>
                <p className="text-3xl font-bold text-foreground">4</p>
              </div>
              <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search & Filter Events
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant={selectedType === 'all' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setSelectedType('all')}
                className="hover-scale"
              >
                All
              </Button>
              {eventTypes.map(type => (
                <Button 
                  key={type}
                  variant={selectedType === type ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className="hover-scale capitalize"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Starred Events */}
      {starredEvents.length > 0 && (
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-warning" />
              Starred Events
            </CardTitle>
            <CardDescription>Events you've marked as important</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {starredEvents.map(event => (
                <div key={event.id} className="p-4 border rounded-lg bg-primary/5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{event.title}</h3>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => toggleStar(event.id)}
                          className="p-1 h-auto"
                        >
                          <Star className="h-4 w-4 text-warning fill-warning" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex gap-2">
                      <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                      <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {event.attendees}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Events */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            All Events
          </CardTitle>
          <CardDescription>Complete list of school events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredEvents.map(event => (
              <div key={event.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{event.title}</h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => toggleStar(event.id)}
                        className="p-1 h-auto"
                      >
                        <Star className={`h-4 w-4 ${event.isStarred ? 'text-warning fill-warning' : 'text-muted-foreground'}`} />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    <p className="text-xs text-muted-foreground">Organized by: {event.organizer}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                    <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {event.attendees} attendees
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;