module.exports = {
    functions: {
      api: {
        // This is the name of your serverless function
        handler: 'src/app.handler',
        events: [
          {
            http: {
                method: 'ANY',
                path: '/(.*)'
            },
          },
          {
            http: {
              method: 'GET',
              path: '/api/v1/emp/employees',
            },
          },
          {
            http: {
              method: 'GET',
              path: '/api/v1/emp/employees/{id}',
            },
          },
          {
            http: {
                method: 'POST',
                path: '/api/v1/emp/employee'
            },
          },
          {
            http: {
                method: 'PUT',
                path: '/api/v1/emp/employee/{id}'
            },
          },
          {
            http: {
                method: 'DELETE',
                path: '/api/v1/emp/employee/{id]'
            },
          },
          {
            http: {
                method: 'POST',
                path: '/api/v1/user/login'
            },
          },
          {
            http: {
                method: 'POST',
                path: '/api/v1/user/signup'
            },
          },
        ],
      },
    },
  };