INSERT INTO department (name) 
VALUES 
      ("Human Resources"),
      ("Marketing"),
      ("Information Technology"),
      ("Corporate");

INSERT INTO role (title, salary, department_id) 
VALUES 
      ("Analyst", 70000.00, 3),
      ("Communications Associate", 50000.00, 2),
      ("Social Media Manager", 50000.00, 2),
      ("Director", 100000.00, 1),
      ("Director", 100000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
      ("David", "Lyon", 2, NULL),
      ("Rebecca", "Dong", 1, 2),
      ("Milo", "Ault", 3, 2),
      ("Ash", "Ketchum", 4, 7),
      ("Sleepy", "T", 5, NULL);