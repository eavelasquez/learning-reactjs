# Movie Search

## Description

This is a simple movie search app that uses the [OMDb API](http://www.omdbapi.com/) to search for movies and display their details.

### Preview

![Movie Search](../../assets/movie-search.gif)

## Instructions

Create an app that allows users to search for movies by title. When a user searches for a movie, display a list of results that includes the movie's title, year, and poster image.

- API URL: <http://www.omdbapi.com/>

### Requirements

- You need to display an input field and a button to search for movies.
- When a user searches for a movie, display a list of results that includes the movie's title, year, and poster image.
- Search results should be displayed in a grid.
- Prevent the same search from being made twice.
- Make the search happen when the user types in the input field and prevent searching continuously while the user is typing (e.g. only search when the user stops typing for 300ms).

## Development

Run `pnpm install` to install the dependencies. Then run `pnpm run dev` to start the development server.

## Testing

Run `pnpm test` to run the tests.

## Deployment

Run `pnpm build` to build the app for production. The build is minified and the filenames include the hashes.
