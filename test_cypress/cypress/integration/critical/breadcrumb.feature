@critical
Feature: Test BreadCrumb

  Scenario Outline: Test BreadCrumb with <theme> theme
    Given an expected snapshot folder: "breadcrumb"
      And an ui <theme>
     When I visit the "Breadcrumb" page
      And I choose <theme>
     Then I compare with the expected breadcrumb snapshot

    Examples:
    | theme       |
    | "Welcome"   |
    | "default"   |
    | "Dark Core" |