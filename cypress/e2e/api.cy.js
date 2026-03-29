/// <reference types="cypress" />

describe('API Tests - ReqRes', () => {
  const baseUrl = 'https://reqres.in/api'

  it('GET /users - should return list of users', () => {
    cy.request('GET', `${baseUrl}/users?page=1`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.be.an('array')
    })
  })

  it('GET /users/:id - should return single user', () => {
    cy.request('GET', `${baseUrl}/users/2`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data).to.have.property('id', 2)
    })
  })

  it('POST /users - should create a new user', () => {
    const newUser = { name: 'Mateus QA', job: 'Senior QA Engineer' }
    cy.request('POST', `${baseUrl}/users`, newUser).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('name', 'Mateus QA')
    })
  })

  it('DELETE /users/:id - should delete a user', () => {
    cy.request('DELETE', `${baseUrl}/users/2`).then((response) => {
      expect(response.status).to.eq(204)
    })
  })
})
