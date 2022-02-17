describe("Header", () => {
  
  it('successfully loads', () => {
    cy.visit('/')
  });

  it("should render container", () => {
    cy.get("header").should("exist");
  });
  
  it("should render logo img", () => {
    cy.get("header img[data-cy='logo']").should("exist");
  });

  it("shloud render input search", () => {
    cy.get("header div[data-cy='search']").should("exist");
  });

  it("Handler search Validation before input text", () => {
    const elementSearch = cy.get("header div[data-cy='search']");

    elementSearch.find("input").should("have.attr", "placeholder", "Busque pelo seu herói");
    elementSearch.get(`svg[data-cy="icon-search"]`).should("exist");
    elementSearch.get(`svg[data-cy="icon-close"]`).should("not.exist");
  });

  it("Handler search Validation after input text", () => {
    const elementSearch = cy.get("header div[data-cy='search']");
    const input = elementSearch.find("input");

    input.type("Batman");
    input.should("have.value", "Batman");
    input.invoke("val").its("length").should("eq", 6);	
    elementSearch.get(`svg[data-cy="icon-search"]`).should("not.exist");
    elementSearch.get(`svg[data-cy="icon-close"]`).should("exist");
  });

  it("Handler search Validation after input text and click on icon close", () => {
    const elementSearch = cy.get("header div[data-cy='search']");

    elementSearch.get(`svg[data-cy="icon-close"]`).click();
    elementSearch.get(`svg[data-cy="icon-search"]`).should("exist");
    elementSearch.get(`svg[data-cy="icon-close"]`).should("not.exist");
    
    cy.get("header div[data-cy='search'] > input").invoke("val").its("length").should("eq", 0);
    cy.get("header div[data-cy='search'] > input").should("have.value", '');
  });

  it("Handler btns toggle theme", () => {

    cy.get("header button[data-cy='btn-change-to-dark']").should("exist");
    cy.get("header").should("have.css", 'background-color',  "rgb(255, 255, 255)");
    cy.get("body").should("have.css", 'background-color',  "rgb(242, 242, 242)");
    cy.get("header button[data-cy='btn-change-to-dark']").click();

    cy.get("header button[data-cy='btn-change-to-light']").should("exist");
    cy.get("header").should("have.css", 'background-color',  "rgba(0, 0, 0, 0.66)");
    cy.get("body").should("have.css", 'background-color',  "rgb(41, 41, 41)");

  });

});