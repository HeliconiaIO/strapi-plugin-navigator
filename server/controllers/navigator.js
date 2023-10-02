'use strict';

module.exports = {
    async findNext(ctx) {
      try {
        return await strapi.plugin("navigator").service("navigator").findNext(ctx.params.model, ctx.params.id);
      } catch (err) {
        ctx.throw(500, err);
      }
    },
  
    async findPrevious(ctx) {
        try {
          return await strapi.plugin("navigator").service("navigator").findPrevious(ctx.params.model, ctx.params.id);
        } catch (err) {
          ctx.throw(500, err);
        }
      },
  
    
  };