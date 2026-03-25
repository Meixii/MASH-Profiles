export type TechStackKey =
  | 'typescript'
  | 'react'
  | 'next'
  | 'javascript'
  | 'tailwind'
  | 'graphql'
  | 'firebase'
  | 'nodejs'
  | 'mongodb'
  | 'postgresql'
  | 'prisma'
  | 'trpc'
  | 'vue'
  | 'svelte'
  | 'python'
  | 'docker'
  | 'figma'
  | 'framer'
  | 'redux'
  | 'zustand'
  | 'sass'
  | 'threejs'
  | 'gsap'
  | 'mern'
  | 'mean'
  | 'mevn'
  | 'pern'
  | 'pean'
  | 'pevn'
  | 'lamp'
  | 'lemp'
  | 'lapp'
  | 'wamp'
  | 'mamp'
  | 't3stack'
  | 'tallstack'
  | 'petalstack'
  | 'grandstack'
  | 'djangoreact'
  | 'djangovue'
  | 'djangohtmx'
  | 'flaskreact'
  | 'fastapinext'
  | 'laravelvue'
  | 'laravelreact'
  | 'railshotwire'
  | 'railsreact'
  | 'springbootangular'
  | 'springbootreact'
  | 'aspnetcoreblazor'
  | 'aspnetcorereact'
  | 'aspnetcoreangular'
  | 'sveltekitprisma'
  | 'nuxtnitro'
  | 'solidstartdrizzle'
  | 'remixprisma'
  | 'astrotailwind'
  | 'gatsbygraphql'
  | 'redwoodjs'
  | 'blitzjs'
  | 'meteorjs'
  | 'flutterfirebase'
  | 'reactnativeexpo'
  | 'ionicangular'
  | 'nativeios'
  | 'nativeandroid'
  | 'rustleptos'
  | 'rustaxyew'
  | 'goginreact'
  | 'goechohtmx'
  | 'clojureluminus'
  | 'serverlessstack'
  | 'firebasefullstack'
  | 'supabasefullstack'
  | 'appwritefullstack'
  | 'pocketbasefullstack'
  | 'strapiNext'
  | 'sanitygatsby'
  | 'shopifyhydrogenoxygen'
  | 'wordpressheadless'
  | 'odoo'
  | 'sapfiori'
  | 'mainframe'

export const techStackOptions: Array<{ label: string; value: TechStackKey }> = [
  { label: 'TypeScript', value: 'typescript' },
  { label: 'React', value: 'react' },
  { label: 'Next.js', value: 'next' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Tailwind CSS', value: 'tailwind' },
  { label: 'GraphQL', value: 'graphql' },
  { label: 'Firebase', value: 'firebase' },
  { label: 'Node.js', value: 'nodejs' },
  { label: 'MongoDB', value: 'mongodb' },
  { label: 'PostgreSQL', value: 'postgresql' },
  { label: 'Prisma', value: 'prisma' },
  { label: 'tRPC', value: 'trpc' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Python', value: 'python' },
  { label: 'Docker', value: 'docker' },
  { label: 'Figma', value: 'figma' },
  { label: 'Framer', value: 'framer' },
  { label: 'Redux', value: 'redux' },
  { label: 'Zustand', value: 'zustand' },
  { label: 'Sass', value: 'sass' },
  { label: 'Three.js', value: 'threejs' },
  { label: 'GSAP', value: 'gsap' },
  { label: 'MERN (MongoDB, Express, React, Node)', value: 'mern' },
  { label: 'MEAN (MongoDB, Express, Angular, Node)', value: 'mean' },
  { label: 'MEVN (MongoDB, Express, Vue, Node)', value: 'mevn' },
  { label: 'PERN (Postgres, Express, React, Node)', value: 'pern' },
  { label: 'PEAN (Postgres, Express, Angular, Node)', value: 'pean' },
  { label: 'PEVN (Postgres, Express, Vue, Node)', value: 'pevn' },
  { label: 'LAMP (Linux, Apache, MySQL, PHP)', value: 'lamp' },
  { label: 'LEMP (Linux, Nginx, MySQL, PHP)', value: 'lemp' },
  { label: 'LAPP (Linux, Apache, Postgres, PHP)', value: 'lapp' },
  { label: 'WAMP (Windows, Apache, MySQL, PHP)', value: 'wamp' },
  { label: 'MAMP (Mac, Apache, MySQL, PHP)', value: 'mamp' },
  { label: 'T3 Stack (Next.js, TypeScript, Tailwind, tRPC, Prisma)', value: 't3stack' },
  { label: 'TALL Stack (Tailwind, Alpine.js, Laravel, Livewire)', value: 'tallstack' },
  { label: 'PETAL Stack (Phoenix, Elixir, Tailwind, Alpine.js, LiveView)', value: 'petalstack' },
  { label: 'GRAND Stack (GraphQL, React, Apollo, Neo4j)', value: 'grandstack' },
  { label: 'Django + React', value: 'djangoreact' },
  { label: 'Django + Vue', value: 'djangovue' },
  { label: 'Django + HTMX', value: 'djangohtmx' },
  { label: 'Flask + React', value: 'flaskreact' },
  { label: 'FastAPI + Next.js', value: 'fastapinext' },
  { label: 'Laravel + Vue (Inertia.js)', value: 'laravelvue' },
  { label: 'Laravel + React (Inertia.js)', value: 'laravelreact' },
  { label: 'Ruby on Rails + Hotwire', value: 'railshotwire' },
  { label: 'Ruby on Rails + React', value: 'railsreact' },
  { label: 'Spring Boot + Angular', value: 'springbootangular' },
  { label: 'Spring Boot + React', value: 'springbootreact' },
  { label: 'ASP.NET Core + Blazor', value: 'aspnetcoreblazor' },
  { label: 'ASP.NET Core + React', value: 'aspnetcorereact' },
  { label: 'ASP.NET Core + Angular', value: 'aspnetcoreangular' },
  { label: 'SvelteKit + Prisma', value: 'sveltekitprisma' },
  { label: 'Nuxt.js + Nitro', value: 'nuxtnitro' },
  { label: 'SolidStart + Drizzle', value: 'solidstartdrizzle' },
  { label: 'Remix + Prisma', value: 'remixprisma' },
  { label: 'Astro + Tailwind', value: 'astrotailwind' },
  { label: 'Gatsby + GraphQL', value: 'gatsbygraphql' },
  { label: 'RedwoodJS', value: 'redwoodjs' },
  { label: 'Blitz.js', value: 'blitzjs' },
  { label: 'Meteor.js', value: 'meteorjs' },
  { label: 'Flutter + Firebase', value: 'flutterfirebase' },
  { label: 'React Native + Expo', value: 'reactnativeexpo' },
  { label: 'Ionic + Angular', value: 'ionicangular' },
  { label: 'Native iOS (Swift / SwiftUI)', value: 'nativeios' },
  { label: 'Native Android (Kotlin / Jetpack Compose)', value: 'nativeandroid' },
  { label: 'Rust (Leptos)', value: 'rustleptos' },
  { label: 'Rust (Axum + Yew)', value: 'rustaxyew' },
  { label: 'Go (Gin) + React', value: 'goginreact' },
  { label: 'Go (Echo) + HTMX', value: 'goechohtmx' },
  { label: 'Clojure (Luminus)', value: 'clojureluminus' },
  { label: 'Serverless Stack (AWS Lambda, API Gateway, DynamoDB)', value: 'serverlessstack' },
  { label: 'Firebase Fullstack', value: 'firebasefullstack' },
  { label: 'Supabase Fullstack', value: 'supabasefullstack' },
  { label: 'Appwrite Fullstack', value: 'appwritefullstack' },
  { label: 'PocketBase Fullstack', value: 'pocketbasefullstack' },
  { label: 'Strapi + Next.js', value: 'strapiNext' },
  { label: 'Sanity + Gatsby', value: 'sanitygatsby' },
  { label: 'Shopify Hydrogen + Oxygen', value: 'shopifyhydrogenoxygen' },
  { label: 'Wordpress Headless (WP + React)', value: 'wordpressheadless' },
  { label: 'Odoo (Python + JS Framework)', value: 'odoo' },
  { label: 'SAP Fiori (SAPUI5 + OData)', value: 'sapfiori' },
  { label: 'Mainframe (COBOL / DB2)', value: 'mainframe' },
]
