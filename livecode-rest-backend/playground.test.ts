import {buildRequest} from './lib/request'

test()


async function test() {
  const req = buildRequest('http://localhost:8888/')
  const {body, status, headers} = await req.get({path: '/user-data'})
  // console.log(body, status, headers);
}