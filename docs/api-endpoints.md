# API Endpoints

## Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Tasks

- `GET /api/specialties`
  - specialty search and index
  - accepts `description/title` text to search specialties in database
- `POST /api/specialties`
- `GET /api/specialties/:id`
- `PATCH /api/specialties/:id`
- `DELETE /api/specialties/:id`
- `GET /api/specialties/:id/review`

### Doctors

- `GET /api/doctors`
- `POST /api/doctors`
- `GET /api/doctors/:id`
- `DELETE /api/doctors/:id`


### Bonus

- `GET /api/doctors/:id/reviews`
  - look up all reviews for a given tasker
- `GET /api/users/:id/reviews`
  - Find all the reviews posted by a user
