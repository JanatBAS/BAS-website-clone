import { EventCategory } from './calendar';

export type RecurrenceFrequency = 'weekly' | 'biweekly' | 'monthly';

export interface RecurrenceRule {
  frequency: RecurrenceFrequency;
  endDate?: string;
}

export interface AdminEvent {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  dateISO: string;
  startTime: string;
  endTime?: string;
  location?: string;
  locationUrl?: string;
  imageUrl?: string;
  signupLink?: string;
  category: EventCategory;
  recurrence?: RecurrenceRule;
  excludedDates?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface AdminBlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  authorId: string;
  date: string;
  timestamp: number;
  excerpt: string;
  htmlContent: string;
  category?: string;
  tags?: string[];
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminEventFormData {
  title: string;
  dateISO: string;
  startTime: string;
  endTime?: string;
  location?: string;
  locationUrl?: string;
  imageUrl?: string;
  signupLink?: string;
  category: EventCategory;
  description: string;
  recurrence?: RecurrenceRule;
}

export interface AdminBlogPostFormData {
  title: string;
  author: string;
  authorId: string;
  date: string;
  excerpt: string;
  htmlContent: string;
  category?: string;
  tags?: string[];
  imageUrl?: string;
}
