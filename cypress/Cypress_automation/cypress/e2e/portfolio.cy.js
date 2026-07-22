describe("Portfolio Website Tests", () => {
  describe("Test 1: Website Load & Title Check", () => {
    it("should load the homepage and verify the title", () => {
      cy.title().should("eq", "Uzair Ali | Software Engineer Portfolio");
    });
  });

  describe("Test 2: Navbar Navigation", () => {
    it("should navigate to About section", () => {
      cy.contains("a", "About").click();
      // Verify the About section is scrolled into view
      cy.get("#about").should("be.visible");
    });

    it("should navigate to Projects section", () => {
      cy.contains("a", "Projects").click();
      cy.get("#projects").should("be.visible");
    });

    it("should navigate to Contact section", () => {
      cy.contains("a", "Contact").click();
      cy.get("#contact").should("be.visible");
    });
  });

  describe("Test 3: Contact Form Validation", () => {
    it("should fill form with valid data and verify form fields are populated", () => {
      cy.contains("a", "Contact").click();
      cy.fillContactForm(
        "John Doe",
        "john.doe@example.com",
        "Project Inquiry",
        "Hello, I'd like to discuss a project!"
      );
      // Verify the form fields are correctly filled
      cy.get("#name").should("have.value", "John Doe");
      cy.get("#email").should("have.value", "john.doe@example.com");
      cy.get("#subject").should("have.value", "Project Inquiry");
      cy.get("#message").should("have.value", "Hello, I'd like to discuss a project!");
    });

    it("should handle invalid email input", () => {
      cy.contains("a", "Contact").click();
      cy.get("#email").type("invalid-email");
      // Verify invalid email is entered (basic negative assertion)
      cy.get("#email").should("have.value", "invalid-email");
    });
  });
});
