Feature: Assignment for Gerimedica

    Scenario: scenario 1
        Given I access to home page
        Then navigate to collection page
        
Scenario: scenario 2
        Given I access to home page
        When navigate to collection page
        Then I search for a painting
            | paintingName | Het Gele Huis |
        And Should return more than "700" result


Scenario: scenario 3
        Given I access to home page
        And navigate to collection page
        When I search for a painting
            | paintingName | Het Gele Huis |
        Then Should return more than "700" result
        And I pick the first painting
        And I validate the painting info
            | Fnummer          | F0464      |
            | JHnummer         | JH1589     |
            | Inventarisnummer | s0032V1962 |
