# API Endpoints

## Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Appointment (References users table and doctors table)

- `GET /api/appointments`
- `POST /api/appointments`
- `GET /api/appointments/:id`
- `PATCH /api/appointments/:id`
- `DELETE /api/appointments/:id`


### Doctors

- `GET /api/doctors`
- `POST /api/doctors`
- `GET /api/doctors/:id`
- `DELETE /api/doctors/:id`


### Bonus: Reviews (References users table and doctors table)

- `GET /api/reviews`
- `GET /api/reviews/:id`
- `GET /api/reviews/users/:id`
  - Find all the reviews posted by a user
- `GET /api/reviews/doctors/:id`
  - Find all the reviews for a doctor
