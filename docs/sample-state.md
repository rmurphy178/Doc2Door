```js
{
  session: {
    currentUser: 1,
    firstName: "Ryan",
    errors: []
  }

  users: {
    byId: {
      1: {
        id: 1,
        fistName: "Ryan",
        lastName: "Murphy",
        email: "ryanmurphy222@gmail.com",
        password_digest: "string"
        session_token: "string",
        zipCode: 94105,
        appointments: [1, 3, 5],
        reviews: [1, 3]
      }
    }
    userDetail: 1
  }



  doctors: {
    byId: {
      2: {
        id: 2,
        firstName: 'Dr. Sean',
        lastName: 'Byers'
        image_url: 'image_url',
        reviews: [2, 3],
        appointments: [2, 3, 8]
      }
      doctor_detail: 2
    }
  }


  appointments: {
    byId: {
      3: {
        id: 1
        user_id: 1,
        doctor_id: 2,
        date: 10/10/2017,
        location : '160 Spear St, San Francisco 94105'
        time: 'morning',
        confirmed: true
      }
    }
  }

  reviews: {
    byId: {
      3: {
        id: 3,
        user_id: 1,
        doctor_id: 2,
        text: "Dr. Byers..."
      }
    }
  }
}
```
