var git2 = require( 'nodegit2' );

var Ref = function( ref ) {
  var self = {};

  // Internal reference to a Git reference
  self.ref = ref || new git2.Ref();

  return self;
};

exports.ref = Ref;