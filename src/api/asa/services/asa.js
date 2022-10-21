'use strict';

/**
 * asa service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::asa.asa');
