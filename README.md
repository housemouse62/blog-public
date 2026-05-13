# blog-public

Public-facing frontend for the Thought Windows blog. Built with React 19 and Vite.

Readers can browse published posts, register an account, log in, and leave comments and replies.

---

## Tech Stack

- **Framework**: React 19
- **Build tool**: Vite
- **Routing**: React Router 7
- **Auth**: JWT via `jwt-decode` + `localStorage`

---

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

> **Note**: The app expects the `blog-window` API to be running at `http://localhost:3000`.

---

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server on port 5173 |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## Routes

| Path | Component | Auth required |
|---|---|---|
| `/` | Login | — |
| `/createUser` | Register | — |
| `/posts` | Blog posts list | — |
| `/posts/:postID` | Single post with comments | — |
| `/profile` | User profile management | Yes |

---

## Features

- Browse all published blog posts
- Register and log in as a reader
- Comment on posts and reply to comments
- Edit or delete your own comments and replies
- Update your display name and screen name from the profile page

---

## Authentication

On login, a JWT is stored in `localStorage` under the key `"token"` and decoded client-side with `jwt-decode`. Auth state is managed globally via `AuthContext` (`src/AuthContext.jsx`) and consumed throughout the app. Logging out clears the token from `localStorage`.
