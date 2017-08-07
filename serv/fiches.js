class ficheRepository {
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
    }

    findById(numid) {
        return this.db.oneOrNone('SELECT * FROM fiche WHERE id = $1', +id);
    }

    findByAcro(acro) {
        return this.db.oneOrNone('SELECT * FROM fiche WHERE acronyme = $1', acro);
    }

    total() {
        return this.db.one('SELECT count(*) FROM fiche', [], a => +a.count);
    }
}

module.exports = ficheRepository;



