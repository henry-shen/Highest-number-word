const chai = require('chai'), expect = chai.expect, should = chai.should();

const { highestScoringWord } = require('./HighestScoringWord.js');

describe('highestScoringWord', function () {
  it(`Should return the word with the highest score`, function () {
    highestScoringWord('viva mexico cabnes').should.equal('mexico');
    highestScoringWord('mi mama me mima').should.equal('mima');
    highestScoringWord('fly me to the moon').should.equal('moon');
    });
})
