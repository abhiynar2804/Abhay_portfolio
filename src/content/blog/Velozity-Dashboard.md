# Velozity Dashboard 🚀

> A production-ready role-based project and task management dashboard built with React, TypeScript, Node.js, Express, PostgreSQL, Prisma, and Socket.IO.

## Overview

Velozity Dashboard is a full-stack project management application designed around three roles: **Admin, Project Manager, and Developer**.

The project was built as part of a Software Development Engineering (Web) internship assessment. Rather than focusing only on CRUD functionality, I focused on building the application around **secure API authorization, persistent activity tracking, real-time communication, notifications, presence, and production deployment**.

🔗 **Live Demo:** https://velozity-dashboard-gamma.vercel.app/

---

## What I Built

The application provides a different experience based on the authenticated user's role.

### 👑 Admin
- Global project and task visibility
- Task status overview
- Overdue task tracking
- Live online-user count
- Global activity feed
- Project, client, and team management

### 📋 Project Manager
- Access to owned projects
- Project-level task summaries
- Task priority and deadline visibility
- Team activity
- Notifications when assigned tasks move into review

### 💻 Developer
- Visibility limited to assigned tasks
- Priority and due-date based task organization
- Task status updates
- Personal activity history
- Real-time notifications for task assignments

---

## The Interesting Part: Real-Time Architecture ⚡

One of the main engineering challenges was implementing real-time functionality without relying on polling.

The application uses **Socket.IO** for persistent client-server communication.

When a relevant event occurs:

1. The server validates the authenticated user.
2. The server determines which projects/tasks the user is authorized to access.
3. The event is emitted only to the appropriate Socket.IO room.
4. Connected clients update their UI immediately.

This makes the real-time layer **role-aware rather than globally broadcasting sensitive activity**.

### Role-filtered rooms

The application uses rooms for different scopes, including:
- User-specific rooms
- Project staff rooms
- Task-specific rooms

This allows Admins, Project Managers, and Developers to receive only the events relevant to them.

---

## Offline Activity Recovery

Real-time systems also need to handle the moments when a user is **not connected**.

Activities are persisted in PostgreSQL rather than treating WebSocket events as the source of truth.

When the client reconnects, it can retrieve recent relevant activities from the database and merge them with its local activity state.

This gives the application a recovery mechanism instead of losing events that happened while the client was disconnected.

---

## Authentication & Security 🔐

Authentication uses JWT access and refresh tokens.

### Access tokens

Access tokens are kept in application memory on the frontend rather than being persisted in localStorage.

### Refresh tokens

Refresh tokens are stored using **HttpOnly cookies** and are persisted securely on the backend.

Refresh tokens are hashed in the database and rotated/revoked during the refresh flow.

### API-level authorization

Authorization is enforced on the backend rather than relying only on frontend route protection.

Examples:
- Developers can only access assigned tasks.
- Project Managers can only access projects they own.
- Admins have global access.
- Users cannot simply modify their role through registration input.

This was an important design decision because hiding UI elements is not sufficient security.

---

## Activity Tracking

Task status changes generate persistent activity records.

For a status transition, the activity stores:
- User
- Project
- Task
- Previous status
- New status
- Timestamp

This activity data powers both dashboard activity feeds and the real-time experience.

The database remains the source of truth, while Socket.IO provides the live delivery layer.

---

## Notifications 🔔

The application includes persistent notifications with real-time unread-count updates.

Examples include:
- A developer being assigned a task
- A Project Manager being notified when a task enters review

Users can:
- View notifications
- Mark an individual notification as read
- Mark all notifications as read
- Receive unread-count updates in real time

---

## Live Presence 👥

The dashboard displays the number of currently online users.

A user can have multiple browser tabs or socket connections, so presence is aggregated by **unique user ID** rather than simply counting socket connections.

This prevents the online-user count from becoming inflated when the same user opens multiple connections.

---

## Overdue Task Processing ⏰

Overdue tasks are handled by a backend scheduled job.

The scheduler periodically checks incomplete tasks whose due dates have passed and updates their overdue state in the database.

This is intentionally handled on the backend rather than relying only on frontend calculations.

---

## Database Design

The backend uses **PostgreSQL with Prisma**.

Core entities include:
- User
- Client
- Project
- Task
- Activity
- Notification
- RefreshToken

Enums are used for controlled values such as:
- User roles
- Task statuses
- Task priorities
- Notification types

The schema also includes indexes for commonly queried relationships and fields.

---

## Seed Data 🌱

The project includes a production/demo seed containing:
- 1 Admin
- 2 Project Managers
- 4 Developers
- 3 Projects
- 15 Tasks
- Overdue tasks
- Existing activity records
- Notifications

This makes the application immediately testable after database setup.

---

## Testing

Security-focused tests were added for important backend behavior, including:
- Authentication flow
- JWT tampering
- Developer task isolation
- Project Manager ownership isolation
- Socket activity authorization
- Presence aggregation
- Overdue task processing

The goal was to verify authorization and real-time behavior at the backend level rather than relying only on frontend testing.

---

## Production Deployment 🌍

The final application is deployed using:
- **Frontend:** Vercel
- **Backend:** Railway
- **Database:** Neon PostgreSQL

The production architecture separates the frontend from the persistent Node.js/Socket.IO backend while keeping PostgreSQL as the central source of truth.

---

## Key Engineering Takeaways

### 1. Authorization belongs on the server
A frontend can hide a button, but it cannot be trusted to enforce permissions.

### 2. Real-time systems need persistence
WebSockets are excellent for immediate delivery, but persistent database records are necessary for recovery and historical activity.

### 3. WebSocket authorization matters
Broadcasting every event to every connected client is easy, but secure room-level filtering requires thinking about **who is allowed to receive each event**.

### 4. Presence is more than counting sockets
Multiple connections can belong to the same user, so presence needs user-level aggregation.

### 5. Production deployment exposes different problems
Moving from localhost to Vercel + Railway + Neon forced me to think about CORS, environment variables, cookies, WebSocket connections, database connectivity, and production configuration as one system.

---

## Tech Stack

**Frontend**
- React
- TypeScript
- Vite

**Backend**
- Node.js
- Express
- TypeScript
- Socket.IO

**Database**
- PostgreSQL
- Prisma

**Authentication**
- JWT
- HttpOnly cookies
- Refresh-token rotation

**Deployment**
- Vercel
- Railway
- Neon PostgreSQL

---

## Final Thoughts

Velozity Dashboard started as an assessment project, but I treated it as a real production application rather than just a collection of required features.

The most valuable part for me was understanding how **authentication, authorization, database persistence, real-time communication, background jobs, and deployment** fit together as one system.

It was a challenging build, especially around real-time authorization and production deployment, but it gave me a much better understanding of what it takes to move a full-stack application from local development to a publicly accessible product.

---

## Links

🌐 **Live Application:** https://velozity-dashboard-gamma.vercel.app/

💻 **GitHub:** https://github.com/abhiynar2804/Velozity-Dashboard

