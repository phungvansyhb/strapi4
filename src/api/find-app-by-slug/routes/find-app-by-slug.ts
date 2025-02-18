export default {
  routes: [
    {
      method: 'GET',
      path: '/find-app-by-slug',
      handler: 'find-app-by-slug.findBySlug',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
