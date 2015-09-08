describe('cryptosquare', function() {
  it('will remove all spaces and punctuation', function() {
    expect(cryptosquare('take, on  me')).to.equal('takeonme')
  });
});
