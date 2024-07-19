'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('WhitelistUsers', [
      {
        email_work: 'mohammad.fakhry@work.bri.co.id'
      },
      {
        email_work: 'rudi.atmojo@work.bri.co.id'
      },
      {
        email_work: 'bimo.wicaksono@work.bri.co.id'
      },
      {
        email_work: 'ichwanul.hakim@work.bri.co.id'
      },
      {
        email_work: 'bendan_lukito@work.bri.co.id'
      },
      {
        email_work: 'fadeli.priyanta@work.bri.co.id'
      },
      {
        email_work: 'kadek.wisnu@work.bri.co.id'
      },
      {
        email_work: 'yoga.arie@work.bri.co.id'
      },
      {
        email_work: 'reza.prasetio@work.bri.co.id'
      },
      {
        email_work: 'givanni.trisya@work.bri.co.id'
      },
      {
        email_work: 'desty.rizqiana@work.bri.co.id'
      },
      // Tambahkan data lainnya di sini
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('WhitelistUsers', null, {});
  }
};
