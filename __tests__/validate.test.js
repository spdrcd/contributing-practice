const fs = require("fs");
const path = require("path");

describe("Validate the participant data", () => {
  test("File names are valid", () => {
    fs.readdirSync(path.join(path.dirname(__dirname), "participants")).forEach(
      (file) => {
        expect(file).toMatch(/^[a-zà-ÿ-]+\.md$/);
      }
    );
  });

  test("Contains both a first name and a last name", () => {
    fs.readdirSync(path.join(path.dirname(__dirname), "participants")).forEach(
      (file) => {
        expect(
          fs
            .readFileSync(
              path.join(path.dirname(__dirname), "participants", file)
            )
            .toString("utf-8")
            .trim()
        ).toContain(" ");
      }
    );
  });

  test("Name ends with an exclamation point", () => {
    fs.readdirSync(path.join(path.dirname(__dirname), "participants")).forEach(
      (file) => {
        expect(
          fs
            .readFileSync(
              path.join(path.dirname(__dirname), "participants", file)
            )
            .toString("utf-8")
            .trim()
        ).toMatch(/[!]$/);
      }
    );
  });
});
