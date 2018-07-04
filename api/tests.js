var chai = require('chai');
var assert = chai.assert;
var superagent = require('superagent');

var URL_ROOT = 'http://localhost:3000/';

describe('URL Shorter API Test Suite', function() {
    
  before(function() {          
    // Start the server
  });

  after(function() {
    // Shut the server down when we're done          
  });

  
  beforeEach(function(done) {      
    done();      
  });
    
  it('Get / retrieves 200 up and runing',function(done) {
      
              
      superagent.
        get(URL_ROOT).
        send().
        end(
            function(error, res) {
              assert.equal(res.status, 200);
              done();
            }
        );            
  });
    
});