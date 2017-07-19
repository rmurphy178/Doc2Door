## Component Hierarchy

**Bolded** components are associated with routes.

* **AuthFormContainer**
    * AuthForm

* **App**
  * **LoginUser**
    * LoginForm (link to create new user)
      * **NewUser**
        * SignUpForm
    * **AppointmentIndex**
      * NavBar
        * LogOut
      * SearchBar
      * DisplayAppointmentCategories
    * **AppointmentDetail**
      * NewAppointmentForm
      * AppointmentDetailForm
        * DoctorList
          * DisplayReferences
      * BookingForm
      * DisplayReferences
