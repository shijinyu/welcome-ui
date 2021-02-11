@critical
Feature: Test Button

  Scenario Outline: Test formats button with <theme> theme and <format> format
    Given an expected snapshot folder: "button"
      And an ui <theme>
      And a format button <format>
     When I visit the "Button" page
      And I choose <theme>
     Then I compare with the expected format button snapshot

    Examples:
      | theme        | format   |
      | "Welcome"    | "tiny"   |
      | "Welcome"    | "small"  |
      | "Welcome"    | "medium" |
      | "Welcome"    | "large"  |
      | "Welcome"    | "xlarge" |
      | "default"    | "tiny"   |
      | "default"    | "small"  |
      | "default"    | "medium" |
      | "default"    | "large"  |
      | "default"    | "xlarge" |
      | "Dark Core"  | "tiny"   |
      | "Dark Core"  | "small"  |
      | "Dark Core"  | "medium" |
      | "Dark Core"  | "large"  |
      | "Dark Core"  | "xlarge" |

