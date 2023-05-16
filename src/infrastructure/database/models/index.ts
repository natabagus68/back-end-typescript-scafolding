// Core Sequelize Model Import
import { User } from "./user-sequelize";

// Apps Sequelize Model Import
import { Customer } from "./customer-sequelize";
import { GeneralData } from "./general-data-sequelize";
import { MachineData } from "./machine-data-sequelize";
import { InspectionForm } from "./inspection-form-sequelize";
import { InspectionFormItem } from "./inspection-form-item-sequelize";
import { AccuracyCheck } from "./accuracy-check-sequelize";
import { CheckLoadTonnage } from "./check-load-tonnage-sequelize";

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
AccuracyCheck.sync({ alter: { drop: false } });
CheckLoadTonnage.sync({ alter: { drop: false } });

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
GeneralData.hasMany(AccuracyCheck, {
    foreignKey: "general_data_id",
    as: "accuracy_checks",
});
GeneralData.hasMany(CheckLoadTonnage, {
    foreignKey: "general_data_id",
    as: "load_tonnages",
});

// Core Model Export
export * from "./user-sequelize";
// Apps Model Export
export * from "./customer-sequelize";
export * from "./general-data-sequelize";
export * from "./machine-data-sequelize";
export * from "./inspection-form-sequelize";
export * from "./inspection-form-item-sequelize";
export * from "./accuracy-check-sequelize";
export * from "./check-load-tonnage-sequelize";
