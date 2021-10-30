const preB = require('./db/connections');

const queries = { 
allDepts: async function () {
    const db = await preB;  
    const [results, fields] = await db.execute('SELECT * FROM department');
    console.table(results);
    return results
  
},

retDepts: async function () {
    const db = await preB;  
    const [results, fields] = await db.execute('SELECT * FROM department');
    return results;
  
},

allRoles: async function () {
    const db = await preB;
    const [results, fields] = await db.execute('SELECT * FROM role');
    console.table(results);
    return results;
},

retRoles: async function () {
    const db = await preB;
    const [results, fields] = await db.execute('SELECT * FROM role');
    return results;
},

allEmployees: async function () {
    const db = await preB;
    const [results, fields] = await db.execute('SELECT * FROM employee');
    console.table(results);
    return results;
},

retEmployees: async function () {
    const db = await preB;
    const [results, fields] = await db.execute('SELECT * FROM employee');
    return results;
},

