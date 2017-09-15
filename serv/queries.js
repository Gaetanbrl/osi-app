class queries {
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
    }

    findById(id) {
        return this.db.oneOrNone('SELECT * FROM fiche WHERE id_fiche = $1', +id);
    }

    findByAcro(acro) {
        return this.db.oneOrNone('SELECT * FROM fiche WHERE acronyme_fiche = $1', acro);
    }

    findScoreByAcro(acro) {
        return this.db.any('SELECT * FROM indicateur WHERE id_fiche =(SELECT id_fiche FROM fiche WHERE acronyme_fiche = $1)', acro);
    }
}

module.exports = queries;



