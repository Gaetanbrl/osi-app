const express = require('express');
const cors = require('cors')
const db = require('./connect');

const app = express();

app.use(cors())
app.set('port', (process.env.PORT || 3001));


GET('/fiche', () => db.any('SELECT * FROM fiche'));

GET('/fiche/id/:id', req => db.fiche.findById(req.params.id));
GET('/fiche/acro/:acro', req => db.fiche.findByAcro(req.params.acro));


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
