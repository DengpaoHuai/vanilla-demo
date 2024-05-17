//iterator pattern

const array = [1, 2, 3, 4, 5];
const iterator = array[Symbol.iterator]();

console.log(iterator.next());

function* generator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const gen = generator();
console.log(gen.next());

async function* asyncFetchpage() {
  let pageNumber = 1;
  let hasMore = true;
  while (hasMore) {
    const response = await fetch(
      `https://swapi.dev/api/planets/?page=${pageNumber}`
    );
    const data = await response.json();
    yield data.results;
    hasMore = !!data.next;
    pageNumber++;
  }
}
