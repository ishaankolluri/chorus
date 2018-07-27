This project is a rough programmed prototype for Allscripts Healthcare Solutions, demonstrating the potential of an internal tool to help implementation consultants in the communication of configuration decisions for electronic health records (EHRs).

## Technology
- React
- Redux
- React Router
- Redux-Thunk
- styled-components

## Datastore
[Airtable](https://www.airtable.com) is a database that operates like a spreadsheet but exposes a REST API for most operations. This was used to build the schema/model of an EHR implementation and connect it with key individuals involved.


## How to run the code

### Requirements
- npm (node package manager)

### Directions
- `cd` into the directory.
- Run `npm install`
- Run `npm start`
- Go to `localhost: 3000`
- See `localhost:3000/results` for the other view.

## Live Demo

The live demo can be found [here](https://www.allscripts-chorus.herokuapp.com).

## Backlog

- The custom CSS needs more work. A framework was not used, and [Bootstrap](https://www.getbootstrap.com) or [Skeleton](https://www.getskeleton.com) would have functioned better.
- Create a MySQL / PostgreSQL database and wrap Apollo GraphQL around it.
