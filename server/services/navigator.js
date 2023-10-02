"use strict";

module.exports = ({ strapi }) => ({
  async findNext(model, id) {
    const currentRecord = await strapi.entityService.findOne(model, id);
    return await strapi.entityService.findMany(model, {
        filters: {
            createdAt: {
              $gt: currentRecord.createdAt,
            },
        },
        limit: 1,
    });
  },

  async findPrevious(model,id) {
    const currentRecord = await strapi.entityService.findOne(model, id);
    return await strapi.entityService.findMany(model, {
        filters: {
            createdAt: {
              $lt: currentRecord.createdAt,
            },
        },
        limit: 1,
        sort: {
        createdAt: 'DESC',
        },
    });
  },
});
