Feature: Discover Page

    Scenario: Rendering the discover page
        Given The app has a discover page
        When I view the discover page with discover container
        Then The discover page should be viewable