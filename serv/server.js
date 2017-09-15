const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.set('port', (process.env.PORT || 3001));
app.use(express.static('../public'));

GET('/fiche', () => db.any('SELECT * FROM fiche ORDER BY theme_fiche DESC')); 
GET('/fiche/id/:id', req => db.queries.findById(req.params.id));
GET('/fiche/acro/:acro', req => db.queries.findByAcro(req.params.acro));

GET('/score/:acro', req => db.queries.findScoreByAcro(req.params.acro));


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
