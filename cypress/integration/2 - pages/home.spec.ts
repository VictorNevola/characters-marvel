describe("Home", () => {
  beforeEach(() => cy.visit("/"));

  it("Shoul title has render", () => {
    cy.get("[data-cy='title-page']")
      .should("be.visible")
      .and("have.text", " Personagens ");
  });

  it("Verify title change on search", () => {
    const elementSearch = cy.get("header div[data-cy='search']");
    const input = elementSearch.find("input");
    const termToSearch = "Luke Skywalker";

    input.type(termToSearch);
    cy.get("[data-cy='title-page']")
      .should("be.visible")
      .and("have.text", `Buscando por  ${termToSearch}`);

    elementSearch.get(`svg[data-cy="icon-close"]`).click();
  });
});
