# InScope-Backend
The backend application for the InScope task management application

## Getting Started

### Dependencies:

The application requires a few dependencies. Ensure the follow are installed
on your machine to properly run the application.
* Node.js (v6.10.2) *A version manager, like NVM, can be helpful if you need to change Node versions frequently.
* NPM (v3.10.10)
* PostgreSQL

### Setup

1. Create database in PostgreSQL for the project.
2. Update database configurations in `config/config.json` under "development".
3. Run:
```
# Install dependencies
$ npm install

# Run migrations
$ node_modules/.bin/sequelize db:migrate
```

### Run Application

Run:
```bash
$ ./bin/www
```

Visit http://localhost:3000/ to see "Welcome to Express" page.
