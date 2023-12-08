import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  const JATEDb = await openDB('text', 1);
  const tx = JATEDb.transaction('text', 'readwrite');
  const write = tx.objectStore('text');
  const request = write.put({ id: id, value: content });
  const result = await request;
  console.log('Data saved to the database', result.value);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the database');
  const JATEDb = await openDB('todos', 1);
  const tx = JATEDb.transaction('todos', 'readonly');
  const content = tx.objectStore('todos');
  const request = content.getAll();
  const result = await request;
  console.log('result.value', result.value);
  return result;
};

initdb();
