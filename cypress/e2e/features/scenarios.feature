Feature: test 1

    Scenario: default search
        Given I access to home page
        When navigate to collection page
        Then I search for a painting
            | paintingName | Het Gele Huis |
        And I pick the first painting
        And I validate the painting info
            | Fnummer          | F0464      |
            | JHnummer         | JH1589     |
            | Inventarisnummer | s0032V1962 |
