# ReactRenderLab
React Typescript with Next.js lab to demonstrate rendering issues and solutions

## How to run this repository

Visit the [rubenmora.com/apps/react-rendering-lab](https://rubenmora.com/apps/react-rendering-lab) website to see an example in action.

Clone this repository:

```bash 
git clone https://github.com/RubenMoraVargas/ReactRenderLab.git
```

and run next command to install all dependencies.

```bash
yarn install 
```

Then run the next command to start the development server.

```bash
yarn dev 
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you want to build the project, run `yarn build`.
```bash
yarn build 
```

If you want to run the project with turbo and tailwind css use
```bash
yarn dev-turbo 
```

Use next command to run tests.
```bash
yarn test 
```

## little explanation of code
This code is a simple Next.js 13 application, and this repository is a lab to show some rendering problems and solutions. 

This code uses all the code in the src folder, now, Next.js 13 uses the app directory, and all page.tsx has its own component directory with all components used; in this case, the project has only one page. The directory for the components, has three directories: 
- Atomic directory with atomic components.
- Layout directory with the Navbar component.
- Rendering directory with the principal components.

The rendering components have names of AWS services only for didactic purposes, and easy grouping. The components with the word "Optimize" are components that have a solution for the problem.

## Technologies used
- Next.js 13
- React.js 18
- Typescript
- Tailwind CSS
- Turbo
- Eslint
- Prettier
- Jest
- SWC/Jest to improve the speed of tests
- React Testing Library

## More information in the blog [rubenmora.com/blog](https://rubenmora.com/blog)
[Article to discuss common rendering issues and solutions in react ](https://rubenmora.com/blog/react-rendering-lab)
