'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
     up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories',[
      {
        name: "Node js"
      },
      {
        name: "Javascript"
      },
      {
        name: "Operatig System"
      },
      {
        name: "Python"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
