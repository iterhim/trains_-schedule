const routes = async (app, port, jsonParser, urlencodedParser) => {
    app.post('/api/createTrain', jsonParser, (req, res) => {
        const inputRef = (req.body);

        inputRef.cities = (inputRef?.cities?.split(', '));
        inputRef.cities.filter(city => city)

        const newTrain = new Train(inputRef);
        newTrain.save().then(() => {
            res.status(200).send(JSON.stringify(newTrain))
        });
    })
    app.post('/api/updateTrain', jsonParser, async (req, res) => {
        try {
            const body = (req.body);
            await Train.findByIdAndUpdate(body.id, body.data)
            await Train.find().then((trains) => {

                res.send(trains)

            })
        } catch (e) {
            console.log(e)
        }
    })
    app.post('/api/findSpecificTrain',  jsonParser, async (req, res) => {
        const name = (req.body.letters);
        await Train.find({name}).then((train) => {

            res.send(train)

        })
    })
    app.post('/api/findManyTrains', jsonParser, async (req, res) => {
            try {

                const selectedOption = (req.body.selectedOption);
                switch (selectedOption) {
                    case 'dateStart' :
                        Train.find().sort({'dateStart': -1}).then((trains) => {
                            res.send(trains)
                        })
                        break;
                    case 'dateEnd' :
                        Train.find().sort({'dateEnd': -1}).then((trains) => {
                            res.send(trains)
                        })
                        break;
                    default:
                        await Train.find().then((trains) => {
                            res.send(trains)
                        });
                        break;
                }


            } catch
                (e) {
                console.log(e);
            }
        }
    )
    app.post('/api/deleteTrain', jsonParser, async (req, res) => {
        try {
            const body = (req.body);
            await Train.findByIdAndDelete(body.id)

            await Train.find().then((train) => {

                res.send(train)

            })
        } catch (e) {
            console.log(e)
        }
    })
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}
module.exports = routes