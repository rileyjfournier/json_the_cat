const { fetchBreedDescription } = require('../breedFetcher.js');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });

  it('should return an error if invalid/non-existent breed is passed in', (done) => {
    fetchBreedDescription('imadog', (err, desc) => {
      assert.equal(desc, null);
      assert.ifError(err);
      done();
    })
  });

});

