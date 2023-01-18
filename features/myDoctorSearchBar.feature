Feature: Search Bar

    @SEBA001 @Regression @MYD-40 @NotAutomated @Patient @Search
    # Scenario Outline: Search Bar - Check for the search functionality for doctors
    #     Given user is on the "home" page
    #      When user enters the "<Data>" in the "search bar" input field
    #     And user clicks on the "search icon"
    #     Then corresponding page appears with the expected "doctor cart": "<Item>"
    #     Examples:
    #         | Data    | Item                                     |
    #         | Rishika | Dr. Rishika                              |
    #         | Ra      | Dr. Laurianne Grady,Dr. Nikolas Franecki |

    # # # #     ## @SEBA002 @Regression @MYD-40 @NotAutomated @Patient @Specialities @Search
    Scenario Outline: Search Bar - Check for the search functionality for specialities
          Given user is on the "home" page
        When user clicks on the "specialities field"
        And user enters the "<value>" in the "specialities field" input field
        # And user clicks on the "search icon"
        # Then corresponding page appears with the expected "doctor carts": "<Item>"
        Examples:
            | value  | Item                                                                      |
            | Dental | Dr. Leland Gutkowski,Dr. Kiana Schoen,Dr. Monserrate Kihn,Dr. Ambrose Quigley |

    # # # # #     # ## @SEBA003 @Regression @Sanity @MYD-40 @NotAutomated @Patient @Specialities @Search
    #     Scenario Outline: Search Bar - Check for the search functionality for doctors and specialities
    #          Given user is on the "home" page
    #         And user enters the "<value>" in the "specialities field" input field
    #        And user enters the "<Data>" in the "search bar" input field
    #         And user clicks on the "search icon"
    #         Then corresponding page appears with the expected "doctor carts": "<Item>"

    #         Examples:
    #             | value       | Data    | Item                  |
    #             | Dental      | Antone  | Dr. Antone Mertz      |
    #         #     | Diabetology | Benjamin | Dr. Benjamin Cremin |

    # # # #     # # # #@SEBA004 @Regression @MYD-40 @NotAutomated @Patient @Search
    # Scenario Outline: Search Bar - Check for the search functionality with invalid doctor name
    #     Given user is on the "home" page
    #     When user enters the "<Data>" in the "search bar" input field
    #     And user clicks on the "search icon"
    #     Then corresponding page appears with the expected "no results message": "<message>"


    #     Examples:
    #         | Data      | message              |
    #         | Rish123@# | No results found for |

# # @SEBA005 @Regression @MYD-40 @NotAutomated @Patient @Specialities @Search
# Scenario Outline: Search Bar - Check for the search functionality with invalid specialities
#      Given user is on the "home" page
#    And user enters the "<value>" in the "specialities field" input field
#     Then user can view message "No options"

#     Examples:
#         | value    |
#         | 1245@#$% |

