# Render To String

This is an example of how to render a React component to a string. This is useful for server-side rendering, or when you want to render a component to an image.

## Running the example

```bash
pnpm install
pnpm start
```

Output:

```bash
> node ./src/index.js

<h1>Hello World</h1>
```

## How it works

The `renderToString` function from `react-dom/server` is used to render the component to a string.

## Resources

- [React Docs: Server Rendering](https://react.dev/reference/react-dom/server/renderToString)
