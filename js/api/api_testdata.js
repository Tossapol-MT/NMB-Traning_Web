//Reference
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const dbms = require("../instance/instance_test");

router.post("/show", async (req, res) => {
    try {
        let result = await dbms.query(
            ` SELECT TOP (100) [crad_id]
            ,[frist_name]
            ,[last_name]
            ,[phone]
            ,[age]
            ,[weight]
            ,[height]
        FROM [test_node_js].[dbo].[data_employee]`
    );
        res.json({ result: result[0], message: result[1], api_result: "ok" });
    } catch (error) {
    console.log(error);
    res.json({ error, api_result: "ng" });
  }
});

router.post("/test_post", async (req, res) =>{
    console.log(req.body);
    console.log(req.body.card_id);
    console.log(req.body.first_name)
  
    res.json({result : "ok"})
  })

  router.post("/new_data", async (req, res) => {
    try {
      let result = await dbms.query(
        ` INSERT INTO [test_node_js].[dbo].[data_employee]
        ([crad_id],[frist_name]
        ,[last_name],[phone]
        ,[age],[weight]
        ,[height])
          VALUES
        ('${req.body.crad_id}','${req.body.frist_name}'
        ,'${req.body.last_name}','${req.body.phone}'
        ,'${req.body.age}','${req.body.weight}'
        ,'${req.body.height}')`
      );
      res.json({ result:result[0], message:result[1], api_result : "OK"});
    } catch (error) {
      console.log(error)
      res.json({error, api_result:"ng"});
    }
  })

  router.post("/change_age", async (req, res) => {
    try {
      let result = await dbms.query(
        ` UPDATE [test_node_js].[dbo].[data_employee]
        SET [age] = '${req.body.age}'
        WHERE [crad_id] = '${req.body.crad_id}' 
        `
      );
      res.json({result:result[0], message:result[1], api_result:"ok"})
    }catch (error){
      console.log(error)
      res.json({ error, api_result:"np"})
    }
  })

  router.post("/delete_data", async (req, res) => {
    try {
      let result = await dbms.query(
        ` DELETE FROM [test_node_js].[dbo].[data_employee]
        WHERE [crad_id] = '${req.body.crad_id}' 
        `
      );
      res.json({result:result[0], message:result[1], api_result:"ok"})
    }catch (error){
      console.log(error)
      res.json({ error, api_result:"np"})
    }
  })


module.exports = router;

