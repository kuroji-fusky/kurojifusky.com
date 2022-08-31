// const parse = require('pg-connection-string').parse
// const config = parse(process.env.DATABASE_URL)

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        ca: env('DATABASE_CA')
      },
    },
    debug: false,
  }
});
