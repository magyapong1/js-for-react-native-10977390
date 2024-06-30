/**
 * Creates user profiles based on input names and modified names.
 * @param {string[]} names - The input array of names.
 * @param {string[]} modifiedNames - The array of modified names.
 * @returns {Object[]} - An array of user profile objects.
 */
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
      originalName: name,
      modifiedName: modifiedNames[index],
      id: index + 1
    }));
  }
  
  // Example usage
  const names = ["John", "Jane", "Bob", "Alice", "Tom"];
  const modifiedNames = ["john", "JANE", "BOB", "ALICE", "TOM"];
  const userProfiles = createUserProfiles(names, modifiedNames);
  
  console.log(userProfiles);
  /*
  [
    { originalName: "John", modifiedName: "john", id: 1 },
    { originalName: "Jane", modifiedName: "JANE", id: 2 },
    { originalName: "Bob", modifiedName: "BOB", id: 3 },
    { originalName: "Alice", modifiedName: "ALICE", id: 4 },
    { originalName: "Tom", modifiedName: "TOM", id: 5 }
  ]
  */