## Project Overview
Omnisbay.com - AI-Native PropTech/TRM landing page.

## Architecture Decisions
- **v2 (2026-02-23)**: Moved to a database-free architecture.
- **Storage**: Using `MemStorage` in `server/storage.ts` (in-memory, non-persistent) to remove PostgreSQL dependency.
- **Email Notifications**: Integrated Resend for waitlist notifications. 
- **Integration Note**: User declined the native Replit Resend connector. Manual implementation using `RESEND_API_KEY` secret is used instead.
- **Frontend**: React + Vite + Tailwind + Shadcn UI.
- **Backend**: Express.js.

## User Preferences
- Stealth mode corporate aesthetic (Blue/White scheme).
- No database dependency for cheaper/simpler hosting.
- Email notifications to `waitlist@omnisbay.com`.
