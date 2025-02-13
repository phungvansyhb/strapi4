export default {
  routes: [
    {
     method: 'GET',
     path: '/find-art-by-slug',
     handler: 'find-art-by-slug.findBySlug',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
