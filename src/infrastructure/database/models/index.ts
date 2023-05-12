// Core Sequelize Model Import

import { Customer } from "./customer";
import { GeneralData } from "./general-data";
import { User } from "./user-sequelize";

// Apps Sequelize Model Import

// Core Model Synchronisation
User.sync({ alter: { drop: false } });

// Apps Model Synchronisation
GeneralData.sync({ alter: { drop: false } });
Customer.sync({ alter: { drop: false } });

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
