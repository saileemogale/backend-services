process.env.NODE_ENV = 'test';

const sinon = require('sinon');
const request = require('request');
const chai = require('chai');

const should = chai.should();


const base = 'http://localhost:1337';

let csrfToken, agent



describe('Teams', () => {
    describe('/v1/teams', () => {
        var responseObject = {
            statusCode: 200,
            headers: {
            'content-type': 'application/json'
            },
            cookies: {
                _csrf: 'lBy7XMEIby005gMq0-F413_x'
            }
        };
        var responseBody = {
            status: 'success',
            data: [
                    {
                    "name": "Arsenal",
                    "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/632.jpg"
                    },
                    {
                        "name": "Bournemouth",
                        "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/631.jpg"
                    },
                    {
                        "name": "Brighton & Hove Albion",
                        "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/2465.jpg"
                    }
            ]
        };

        var stub = sinon.stub(request, 'get');

        var postStub = sinon.stub(request, 'post');

        var csrfToken = ''

        it('should return all teams', (done) => {
            
            stub.yields(null, responseObject, JSON.stringify(responseBody));
            request.get(`${base}/v1/teams`, (err, res, body) => {
                res.statusCode.should.eql(200);
                
                res.headers['content-type'].should.contain('application/json');
                
                body = JSON.parse(body);

                body.status.should.eql('success');

                body.data.length.should.eql(3);

                body.data[0].should.include.keys(
                    'name', 'img'
                );
                body.data[0].name.should.eql('Arsenal');
                done();
            });
        });

        it('should respond with a single team', (done) => {
            request.get(`${base}/v1/teams/Arsenal`, (err, res, body) => {
              res.statusCode.should.equal(200);
              res.headers['content-type'].should.contain('application/json');
              body = JSON.parse(body);
              body.status.should.eql('success');
              body.data[0].should.include.keys(
                'name', 'img'
              );
              body.data[0].name.should.eql('Arsenal');
              done();
            });
          });

          it('should return that team was added', (done) => {
            var obj = {
                "res": {
                  "statusCode": 201,
                  "headers": {
                    "content-type": "application/json"
                  }
                },
                "body": {
                  "status": "success",
                  "data": [
                    {
                        "name": "123",
                        "img": "1234"
                    }
                  ]
                }
            }
            postStub.yields(null, obj.res, obj.body);
            request.post({
                    url : `${base}/v1/teams`,
                    headers : {
                        "content-type": "application/json",
                    },
                    cookies : {
                        _csrf: 'IBy7XMEIby005gMq0-F413_x'
                    },
                    body: {
                        name: '123',
                        img: '1234'
                    },
                    json: true
                }, (err, res, body) => {
                    res.statusCode.should.equal(201);
                    res.headers['content-type'].should.contain('application/json');
                    body.status.should.eql('success');
                    body.data[0].should.include.keys(
                        'name', 'img'
                    );
                    done();
                });
          });
    });

    
});