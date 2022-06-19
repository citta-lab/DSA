# Basic SQL

## 1. Not Equal (`<>`)
```sql
SELECT first_name, last_name 
FROM `actor` 
WHERE first_name <> 'PENELOPE';
```

## 2. Not In (`doesnt include mentioned names`)
```sql
SELECT first_name, last_name 
FROM `actor` 
WHERE first_name NOT IN ('PENELOPE', 'NICK', 'ED');
```

## 3. Letter Matching (`include any char at _`)
```sql
SELECT first_name, last_name 
FROM `actor` 
WHERE first_name 
LIKE 'JA_NE' /* returns JAYNE but it doesnt return JANE, for that we need to use % */
```

## 4. Convert Name (`CapsAndSmall`)
```sql
SELECT CONCAT(
    LEFT(first_name, 1),
    LOWER(RIGHT(first_name, LENGTH(first_name)-1)))
FROM `actor` 
```

## 5. Remove Letter/Word from start 
```sql
SELECT description as original,                 /** has like 'A person ...' */
TRIM(LEADING 'A ' from description) as changed  /** prints as 'person ...' */
FROM 
`film_text`;
```

## 6 Date / Time extraction
### 6.1 get all data for a year 
```sql
SELECT * FROM `address` 
WHERE
YEAR(last_update) = 2006            /** YEAR : gives all data for year 2006 */ 
```

### 6.2 get all data for a DATE 
```sql
SELECT * FROM `address` 
WHERE
DATE(last_update) = '2006-02-15'             /** DATE : gives all data for a given DATE */
```

### 6.3 format DATE
```sql
SELECT DATE_FORMAT(last_update, '%m-%d-%Y')    /** DATE_FORMAT : 06-23-2006 */
FROM `address` 
```
OR

```sql 
SELECT DATE_FORMAT(last_update, '%Y, %M-%d')  /** DATE_FORMAT: 2006, August-15 */   
FROM `address` 
```

# GROUP BY
## 1. WHERE/GROUP/ORDER
```sql
SELECT district, count(*) AS ct
FROM address 
WHERE address_id < 10               /** cant filter on `ct` in where clause */

GROUP BY district
ORDER BY ct DESC;
```
Hint:  
- we cant use filter on GROUPED content with WHERE
- example: we cant do `WHERE ct < 10`. for this we need `HAVING`

## 2. WHERE/GROUP-HAVING/ORDER

### 2.1 Example 1: 
In this part we will add filter on GROUPED column using `HAVING`.
```sql
SELECT district, count(*) AS ct
FROM address 
WHERE district LIKE '%B%'        /** any district which contains B in it */

GROUP BY district
HAVING ct > 8
ORDER BY ct DESC;
```

### 2.2 Example 2:
```sql
SELECT rating, count(rental_rate) as ct 
FROM film 

GROUP BY rating
HAVING ct >= 195
ORDER BY ct DESC
```

# JOINS 

## 1. INNER JOIN
### 1.1 Question : Return all customers whoes address belong to district 'Buenos Aires'?
Hint : Customer table has address_id, address table has district column. 
Link: https://demo.phpmyadmin.net/master-config/index.php?route=/table/sql&db=sakila&table=customer 

Attempt 1 ( without joins ):
```sql
/* 1 Select all custsomer where they belong to Texas district */

SELECT * 
FROM customer 
where address_id IN 
( SELECT address_id
FROM address 
WHERE district = 'Buenos Aires' );
```

Attempt 2 ( with joins ):
```sql 
SELECT * 
FROM customer c JOIN address a 
ON c.address_id = a.address_id

WHERE a.district = 'Buenos Aires'

```