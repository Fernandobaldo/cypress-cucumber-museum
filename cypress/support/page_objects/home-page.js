
class HomePage {


    go() {
        cy.visit('https://www.vangoghmuseum.nl/nl')
        cy.viewport(1024, 768)

    }


    searchBtn() {
        return cy.contains('Kunst & Verhalen')
    }

    searchBtn2() {
        return cy.contains('Zoek in de collectie')
    }

    acceptCookie() {
        return cy.get('section').contains('Akkoord')
    }

    typePaintingName() {
        return cy.get('input[placeholder="Zoek een kunstwerk"]')
    }

    searchPainting() {
        return cy.get('.search-field-search-button')

    }


    selectPainting() {
        return cy.get('[aria-posinset="1"]')
    }

    validatingPainting() {
        cy.contains("Objectgegevens").click().then(() => {
            cy.get(':nth-child(1) > .definition-list-item-value').invoke('text').as('fNummer')
            cy.get(':nth-child(2) > .definition-list-item-value').invoke('text').as('jhNummer')
            cy.get(':nth-child(3) > .definition-list-item-value').invoke('text').as('inventarisNummer')
        })
    }


}


export default new HomePage()