describe("Header", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("should render container", () => {
    cy.get("header").should("exist");
  });
  
  it("should render logo img", () => {
    cy.get("header").find("img").should("exist");
  });


});