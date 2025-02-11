'use strict';
const { createCoreService } = require('@strapi/strapi').factories;

module.exports =  createCoreService('api::summary-category.summary-category', ({ strapi }) => ({
  // Custom service method to get a summary of published articles
  async getPublishedArticlesSummary() {
    try {
      const categories = await strapi.entityService.findMany('api::category.category');
      console.log('run here too', categories)
      for (const category of categories) {
        const listArt = await strapi.entityService.findMany('api::article.article',{
          status: 'published',
          category: category
        })
           category.numberArticles = listArt.length
      }
      return categories;
    } catch (error) {
      console.log('run here')
      throw new Error(`Error fetching published articles count: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}));

