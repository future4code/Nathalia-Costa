#### Exercicio 01

**A.**
- Remover a coluna Salary.

**B.**
- Utilizado para renomear uma coluna.

**C.**
- Utilizado para alterar suas definições.


#### Exercicio 03

**A.**
``` UPDATE Actor
SET name = "Cleo Pirex" AND birth_date = "1980-10-02"
WHERE id = 003
```

**B.**

```UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Julina Paes"
```

```UPDATE Actor
SET name = "Julina Paes"
WHERE name = "JULIANA PÃES"
```

**C.**

```UPDATE Actor
SET name = 'Dira Paes' and  salary = '500000' and birth_date = '1969-06-30' and gender = 'female'
WHERE id = "005"
```

**D.**

```UPDATE Actor
SET idade = 25
WHERE id = "010"
```

*Error Code: 1054. Unknown column 'idade' in 'field list'

#### Exercicio 04

**A.**
*select max(salary) from Actor;

**B.**
*select min(salary) from Actor where gender = "female";

**C.**
*select count(*) from Actor where gender = "female";

**D.**
*select sum(salary) from Actor;

#### Exercicio 05

**A.**
- Ela consta e separa por grupo de informações iguais.

**B.**
- SELECT id, name FROM Actor ORDER BY name DESC;

**C.**
- SELECT * FROM Actor ORDER BY salary;

**D.**
- SELECT * FROM Actor ORDER BY salary DESC limit 3;

**E.**
```SELECT avg(salary), gender
FROM Actor
group by gender;
```
