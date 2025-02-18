/**
 * A set of functions called "actions" for `find-app-by-slug`
 */

export default {
  async findBySlug (ctx, next) {
    try {
      const articles = await strapi.entityService.findMany("api::app.app",{...ctx.query})
      if(articles.length > 0){
        const result = articles[0]
        await strapi.entityService.update('api::app.app', result.id, {
          data: {
            viewCount: result.viewCount + 1
          }
        })
        ctx.body = result;
      }
    } catch (err) {
      ctx.body = err;
    }
  }
};
