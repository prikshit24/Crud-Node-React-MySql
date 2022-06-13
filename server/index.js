const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "newuser",
    database: "SEOAppScore",
});

const app = express();
const port = process.env.PORT || 8000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());

app.get('/api/get', (req, res) => {

    const tableName = req.query.tableName;

    if (tableName === "networkingScore") {
        const sqlSelect = "SELECT * FROM networkingScore"
        db.query(sqlSelect, (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
    } else if (tableName === "commonSEOScore") {
        const sqlSelect = "SELECT * FROM commonSEOScore"
        db.query(sqlSelect, (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
    } else if (tableName === "DomainAgeScore") {
        const sqlSelect = "SELECT * FROM DomainAgeScore"
        db.query(sqlSelect, (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
    } else if (tableName === "KeywordFactorScore") {
        const sqlSelect = "SELECT * FROM KeywordFactorScore"
        db.query(sqlSelect, (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
    } else if (tableName === "videoSEOScore") {
        const sqlSelect = "SELECT * FROM videoSEOScore"
        db.query(sqlSelect, (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
    } else if (tableName === "ImageSEOScore") {
        const sqlSelect = "SELECT * FROM ImageSEOScore"
        db.query(sqlSelect, (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
    } else if (tableName === "contentFactorScore") {
        const sqlSelect = "SELECT * FROM contentFactorScore"
        db.query(sqlSelect, (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
    } else if (tableName === "overviewScore") {
        const sqlSelect = "SELECT * FROM overviewScore"
        db.query(sqlSelect, (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
    }
})

app.post('/api/insert', (req, res) => {

    const array = req.query.array;
    const jsonParse = JSON.parse(array)

    jsonParse.map((data) => {

        if (data.tableName === 'networkingScore') {
            data.data.map((item) => {
                if (item.name !== '') {
                    const sqlInsert = `INSERT INTO networkingScore ( name, present, notPresent) VALUES ( ?,?,?);`
                    db.query(sqlInsert, [item.name, item.present, item.notPresent], (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log(item.name, item.present, item.notPresent)
                        console.log(result);
                    })
                }
            })
        } else if (data.tableName === "commonSEOScore") {
            data.data.map((item) => {
                if (data.data.name !== '') {
                    const sqlInsert = `INSERT INTO commonSEOScore ( name, present, notPresent, good, bad ) VALUES ( ?,?,?,?,?);`
                    db.query(sqlInsert, [item.name, item.present, item.notPresent, item.good, item.bad], (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log(item.name, item.present, item.notPresent, item.good, item.bad)
                        console.log(result);
                    })
                }
            })
        } else if (data.tableName === "DomainAgeScore") {
            data.data.map((item) => {
                if (item.name !== '') {
                    const sqlInsert = `INSERT INTO DomainAgeScore ( name, best, average, good, bad, worse ) VALUES ( ?,?,?,?,?,?);`
                    db.query(sqlInsert, [item.name, item.best, item.good, item.average, item.bad, item.worse], (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log(item.name, item.best, item.good, item.average, item.bad, item.worse)
                        console.log(result);
                    })
                }
            })
        } else if (data.tableName === "KeywordFactorScore") {
            data.data.map((item) => {
                if (item.name !== '') {
                    const sqlInsert = `INSERT INTO KeywordFactorScore ( name, present, notPresent, good, average, bad ) VALUES ( ?,?,?,?,?,?);`
                    db.query(sqlInsert, [item.name, item.present, item.notPresent, item.good, item.average, item.bad], (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log(item.name, item.present, item.notPresent, item.good, item.average, item.bad)
                        console.log(result);
                    })
                }
            })
        } else if (data.tableName === "videoSEOScore") {
            data.data.map((item) => {
                if (item.name !== '') {
                    const sqlInsert = `INSERT INTO videoSEOScore ( name, present, notPresent, good, average, bad ) VALUES ( ?,?,?,?,?,?);`
                    db.query(sqlInsert, [item.name, item.present, item.notPresent, item.good, item.average, item.bad], (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log(item.name, item.present, item.notPresent, item.good, item.average, item.bad)
                        console.log(result);
                    })
                }
            })
        } else if (data.tableName === "ImageSEOScore") {
            data.data.map((item) => {
                if (item.name !== '') {
                    const sqlInsert = `INSERT INTO ImageSEOScore ( name, best, average, good, bad, worse ) VALUES ( ?,?,?,?,?,?);`
                    db.query(sqlInsert, [item.name, item.best, item.good, item.average, item.bad, item.worse], (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log(item.name, item.best, item.good, item.average, item.bad, item.worse)
                        console.log(result);
                    })
                }
            })
        } else if (data.tableName === "contentFactorScore") {
            data.data.map((item) => {
                if (item.name !== '') {
                    const sqlInsert = `INSERT INTO contentFactorScore ( name, best, average, good, bad, worse ) VALUES ( ?,?,?,?,?,?);`
                    db.query(sqlInsert, [item.name, item.best, item.good, item.average, item.bad, item.worse], (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log(item.name, item.best, item.good, item.average, item.bad, item.worse)
                        console.log(result);
                    })
                }
            })
        } else if (data.tableName === 'overviewScore') {
            data.data.map((item) => {
                if (item.name !== '') {
                    const sqlInsert = `INSERT INTO overviewScore ( name, score ) VALUES ( ?,? );`
                    db.query(sqlInsert, [item.name, item.score], (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log(item.name, item.score)
                        console.log(result);
                    })
                }
            })
        }

    })
})

app.delete('/api/delete', (req, res) => {

    const tableName = req.query.tableName;
    const name = req.query.name;

    if (tableName === 'networkingScore') {
        const sqlDelete = `DELETE FROM networkingScore WHERE name = ?;`
        db.query(sqlDelete, name, (err, result) => {
            if (err) {
                console.log(err);
            }
        })
    } else if (tableName === 'commonSEOScore') {
        const sqlDelete = `DELETE FROM commonSEOScore WHERE name = ?;`
        db.query(sqlDelete, name, (err, result) => {
            if (err) {
                console.log(err);
            }
        })
    } else if (tableName === 'DomainAgeScore') {
        const sqlDelete = `DELETE FROM DomainAgeScore WHERE name = ?;`
        db.query(sqlDelete, name, (err, result) => {
            if (err) {
                console.log(err);
            }
        })
    } else if (tableName === 'KeywordFactorScore') {
        const sqlDelete = `DELETE FROM KeywordFactorScore WHERE name = ?;`
        db.query(sqlDelete, name, (err, result) => {
            if (err) {
                console.log(err);
            }
        })
    } else if (tableName === 'videoSEOScore') {
        const sqlDelete = `DELETE FROM videoSEOScore WHERE name = ?;`
        db.query(sqlDelete, name, (err, result) => {
            if (err) {
                console.log(err);
            }
        })
    } else if (tableName === 'ImageSEOScore') {
        const sqlDelete = `DELETE FROM ImageSEOScore WHERE name = ?;`
        db.query(sqlDelete, name, (err, result) => {
            if (err) {
                console.log(err);
            }
        })
    } else if (tableName === 'contentFactorScore') {
        const sqlDelete = `DELETE FROM contentFactorScore WHERE name = ?;`
        db.query(sqlDelete, name, (err, result) => {
            if (err) {
                console.log(err);
            }
        })
    } else if (tableName === 'overviewScore') {
        const sqlDelete = `DELETE FROM overviewScore WHERE name = ?;`
        db.query(sqlDelete, name, (err, result) => {
            if (err) {
                console.log(err);
            }
        })
    }

})

app.put('/api/update', (req, res) => {

    const array = req.query.array;
    const jsonParse = JSON.parse(array)

    jsonParse.map((data) => {
        if (data.tableName === 'networkingScore') {
            data.data.map((item) => {
                const sqlUpdate = `UPDATE networkingScore SET present = ?, notPresent = ? WHERE name = ?`;
                db.query(sqlUpdate, [item.present, item.notPresent, item.name], (err, result) => {
                    if (err) {
                        console.log(err)
                    }
                })
            })
        } else if (data.tableName === 'commonSEOScore') {
            data.data.map((item) => {
                const sqlUpdate = `UPDATE commonSEOScore SET present = ?, good = ?, bad = ?, notPresent = ? WHERE name = ?`;
                db.query(sqlUpdate, [item.present, item.good, item.bad, item.notPresent, item.name], (err, result) => {
                    if (err) {
                        console.log(err)
                    }
                })
            })
        } else if (data.tableName === 'DomainAgeScore') {
            data.data.map((item) => {
                const sqlUpdate = `UPDATE DomainAgeScore SET best = ?, good = ?, average = ?, bad = ?, worse = ? WHERE name = ?`;
                db.query(sqlUpdate, [item.best, item.good, item.average, item.bad, item.worse, item.name], (err, result) => {
                    if (err) {
                        console.log(err)
                    }
                })
            })
        } else if (data.tableName === 'KeywordFactorScore') {
            data.data.map((item) => {
                const sqlUpdate = `UPDATE KeywordFactorScore SET present = ?, good = ?, average = ?, bad = ?, notPresent = ? WHERE name = ?`;
                db.query(sqlUpdate, [item.present, item.good, item.average, item.bad, item.notPresent, item.name], (err, result) => {
                    if (err) {
                        console.log(err)
                    }
                })
            })
        } else if (data.tableName === 'videoSEOScore') {
            data.data.map((item) => {
                const sqlUpdate = `UPDATE videoSEOScore SET present = ?, good = ?, average = ?, bad = ?, notPresent = ? WHERE name = ?`;
                db.query(sqlUpdate, [item.present, item.good, item.average, item.bad, item.notPresent, item.name], (err, result) => {
                    if (err) {
                        console.log(err)
                    }
                })
            })
        } else if (data.tableName === 'ImageSEOScore') {
            data.data.map((item) => {
                const sqlUpdate = `UPDATE ImageSEOScore SET best = ?, good = ?, average = ?, bad = ?, worse = ? WHERE name = ?`;
                db.query(sqlUpdate, [item.best, item.good, item.average, item.bad, item.worse, item.name], (err, result) => {
                    if (err) {
                        console.log(err)
                    }
                })
            })
        } else if (data.tableName === 'contentFactorScore') {
            data.data.map((item) => {
                const sqlUpdate = `UPDATE contentFactorScore SET best = ?, good = ?, average = ?, bad = ?, worse = ? WHERE name = ?`;
                db.query(sqlUpdate, [item.best, item.good, item.average, item.bad, item.worse, item.name], (err, result) => {
                    if (err) {
                        console.log(err)
                    }
                })
            })
        } else if (data.tableName === 'overviewScore') {
            data.data.map((item) => {
                const sqlUpdate = `UPDATE overviewScore SET score = ? WHERE name = ?`;
                db.query(sqlUpdate, [item.score, item.name], (err, result) => {
                    if (err) {
                        console.log(err)
                    }
                })
            })
        }
    })

})



app.listen(port);
console.log('Server started at http://localhost:' + port);