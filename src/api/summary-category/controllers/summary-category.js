'use strict';

/**
 * A set of functions called "actions" for `summary-category`
 */

module.exports = {
  getSummary: async (ctx, next) => {
    try {
      // ctx.body = "hello"
      const categories = await strapi.entityService.findMany('api::category.category', {
        sort: {createdAt: 'desc'},
        filters : {
          publishedAt : {
            $notNull : true
          }
        },
        populate: {cover: true}
      });
      for (const category of categories) {
        const listArt = await strapi.entityService.findMany('api::article.article', {
          fields: ['id'],
          filters: {
            publishedAt : {
              $notNull : true
            },
            category: category
          },

        })
        category.numberArticles = listArt.length
      }
      ctx.body = {data: categories};
      // ctx.body = await strapi.service('api::summary-category.summary-category').getPublishedArticlesSummary();
    } catch (err) {
      ctx.body = err;
    } finally {
      await next()
    }
  }
};
