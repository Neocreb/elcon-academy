import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Megaphone, Plus, Calendar, Users, Pin, Edit, Trash2 } from 'lucide-react';

const dummyAnnouncements = [
  {
    id: 1,
    title: 'Winter Break Holiday Schedule',
    content: 'School will be closed from December 23rd to January 7th. Classes resume on January 8th.',
    priority: 'high',
    audience: 'all',
    author: 'Admin',
    date: '2024-01-10',
    pinned: true,
    tags: ['holiday', 'schedule']
  },
  {
    id: 2,
    title: 'Parent-Teacher Conference',
    content: 'Annual parent-teacher conferences will be held on January 25-26. Please schedule your appointments.',
    priority: 'medium',
    audience: 'parents',
    author: 'Principal',
    date: '2024-01-08',
    pinned: false,
    tags: ['conference', 'parents']
  },
  {
    id: 3,
    title: 'Science Fair Registration Open',
    content: 'Students can now register for the annual science fair. Deadline for submissions is February 15th.',
    priority: 'medium',
    audience: 'students',
    author: 'Science Dept',
    date: '2024-01-05',
    pinned: false,
    tags: ['science', 'competition']
  },
  {
    id: 4,
    title: 'New Security Protocols',
    content: 'Updated visitor registration and ID requirements are now in effect for all campus visits.',
    priority: 'high',
    audience: 'all',
    author: 'Security',
    date: '2024-01-03',
    pinned: true,
    tags: ['security', 'policy']
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-red-100 text-red-800';
    case 'medium': return 'bg-yellow-100 text-yellow-800';
    case 'low': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getAudienceColor = (audience: string) => {
  switch (audience) {
    case 'all': return 'bg-blue-100 text-blue-800';
    case 'students': return 'bg-green-100 text-green-800';
    case 'teachers': return 'bg-purple-100 text-purple-800';
    case 'parents': return 'bg-orange-100 text-orange-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const Announcements = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    content: '',
    priority: 'medium',
    audience: 'all',
    tags: ''
  });

  const pinnedAnnouncements = dummyAnnouncements.filter(a => a.pinned);
  const regularAnnouncements = dummyAnnouncements.filter(a => !a.pinned);

  const handleCreateAnnouncement = () => {
    console.log('Creating announcement:', newAnnouncement);
    setShowCreateForm(false);
    setNewAnnouncement({
      title: '',
      content: '',
      priority: 'medium',
      audience: 'all',
      tags: ''
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Announcements</h1>
          <p className="text-muted-foreground">Manage school-wide communications</p>
        </div>
        <Button 
          className="btn-primary hover-scale"
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Announcement
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Announcements</p>
                <p className="text-3xl font-bold text-foreground">{dummyAnnouncements.length}</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Megaphone className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pinned</p>
                <p className="text-3xl font-bold text-foreground">{pinnedAnnouncements.length}</p>
              </div>
              <div className="h-12 w-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Pin className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">High Priority</p>
                <p className="text-3xl font-bold text-foreground">
                  {dummyAnnouncements.filter(a => a.priority === 'high').length}
                </p>
              </div>
              <div className="h-12 w-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <Megaphone className="h-6 w-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">This Month</p>
                <p className="text-3xl font-bold text-foreground">8</p>
              </div>
              <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Create New Announcement</CardTitle>
            <CardDescription>Share important information with the school community</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                placeholder="Enter announcement title"
                value={newAnnouncement.title}
                onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Content</label>
              <Textarea
                placeholder="Enter announcement content"
                value={newAnnouncement.content}
                onChange={(e) => setNewAnnouncement({...newAnnouncement, content: e.target.value})}
                rows={4}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Priority</label>
                <Select value={newAnnouncement.priority} onValueChange={(value) => setNewAnnouncement({...newAnnouncement, priority: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Audience</label>
                <Select value={newAnnouncement.audience} onValueChange={(value) => setNewAnnouncement({...newAnnouncement, audience: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="students">Students</SelectItem>
                    <SelectItem value="teachers">Teachers</SelectItem>
                    <SelectItem value="parents">Parents</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Tags (comma separated)</label>
              <Input
                placeholder="e.g. urgent, schedule, holiday"
                value={newAnnouncement.tags}
                onChange={(e) => setNewAnnouncement({...newAnnouncement, tags: e.target.value})}
              />
            </div>
            
            <div className="flex gap-2">
              <Button onClick={handleCreateAnnouncement} className="btn-primary hover-scale">
                Create Announcement
              </Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)} className="hover-scale">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Pinned Announcements */}
      {pinnedAnnouncements.length > 0 && (
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pin className="h-5 w-5" />
              Pinned Announcements
            </CardTitle>
            <CardDescription>Important announcements that stay at the top</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pinnedAnnouncements.map((announcement) => (
              <div key={announcement.id} className="p-4 border rounded-lg bg-primary/5">
                <div className="flex items-start justify-between mb-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{announcement.title}</h3>
                      <Pin className="h-4 w-4 text-warning" />
                    </div>
                    <p className="text-muted-foreground">{announcement.content}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="hover-scale">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="hover-scale">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className={getPriorityColor(announcement.priority)}>
                      {announcement.priority}
                    </Badge>
                    <Badge className={getAudienceColor(announcement.audience)}>
                      {announcement.audience}
                    </Badge>
                    {announcement.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-4">
                    <span>By {announcement.author}</span>
                    <span>{announcement.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Regular Announcements */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Megaphone className="h-5 w-5" />
            All Announcements
          </CardTitle>
          <CardDescription>Recent school announcements and updates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {regularAnnouncements.map((announcement) => (
            <div key={announcement.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{announcement.title}</h3>
                  <p className="text-muted-foreground">{announcement.content}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="hover-scale">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="hover-scale">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge className={getPriorityColor(announcement.priority)}>
                    {announcement.priority}
                  </Badge>
                  <Badge className={getAudienceColor(announcement.audience)}>
                    {announcement.audience}
                  </Badge>
                  {announcement.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-4">
                  <span>By {announcement.author}</span>
                  <span>{announcement.date}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Announcements;