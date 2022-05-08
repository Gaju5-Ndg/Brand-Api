import chai from 'chai';
import chaiHttp from 'chai-http';
import {faker} from '@faker-js/faker'
import app from '../index.js';


chai.should();
chai.use(chaiHttp);

describe('Tests comment enpoints', () => {
	describe('Test adding a new comment', () => {
		const comment = {
			author: faker.name.findName(),
			desc: faker.lorem.sentence(),
            postId:'6250988588c32dc5b5b34aaf',
		}

		const comment2 = {
            author: faker.name.findName(),
			desc: "",
            postId:'6250988588c32dc5b5b34aaf',
		}
        it('Should add a new comment', done => {
			chai.request(app)
			.post('/api/comment/add/:_id')
			.send(comment)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.property('msg', 'Comment Added Successfully');
				done();
			});
		})
        
        // it('Should get all comments', done => {
		// 	chai.request(app)
		// 	.post('/api/comment/getAll')
		// 	.end((err, res) => {
		// 		res.should.have.status(404);
		// 		res.body.should.be.a('object');
		// 		res.body.should.have.property('msg','here are all comments');

		// 		done();
		// 	})
		// })
        // it('Should get one comment', done => {
		// 	chai.request(app)
		// 	.get('/api/comment/getOne/62581e260c43995f33ccb0df')
		// 	.end((err, res) => {
		// 		res.should.have.status(200);
		// 		res.body.should.be.a('object');
		// 		done();
		// 	});
		// });

		
	
	})
})