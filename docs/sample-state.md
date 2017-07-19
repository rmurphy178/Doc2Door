``` Javascript
{
  session: {
    current_user: {
      id: 1
      name: "Elmo"
    }
    errors: []
  }

  users: {
    1: {
      id: 1
      firstname: "Elmo",
      lastname: "Jones",
      email: "email@aol.com",
      phone: 800-111-2222,
      zip: 12345,
      img_url: 23,
      doctor_id: null

    }
    errors: []
  }

  current_user: {
    id: 1
  }

  appointments: {
    1: {
      id: 1,
      user_id: 2,
      location: '160 Spear St, San Francisco, CA 94105',
      description: 'reason for request',
      category: 'Endocrinology',
      date: '09/10/2017',
      status: "confirmed",
      doctor_id: 3
    }
  }

  reviews: {
    1: {
      id: 1,
      appointment_id: 1,
      comments: "awesome"
    }
    errors: []
  }
}
```
