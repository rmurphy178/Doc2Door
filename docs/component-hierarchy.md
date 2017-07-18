##Component Hierarchy

**AuthFormContainer**
- AuthForm

**HomeContainer**
- HomeView
- TopNav
- SearchContainer
- SearchBar
- SearchResults

**AppointmentContainer**
- AppointmentDetailForm
- SelectDoctorForm
- BookAppointmentForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthContainer" |
| "/login" | "AuthContainer" |
| "/" | "HomeContainer" |
| "/profile" | "ProfileContainer" |
| "/profile/edit" | "ProfileEditFormContainer" |
| "/appointments" | "AppointmentsIndexContainer" |
| "/appointments/:id" | "AppointmentContainer" |
| "/appointments/:id/detail" | "AppointmentDetailContainer" |
| "/appointments/:id/request" | "AppointmentRequestFormContainer" |
| "/appointments/:id/:request_id" | "AppointmentRequestContainer" |
| "/doctors" | "DoctorsIndexContainer" |
| "/doctors/:id" | "DoctorsContainer"
