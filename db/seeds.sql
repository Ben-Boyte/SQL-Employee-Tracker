INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Accounting'),
    ('Legal');

INSERT INTO role (title, salary)
VALUES
    ('Salesman', 70000),
    ('Software Engineer', 100000),
    ('Lead Engineer', 77000),
    ('Accountant', 37000),
    ('Manager', 50000),
    ('Team Lead', 47000),
    ('Lawyer', 230000);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
    ('Bob', 'Zeebarth', 'Manager'),
    ('Tommy', 'Hodsen', 'Software Engineer'),
    ('Toomb', 'Jungis', 'Lead Engineer'),
    ('Marie', 'Rinnotelli', 'Lawyer'),
    ('Hubert', 'Salad', 'Team Lead'),
    ('Tony', 'Soprano', 'Accountant'),
    ('Michael', 'Gianno', 'Lead Engineer'),
    ('Johnny', 'Bravo', 'Salesman');