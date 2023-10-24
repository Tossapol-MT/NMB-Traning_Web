const Sequelize = require("sequelize")

const dbms = new Sequelize("training_node_js", "sa", "sa@admin",{
    servername : "MIC-IOT-11",
    timezone : 'utc+7',
    dialect : "mssql",
    dialectOptions : {
        options : {
            instanceName : "SQLEXPRESS",
            encrypt : false,
        },
    },
});

(async () => {
    await dbms.authenticate();
})();
module.exports = dbms;