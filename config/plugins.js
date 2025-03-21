module.exports = () => ({
  seo : {
    enabled : true
  },
  publisher: {
    enabled: true,
    config: {
      hooks: {
        beforePublish: async ({ strapi, uid, entity }) => {
          console.log('beforePublish');
        },
        afterPublish: async ({ strapi, uid, entity }) => {
          console.log('afterPublish');
        },
        beforeUnpublish: async ({ strapi, uid, entity }) => {
          console.log('beforeUnpublish');
        },
        afterUnpublish: async ({ strapi, uid, entity }) => {
          console.log('afterUnpublish');
        },
      },
    },
  },
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
});
