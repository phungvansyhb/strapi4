'use strict';

/**
 * ung-dung service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app.app');
