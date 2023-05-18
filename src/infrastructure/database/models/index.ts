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
import { InspectionData } from "./inspection-data-sequelize";
import { InspectionDataItem } from "./inspection-data-item-sequelize";
import { MachineCheck } from "./machine-check-sequelize";
import { ResumeCheck } from "./resume-check-sequelize";
import { Notification } from "./notification-sequelize";

(async () => {
    // Core Model Synchronisation
    await User.sync({ alter: { drop: false } });

    // Apps Model Synchronisation
    await Customer.sync({ alter: { drop: false } });
    await GeneralData.sync({ alter: { drop: false } });
    await InspectionData.sync({ alter: { drop: false } });
    MachineData.sync({ alter: { drop: false } });
    InspectionDataItem.sync({ alter: { drop: false } });
    MachineCheck.sync({ alter: { drop: false } });
    AccuracyCheck.sync({ alter: { drop: false } });
    ResumeCheck.sync({ alter: { drop: false } });
    CheckLoadTonnage.sync({ alter: { drop: false } });
    Notification.sync({ alter: { drop: false } });
    (async () => {
        await InspectionForm.sync({ alter: { drop: false } });
        InspectionFormItem.sync({ alter: { drop: false } });
    })();
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
GeneralData.belongsTo(User, {
    foreignKey: "inspector_id",
    as: "inspector",
});
GeneralData.belongsTo(Customer, {
    foreignKey: "customer_id",
    as: "customer",
});
GeneralData.hasMany(InspectionData, {
    foreignKey: "general_data_id",
    as: "inspectionDatum",
});
GeneralData.hasOne(MachineCheck, {
    foreignKey: "general_data_id",
    as: "machineCheck",
});
GeneralData.hasOne(MachineData, {
    foreignKey: "general_data_id",
    as: "machineDatum",
});
GeneralData.hasOne(ResumeCheck, {
    foreignKey: "general_data_id",
    as: "resumeCheck",
});
GeneralData.hasOne(AccuracyCheck, {
    foreignKey: "general_data_id",
    as: "accuracyCheck",
});
GeneralData.hasMany(CheckLoadTonnage, {
    foreignKey: "general_data_id",
    as: "loadTonnages",
});
InspectionData.hasMany(InspectionDataItem, {
    foreignKey: "inspection_data_id",
    as: "items",
});
Notification.belongsTo(GeneralData, {
    foreignKey: "general_data_id",
    as: "generalData",
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
export * from "./inspection-data-sequelize";
export * from "./inspection-data-item-sequelize";
export * from "./machine-check-sequelize";
