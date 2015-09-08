describe('cryptosquare', function() {
  it('will explode the string! YAY!', function() {
    expect(cryptosquare('meow')).to.eql(['m','e','o','w'])
  });

  it('will remove all spaces and punctuation', function() {
    expect(cryptosquare('me ow !')).to.eql(['m','e','o','w'])
  });

  it('will return stuff', function() {
    expect(cryptosquare('hey there ! u')).to.eql(['hey', 'the', 'reu'])
  });

  // it('turn the input into one, long, string.', function() {
  //   expect(cryptosquare('the lucky deron!')).to.equal('theluckyderon')
  // });
});
