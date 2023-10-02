'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('navigator')
      .service('myService')
      .getWelcomeMessage();
  },
});
