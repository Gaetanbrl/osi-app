const promise = require('bluebird');

const repos = {
    fiches: require('./fiches')
};



const options = {
    promiseLib: promise,
    extend: (obj) => {
        obj.users = new repos.fiches(obj, pgp);
	}
};


const pgp = require('pg-promise')(options);

const username = "postgres";
const password = "postgres"; 
const host = "localhost";
const database = "osi";

const cn = "postgres://"+username+":"+password+"@"+host+"/"+database;

const db = pgp(cn);

module.exports = db;
