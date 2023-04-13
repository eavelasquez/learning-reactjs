# Random User

## Description

This project is a simple example of how to use the [Random User API](https://randomuser.me/) to show a list of users.

## Instructions

The objective of this technical test is to create an application that shows a list of users from the Random User API.

- API URL: <https://randomuser.me/api/?results=100>

### Requirements

- [x] Fetch 100 rows of data using the Random User API.
- [x] Display the data in a table format, with the following columns: Picture, Name, Last, Country and Actions (Delete).
- [x] Provide the option to color rows in the table.
- [x] Allow the data to be sorted by country.
- [x] Enable the ability to delete a row from the table.
- [x] Implement a feature that allows the user to restore the initial state, meaning that all deleted rows will be restored.
- [x] Handle any potencial errors that may occur.
- [x] Implement a feature that allows the user to filter the data by country.
- [x] Avoid sorting users again the data when the user is changing the filter by country.
- [x] Sort by clicking on the column header.
- [x] Provide a `README.md` file with instructions on how to run the project.

## Development

Run `pnpm install` to install the dependencies. Then run `pnpm run dev` to start the development server.

## Testing

Run `pnpm test` to run the tests.

## Deployment

Run `pnpm build` to build the app for production. The build is minified and the filenames include the hashes.
