
// Case 1
        // describe("Filter function", () => {
        //     test("it should filter by a search term (link)", () => {
        //       const input = [
        //         { id: 1, url: "https://www.url1.dev" },
        //         { id: 2, url: "https://www.url2.dev" },
        //         { id: 3, url: "https://www.link3.dev" }
        //       ];
        
        //       const output = [{ id: 3, url: "https://www.link3.dev" }];
        
        //       expect(filterByTerm(input, "link")).toEqual(output);
        
        //     });
        //   });

// Case 2
        // function filterByTerm(inputArr, searchTerm) {
        //     return inputArr.filter(function(arrayElement) {
        //       return arrayElement.url.match(searchTerm);
        //     });
        //   }
        
        //   describe("Filter function", () => {
        //     test("it should filter by a search term (link)", () => {
        //       const input = [
        //         { id: 1, url: "https://www.url1.dev" },
        //         { id: 2, url: "https://www.url2.dev" },
        //         { id: 3, url: "https://www.link3.dev" }
        //       ];
        
        //       const output = [{ id: 3, url: "https://www.link3.dev" }];
        
        //       expect(filterByTerm(input, "link")).toEqual(output);
        //     });
        //   });

// Case 3
        // function filterByTerm(inputArr, searchTerm) {
        //     return inputArr.filter(function(arrayElement) {
        //       return arrayElement.url.match(searchTerm);
        //     });
        //   }
        
        //   describe("Filter function", () => {
        //     test("it should filter by a search term (link)", () => {
        //       const input = [
        //         { id: 1, url: "https://www.url1.dev" },
        //         { id: 2, url: "https://www.url2.dev" },
        //         { id: 3, url: "https://www.link3.dev" }
        //       ];
        
        //       const output = [{ id: 3, url: "https://www.link3.dev" }];
        
        //       expect(filterByTerm(input, "link")).toEqual(output);
        
        //       expect(filterByTerm(input, "LINK")).toEqual(output); // New test
        
        //     });
        //   });

// Case 4
const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
      ];
  
      const output = [{ id: 3, url: "https://www.link3.dev" }];
  
      expect(filterByTerm(input, "link")).toEqual(output);
  
      expect(filterByTerm(input, "LINK")).toEqual(output);
    });
  });
