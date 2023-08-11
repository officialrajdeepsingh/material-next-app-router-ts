# How to install material UI in the Next.js with the app router?
## Details guide on installing MUI with Next.js app router and how to toggle theme light to dark with MUI and Next.js app router.
Understand the installation process of MUI in the nextjs app router, [then check out my article](https://medium.com/frontendweb/how-to-install-material-ui-in-the-next-js-with-the-app-router-10d2a60e41f2).

## installation

### clone the project
```bash
git clone https://github.com/officialrajdeepsingh/material-next-app-router-ts.github
```
### change the folder 
```bash
cd material-next-app-router-ts
```

### Install the node package
```bash
npm install
# or
pnpm install
# or
yarn install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can edit the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Note
remove the following code when you start your development server.
```
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
};

module.exports = nextConfig;

```


