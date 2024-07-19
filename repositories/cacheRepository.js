const Cache = require('../models/cache');

class CacheRepository {
    async create(data) {
        return await Cache.create(data);
    }

    async findBySheetCache(sheet_cache) {
        return await Cache.findOne({ where: { sheet_cache } });
    }
}

module.exports = new CacheRepository();