# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
zip_code        | string    | not null
first_name      | string    | not null
last_name       | string    | not null

## appointments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed
description | text      | not null
location    | text      | not null


## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
appt_id     | integer   | not null, foreign key (references appointments), indexed
doctor_id   | integer   | not null, foreign key (references doctors), indexed
rating      | integer   | not null, indexed

## doctors
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
email       | string    | not null, indexed, unique
zip_code    | string    | not null
rating      | integer   |

## appt_requests 
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
doctor_id   | integer   | not null, foreign key (references doctors), indexed
appt_id     | integer   | not null, foreign key (references appointments), indexed
