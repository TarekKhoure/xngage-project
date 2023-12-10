describe("Books Page", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  it("Validate All Books Categories visible", () => {
    // Header with title should be visible
    cy.get("header").within(() => {
      cy.get(".title").contains("BooksReviews");
    });

    cy.get(".carousel-container").should("have.length", 4);
  });

  it("Validate Search", () => {
    // Header with title should be visible
    cy.get("header").within(() => {
      if (cy.config("viewportWidth") > 1160) {
        cy.get("#header-search-icon").click();
      } else {
        cy.get("#menu-toggle-button").click();
        cy.wait(1000);
        cy.get("#header-search-icon").click();
      }
    });

    cy.get(".category-search-wrapper")
      .should("be.visible")
      .within(() => {
        cy.wait(1000);
        cy.get("#search-field").type("ae");
        cy.wait(2000);
        cy.get(".card").should("have.length", 3);
      });
  });

  it("Validate Book info page", () => {
    // Header with title should be visible
    cy.get("header").within(() => {
      cy.get(".title").contains("BooksReviews");
    });

    cy.get(".carousel-container").should("have.length", 4);
  });
});
