describe("Home", () => {
  it("should banner render and verify image size", () => {
    cy.visit("/");
    cy.get("section[data-cy='banner-container']").should("exist");
    cy.get("section[data-cy='banner-container'] .image").invoke('width').should("be.lessThan", 1920);
  });
});
