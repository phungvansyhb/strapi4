/**
 * A set of functions called "actions" for `find-art-by-slug`
 */

export default {
  async findBySlug (ctx, next) {
    try {
      const articles = await strapi.entityService.findMany("api::article.article",{...ctx.query})
      if(articles.length > 0){
        const result = articles[0]
        await strapi.entityService.update('api::article.article', result.id, {
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
