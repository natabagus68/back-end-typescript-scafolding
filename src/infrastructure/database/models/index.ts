// Core Sequelize Model Import
import { User } from "./user-sequelize";

// Apps Sequelize Model Import
import { Customer } from "./customer-sequelize";
import { GeneralData } from "./general-data-sequelize";
import { MachineData } from "./machine-data-sequelize";
import { InspectionForm } from "./inspection-form-sequelize";
import { InspectionFormItem } from "./inspection-form-item-sequelize";

// Core Model Synchronisation
User.sync({ alter: { drop: false } });

// Apps Model Synchronisation
GeneralData.sync({ alter: { drop: false } });
Customer.sync({ alter: { drop: false } });
MachineData.sync({ alter: { drop: false } });
(async () => {
    await InspectionForm.sync({ alter: { drop: false } });
    InspectionFormItem.sync({ alter: { drop: false } });
})();

// Core Model Assosiation
// User.belongsToMany(Role, {
//   through: UserRole,
//   foreignKey: 'user_id',
//   otherKey: 'role_id',
// })

// Apps Model Assosiation
InspectionForm.hasMany(InspectionFormItem, {
    foreignKey: "inspection_form_id",
    as: "items",
});

// Core Model Export
export * from "./user-sequelize";
// Apps Model Export
export * from "./customer-sequelize";
export * from "./general-data-sequelize";
export * from "./machine-data-sequelize";
export * from "./inspection-form-sequelize";
export * from "./inspection-form-item-sequelize";
