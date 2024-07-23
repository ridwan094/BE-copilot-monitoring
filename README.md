# api-monitoring-copilot
api for monitoring copilot

# how to create migration file :
npx sequelize-cli migration:generate --name migration_name

# running migration:
npx sequelize-cli db:migrate

# rollback all migration :
npx sequelize-cli db:migrate:undo:all

# create seeder :
npx sequelize-cli seed:generate --name seeder_name

# running seeder :
npx sequelize-cli db:seed:all

# undo seeder : 
npx sequelize-cli db:seed:undo:all
