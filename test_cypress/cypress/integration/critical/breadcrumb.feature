@critical
Feature: Test BreadCrumb

  Scenario Outline: Test BreadCrumb - <theme>
    Given an expected snapshot folder: "breadcrumb"
      And an ui <theme>
     When I visit the "Breadcrumb" page
      And I choose <theme>
     Then I compare with the expected snapshot

    Examples:
    | theme             |
    | "Welcome Theme"   |
    | "default"         |
    | "Dark Core Theme" |