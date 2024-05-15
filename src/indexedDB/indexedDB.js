const request = indexedDB.open("vanilla-ja", 1);

request.onerror = (event) => {
  console.error(event);
};

export const createData = (tableName, data) => {
  const db = request.result;

  console.log(db);
  const objectStore = db.createObjectStore(tableName, { keyPath: "ssn" });
  console.log(objectStore);
  //store.add(data);
};
