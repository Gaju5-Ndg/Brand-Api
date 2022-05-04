"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _faker = require("@faker-js/faker");

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

describe('Tests blog enpoints', function () {
  describe('Test adding a new post', function () {
    var post = {
      title: _faker.faker.name.findName(),
      content: _faker.faker.lorem.sentence()
    };
    var post2 = {
      name: _faker.faker.name.findName(),
      email: _faker.faker.internet.email(),
      msg: ''
    };
    it('Should add a new post', function (done) {
      _chai["default"].request(_index["default"]).post('/api/post/post').send(post).end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('msg', 'post added');
        done();
      });
    });
    it('Should get all posts', function (done) {
      _chai["default"].request(_index["default"]).post('/api/post/getAll').end(function (err, res) {
        res.should.have.status(404);
        res.body.should.be.a('object');
        done();
      });
    });
    it('Should get one message', function (done) {
      _chai["default"].request(_index["default"]).get('/api/post/getOne/626af7fe70a6c99b8d3063ea').end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });
});