//Reference
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const dbms = require("../instance/instance");

router.post("/top_100", async (req, res) => {
  try {
    let result = await dbms.query(
      `SELECT TOP (100) [emp_id]
      ,[first_name]
      ,[last_name]
      ,[email]
      ,[phone]
      ,[hire_date]
      ,[job_id]
      ,[salary]
      ,[manager_id]
      ,[dept_id]
  FROM [training_node_js].[dbo].[employee]`
    );
    res.json({ result: result[0], message: result[1], api_result: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ error, api_result: "ng" });
  }
});

router.post("/test_post", async (req, res) =>{
  console.log(req.body);
  console.log(req.body.emp_id);
  console.log(req.body.first_name)

  res.json({result : "ok"})
})

router.post("/new_emp", async (req, res) => {
  try {
    let result = await dbms.query(
      ` INSERT INTO [training_node_js].[dbo].[employee]
      ([emp_id],[first_name]
      ,[last_name],[email]
      ,[phone],[hire_date]
      ,[job_id],[salary]
      ,[manager_id],[dept_id])
        VALUES
      ('${req.body.emp_id}','${req.body.first_name}'
      ,'${req.body.last_name}','${req.body.email}'
      ,'${req.body.phone}','${req.body.hire_date}'
      ,'${req.body.job_id}','${req.body.salary}'
      ,'${req.body.manager_id}','${req.body.dept_id}')`
    );
    res.json({ result:result[0], message:result[1], api_result : "OK"});
  } catch (error) {
    console.log(error)
    res.json({error, api_result:"ng"});
  }
})
router.post("/change_salary", async (req, res) => {
  try {
    let result = await dbms.query(
      ` UPDATE [training_node_js].[dbo].[employee]
      SET [salary] = '${req.body.salary}'
      WHERE [emp_id] = '${req.body.emp_id}' 
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
      ` DELETE FROM [training_node_js].[dbo].[employee]
      WHERE [emp_id] = '${req.body.emp_id}' 
      `
    );
    res.json({result:result[0], message:result[1], api_result:"ok"})
  }catch (error){
    console.log(error)
    res.json({ error, api_result:"np"})
  }
})

router.post("/salary_group", async (req, res) =>{
  try {
    let result = await dbms.query(
      `with tb1 as (
        SELECT [emp_id]
        ,[salary]
        ,CASE
          when [salary] between 0 and 5000 then '5-10k'
          when [salary] between 5001 and 10000 then '10-15k'
          when [salary] between 10001 and 20000 then '15-20k'
          when [salary] between 20001 and 25000 then '20-25k'
            else 'over' end as salary_range
          FROM [training_node_js].[dbo].[employee]
          )
        select salary_range
        ,count(salary_range) as qty
        from tb1
        group by salary_range
        order by count(salary_range) desc
        `
      );
      res.json({result:result[0], message:result[1], api_result:"ok"});
  } catch (error) {
    console.log(error)
    res.json({error, api_result:"ng"});
  }
});

module.exports = router;
