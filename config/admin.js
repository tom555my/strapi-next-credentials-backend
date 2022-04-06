module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '837de16e4db7c5e27eb05ae2cd60d7c8'),
  },
});
