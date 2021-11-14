DELETE FROM department;
DELETE FROM role;
DELETE FROM employee;

INSERT INTO department (name)
VALUES
  ('technical'),
  ('accounting'),
  ('sales');

INSERT INTO role (title, salary)
VALUES
  ('Lead Engineer', 150000),
  ('Accountant', 100000),
  ('Salesperson', 90000);

INSERT INTO employee (first_name, last_name)
VALUES 
  ('John', 'Sample'),
  ('Jill', 'Test'),
  ('Joe', 'Schmoe');
