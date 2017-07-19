# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
zip_code        | integer   | not null
first_name      | string    | not null
last_name       | string    | not null
appointments    | array     |
reviews         | array     |

## appointments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, indexed
doctor_id   | integer   | not null, indexed
location    | string    | not null
time        | string    | not null
confirmed   | boolean   | not null


## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
doctor_id   | integer   | not null, foreign key (references doctors), indexed
rating      | integer   | not null, indexed
body        | text      | not null

## doctors
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
image_url   | string    | not null
rating      | integer   |
reviews     | array     |
appointments| array     |
