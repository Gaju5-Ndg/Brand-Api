"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _faker = require("@faker-js/faker");

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.should();

_chai.default.use(_chaiHttp.default);

describe('Tests comment enpoints', () => {
  describe('Test adding a new comment', () => {
    const comment = {
      author: _faker.faker.name.findName(),
      desc: _faker.faker.lorem.sentence(),
      postId: '6250988588c32dc5b5b34aaf'
    };
    const comment2 = {
      author: _faker.faker.name.findName(),
      desc: "",
      postId: '6250988588c32dc5b5b34aaf'
    };
    it('Should add a new comment', done => {
      _chai.default.request(_index.default).post('/api/comment/add/:_id').send(comment).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('msg', 'Comment Added Successfully');
        done();
      });
    });
    it('Should get all comments', done => {
      _chai.default.request(_index.default).post('/api/comment/getAll').end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        res.body.should.have.property('msg', 'here are all comments');
        done();
      });
    });
    it('Should get one comment', done => {
      _chai.default.request(_index.default).get('/api/comment/getOne/62581e260c43995f33ccb0df').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });
});