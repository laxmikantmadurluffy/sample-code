var chai  = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
describe('/GET', () => {
    it('Main', (done) => {
    chai.request('http://localhost:3000')
      .get('/')
      .end((err, res) => {
            (res).should.have.status(202);
            done();
         });
      });
 });