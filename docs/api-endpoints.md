# API Endpoints

## Root

- `GET /` - loads React

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/`

### Session

- `POST /api/session`
  - log in user
- `DELETE /api/session`
  - log out user
### Appointments

- `GET /api/appointments`
- `POST /api/appointments`
- `GET /api/appointments/:id`
- `PATCH /api/appointments/:id`
- `DELETE /api/appointments/:id`
- `GET /api/appointments/:id/review`

### Doctors

- `GET /api/doctors`
- `POST /api/doctors`
- `GET /api/doctors/:id`
- `DELETE /api/doctors/:id`


### Bonus

- `GET /api/doctors/:id/reviews`
  - look up all reviews for a given doctor
- `GET /api/users/:id/reviews`
  - Find all the reviews posted by a user
