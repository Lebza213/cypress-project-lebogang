/**
 * Test Case: 
 * Perform an API request to produce a list of all dog breeds. (Diagram 1)
 * Using code, verify “retriever” breed is within the list. (Diagram 2)
 * Perform an API request to produce a list of sub-breeds for “retriever”. (Diagram 3)
 * Perform an API request to produce a random image / link for the sub-breed “golden” (Diagram 4)
 */

 describe('Task 1 - API: Test Case', () => {

    it('Get all dog breeds. (Diagram 1)', () => {

        cy.request({
            method: 'GET',
            url: 'https://dog.ceo/api/breeds/list/all'
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res).to.have.property('headers')
            expect(res).to.have.property('duration')
            cy.writeFile('cypress/fixtures/dogBreed.json', res.body) //Write the response to a file 

        })
    })

    it('Verify “retriever” breed is within the list. (Diagram 2)', () => {

        cy.request({
            method: 'GET',
            url: 'https://dog.ceo/api/breeds/list/all'
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.be.null
            expect(res.body.message).to.not.be.null
            expect(res.body.message).to.have.property('retriever')

        })
    })

    it('Perform an API request to produce a list of sub-breeds for “retriever”. (Diagram 3)', () => {

        cy.request({
            method: 'GET',
            url: 'https://dog.ceo/api/breed/retriever/list'
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.be.null
            cy.writeFile('cypress/fixtures/retriever.json', res.body) //Write the response to a file 
            
        })
    })

    it('Perform an API request to produce a random image / link for the sub-breed “golden” (Diagram 4)', () => {

        cy.request({
            method: 'GET',
            url: 'https://dog.ceo/api/breed/retriever/golden/images/random/'
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.be.null
            cy.writeFile('cypress/fixtures/randomImage.json', res.body) //Write the response to a file 
         

        })
    })

 })