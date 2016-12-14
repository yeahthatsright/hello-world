const serve = require('koa-static');
const router = require('koa-router')();
const app = require('koa')();

router
  .get('/', function *(next) {
    console.log('routed to /...congrats');
  })
  .get('/users', function *(next) {
    console.log('routed to /users...congrats');
  });

app
  .use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
  })
  .use(serve(__dirname + '/public', { defer:true }))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log(this.header);
    console.log('%s %s - %s', this.method, this.url, ms);
  });

// Set server to port (default to external set port if so else 3000)
app.listen(process.env.PORT || 3000);

console.log('listening on port 3000');
