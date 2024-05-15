import Dexie from "dexie";

/*let db;

const openDatabase = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("vanilla-ja", 1);

    request.onerror = (event) => {
      console.error("Database error: ", event);
      reject(event);
    };

    request.onupgradeneeded = (event) => {
      db = event.target.result;

      if (!db.objectStoreNames.contains("planets")) {
        const planetStore = db.createObjectStore("planets", { keyPath: "id" });
        planetStore.index("page", "page", { unique: false });
        console.log("Object store created");
      }
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      console.log("Database opened successfully");
      resolve(db);
    };
  });
};

const createData = (tableName, data) => {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject("Database is not initialized");
      return;
    }

    const transaction = db.transaction([tableName], "readwrite");
    const objectStore = transaction.objectStore(tableName);
    const request = objectStore.add(data);

    request.onsuccess = () => {
      console.log("Data added to the store", request.result);
      resolve(request.result);
    };

    request.onerror = (event) => {
      console.error("Error adding data: ", event);
      reject(event);
    };
  });
};

export { createData, openDatabase };
*/

var db = new Dexie("PlanetDatabase");

db.version(3).stores({
  planets: `
      id,
      name,
      *page`,
});

export default db;
