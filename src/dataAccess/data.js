const cassandra = require('cassandra-driver');
const async = require('async');
const assert = require('assert');

//Connect to the cluster
const client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'dev'});

//Build a query
const q1 = 'SELECT * FROM emp';

client.execute(q1, function(err, result) {
  debugger
  assert.ifError(err);
  console.log('query returned ' + result.rows[0].emp_first);
});
