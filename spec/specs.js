describe('cryptosquare', function() {
  it('will explode the string! YAY!', function() {
    expect(cryptosquare('meow')).to.eql(['m','e','o','w'])
  });

  it('will remove all spaces and punctuation', function() {
    expect(cryptosquare('me ow !')).to.eql(['m','e','o','w'])
  });
});
