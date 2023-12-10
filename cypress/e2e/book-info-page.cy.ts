describe("Book Info Page", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  it("Validate clicking on card navigate to book info page", () => {
    // Header with title should be visible
    cy.get("header").within(() => {
      cy.get(".title").contains("BooksReviews");
    });

    cy.get(".carousel-container")
      .eq(0)
      .within(() => {
        cy.get(".card").eq(0).click();
      });

    cy.wait(2000);
    // verfiy header is visibile and have book ID
    cy.get("header").should("be.visible").contains("Book ID");

    //verify book info
    cy.get(".book").contains("Title");
  });

  it("Validate back button takes back to books page", () => {
    // Header with title should be visible
    cy.get("header").within(() => {
      cy.get(".title").contains("BooksReviews");
    });

    cy.get(".carousel-container")
      .eq(0)
      .within(() => {
        cy.get(".card").eq(0).click();
      });

    cy.wait(2000);
    cy.get("header").within(() => {
      cy.get("button").click();
    });

    cy.wait(2000);
    cy.get("header").within(() => {
      cy.get(".title").contains("BooksReviews");
    });
  });
});
