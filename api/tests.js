var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
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
    
  it('Add new URL with wrong request returns 400',function(done) {
      
              
      superagent.
        post(URL_ROOT).
        send({}).
        end(
            function(error, res) {
              assert.equal(res.status, 400);
              done();
            }
        );  
      
  });
    
  it('Add new URL with propper request returns 201',function(done) {
      
            
    superagent.
      post(URL_ROOT).
      send({url: 'http://wwww.google.es'}).
      end(
          function(error, res) {
            assert.equal(res.status, 201);
            done();
          }
      );            
  });
    
  it('Add new URL with propper request returns created object',function(done) {
      
            
    superagent.
      post(URL_ROOT).
      send({url: 'http://wwww.google.es'}).
      end(
          function(error, res) {
            expect(res.text).to.not.be.undefined;
            done();
          }
      );            
  });
    
  it('Add new URL with propper request returns created _id',function(done) {
      
            
    superagent.
      post(URL_ROOT).
      send({url: 'http://wwww.google.es'}).
      end(
          function(error, res) {
            expect(JSON.parse(res.text)).to.have.property('_id');
            done();
          }
      );            
  });
    
});