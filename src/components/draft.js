



const db = require('./connect');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors')

const app = express();
app.set('port', (process.env.PORT || 3001));

app.use(cors())
app.use(bodyParser.json({ type: 'application/json'}));


app.use(express.static(path.join(__dirname, '../public')));



GET('/fiche', () => db.any('SELECT * FROM fiche'));

  
GET('/fiche/:id', req => {
    var ficheID = parseInt(req.params.id);
    db.any('SELECT * FROM fiche WHERE id = $1', +ficheID);
});
GET('/fiche/compo', req => db.any(
    'SELECT * FROM fiche WHERE composante = ${composante}', {
        composante : 'gestion'
        }
    ));
GET('/fiche/theme:theme', req => db.any('SELECT * FROM fiche WHERE theme = $1', +theme));
GET('/fiche/objet:objet', req => db.any('SELECT * FROM fiche WHERE objet = $1', +objet));


function GET(url, handler) {
    app.get(url, (req, res) => {
        handler(req)
            .then(data => {
                res.json({
                    data
                });
            })
            .catch(error => {
                res.json({
                    success: false,
                    error: error.message || error
                });
            });
    });
}

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
