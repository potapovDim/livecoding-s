const fakeServer = require('test-fake-server')

const modelAdmin = {
  port: 8081,
  api: [
    {
      method: "GET",
      path: "/admin-user-details",
      response_from_url: {
        status: 201,
        method: "GET",
        url: "http://localhost:8888/user-data",
        merge_with: {
          admin: {
            userType: 'customer'
          }
        }
      }
    },
    {
      method: "GET",
      path: '/admin-user-list',
      response: {
        userInitial: 'admin',
        userFirst: 'ivan',
        userSecond: 'petro'
      }
    }
  ]
}

const modelUser = {
  port: 8888,
  api: [
    {
      method: "GET",
      path: "/user-data",
      response: {
        username: "some username",
        postal_code: 3212654
      }
    },
    {
      method: "POST",
      path: "/user-login",

      response: {
        authorization: 'success'
      },

      request_body_equal: {
        status: 404,
        not_equal_response:
        {
          authorization: 'fail'
        },
        expected_body:
        {
          username: "test_user",
          password: "test_pass"
        }
      },
    }
  ]
}

async function startFakeServices() {
  await fakeServer(modelAdmin);
  await fakeServer(modelUser);
}

startFakeServices()

/*

fetch('http://localhost:8888/user-login', {
  method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify({
    username: "test_user",
    password: "test_pass"
  })
}).then(r => r.text()).then(console.log)

*/