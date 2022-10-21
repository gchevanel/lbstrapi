'use strict';

/**
 * asa router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::asa.asa');
