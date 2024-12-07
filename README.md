## OVERVIEW
- This document provides information, estimation and questions about phase 1 of Next.JS training
- Related document
    - NextJSt: [https://nextjs.org/docs/14](https://nextjs.org/docs/14)
    - Next UI: [https://nextui.org/](https://nextui.org/)
    - Strapi: [https://strapi.io/](https://strapi.io/)
    - Design: [Figma](https://www.figma.com/design/xbUutqgIhsrGkrB9NjdWLv/Scholl-Genius?node-id=21-221&t=0vUhuPdOfzPD4w4T-4)

## TIMELINE
- Reading NextJS 14 & NextUI: **5 days**
- Learning & create db using Strapi: **3 days**
- Practice: **Self-estimate by trainee**

## TARGET
- Understand and apply Next.JS’s basic key features:
    - App routing
    - Rendering
    - Streaming
    - Data fetching
    - Caching

## TECH STACK
- React v18.3.1
- Next.JS v14.2.5
- TailwindCSS v3.4.1
- NextUI v2.4.8

## SOURCE VERSION CONTROL
- GitHub for development & deployment
    - Repo: [nextjs-training](https://github.com/yuki2522001/nextjs-trainng)

## BUILD & DEPLOY
- Vercel for UI
- Render for API

## INSTRUCTION STUDY
- [Getting Started](https://nextjs.org/docs/14/getting-started)
    - [Installation](https://nextjs.org/docs/14/getting-started/installation)
    - [Project Structure](https://nextjs.org/docs/14/getting-started/project-structure)
- [Building Your Application](https://nextjs.org/docs/14/app/building-your-application)
    - [Routing](https://nextjs.org/docs/14/app/building-your-application/routing)
        - Defining Routes
        - Pages and Layouts
        - Linking and Navigating
        - Loading UI and Streaming
        - Error Handling
        - Redirecting
        - Route Groups
        - Project Organization
        - Dynamic Routes
        - Parallel Routes
- [Data fetching](https://nextjs.org/docs/14/app/building-your-application/data-fetching)
    - Data Fetching, Caching and Revalidating
    - Data Fetching Patterns and Best Practices
- [Rendering](https://nextjs.org/docs/14/app/building-your-application/rendering)
    - Server Components
    - Client Components
- [Caching](https://nextjs.org/docs/14/app/building-your-application/caching)
- [Next.JS Tutorial Example](https://nextjs.org/learn) (Learn from chapter 1 to chapter 11, Ignore chapter 6 and re-mock API using JSON Server)

## FEATURES
- Create a **Landing page** with highest possible pagespeed score and user can
    - Show top 3 courses by rating star in the **Home page**
    - Click on **View all** will navigate to **Courses page**
- Create a **Courses page** that user can
    - View all the courses in the system with pagination
    - Search for a course that match a keyword typing
    - Filter a course by its category
    - Click on Learn more button in each course will navigate to the Course detail page
- Create a **Course details page** that user can
    - View details information of a course
    - Navigate to not found page when a course don’t exist in the database
