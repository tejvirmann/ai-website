# MadisonAI Solutions - Replit Guide

## Overview

This is a full-stack web application for MadisonAI Solutions, a local AI consulting business in Madison, Wisconsin. The application is built as a modern single-page application (SPA) with a React frontend and Express.js backend, designed to showcase AI automation services for small businesses and handle contact inquiries.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Validation**: Zod schemas for type-safe data validation
- **Development**: Hot module replacement via Vite integration

## Key Components

### Frontend Components
- **Landing Page**: Single-page website with multiple sections (Hero, Services, About, Testimonials, Portfolio, Pricing, Contact)
- **UI Components**: Comprehensive shadcn/ui component library including forms, cards, buttons, toasts, and layout components
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Form Components**: Contact form with validation and error handling

### Backend Components
- **API Routes**: RESTful endpoints for contact form submission and retrieval
- **Database Schema**: Contact inquiries table with proper typing
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Database Schema
- **Contact Inquiries Table**: Stores customer inquiries with fields for contact information, business details, and requirements
- **Schema Definition**: Drizzle ORM schema with PostgreSQL dialect
- **Type Safety**: Generated TypeScript types from database schema

## Data Flow

1. **User Interaction**: Users interact with the React frontend components
2. **Form Submission**: Contact form data is validated client-side using Zod schemas
3. **API Request**: Form data is sent to Express.js backend via REST API
4. **Server Validation**: Backend validates data using shared Zod schemas
5. **Database Storage**: Validated data is stored in PostgreSQL via Drizzle ORM
6. **Response**: Success/error response is sent back to frontend
7. **UI Update**: Frontend updates UI with toast notifications

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Library**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **State Management**: TanStack Query
- **Validation**: Zod, @hookform/resolvers
- **Icons**: Lucide React
- **Date Handling**: date-fns

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Session**: connect-pg-simple (for potential session management)
- **Validation**: Zod, drizzle-zod
- **Development**: tsx for TypeScript execution

### Development Dependencies
- **Build Tools**: Vite, esbuild
- **TypeScript**: Full TypeScript support across the stack
- **Replit Integration**: Replit-specific plugins for development environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild compiles TypeScript server code to `dist/index.js`
3. **Static Assets**: Frontend assets are served from Express.js in production

### Environment Configuration
- **Development**: Uses Vite dev server with HMR and Express.js backend
- **Production**: Serves static frontend files from Express.js
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Database Management
- **Migrations**: Drizzle Kit for database schema migrations
- **Schema Push**: `db:push` command for development schema updates
- **Configuration**: Drizzle config points to PostgreSQL with migrations in `./migrations`

## Changelog

```
Changelog:
- July 03, 2025. Initial setup with 6 core AI services
- July 03, 2025. Expanded to 15 AI services including:
  * Remote AI Assistant (phone/text accessible)
  * MCP & RAG Systems for document intelligence
  * Data Processing automation
  * AI Sales Assistant for lead qualification
  * AI Security Guard with computer vision
  * AI Accounting Assistant
  * Smart Scheduling System
  * AI Content Creator
  * AI Workflow Optimizer
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```