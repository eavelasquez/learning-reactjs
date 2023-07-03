# React SSR App

This is an example of how to render a React component to a string. This is useful for server-side rendering, which is a technique used to improve the performance of web applications.

## Running the example

```bash
pnpm install
pnpm build
pnpm start
```

## How it works

The `renderToString` function from `react-dom/server` is used to render the `App` component to a string. The string is then sent to the client, where it is rendered again using the `hydrateRoot` function from `react-dom`.

## Resources

- [React Docs: Server Rendering](https://react.dev/reference/react-dom/server/renderToString)
- [React Docs: Hydration](https://react.dev/reference/react-dom/client/hydrateRoot#hydrateroot)
- [Basics of React server-side rendering with Express.js](https://dev.to/juhanakristian/basics-of-react-server-side-rendering-with-expressjs-phd)
