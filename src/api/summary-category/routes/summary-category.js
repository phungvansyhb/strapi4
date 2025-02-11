module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/summary-category',
     handler: 'summary-category.getSummary',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
