// Core Sequelize Model Import

import { User } from "./user-sequelize";

// Apps Sequelize Model Import

// Core Model Synchronisation
User.sync({ alter: { drop: false } });

// Apps Model Synchronisation

// Core Model Assosiation
// User.belongsToMany(Role, {
//   through: UserRole,
//   foreignKey: 'user_id',
//   otherKey: 'role_id',
// })

// Apps Model Assosiation
// ProductionUnit.belongsTo(ProductionCategory, {
//   foreignKey: 'category_id',
//   as: 'unit_category',
// })

// Core Model Export
export * from "./user-sequelize";
// Apps Model Export
