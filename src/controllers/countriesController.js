const Country = require('../models/countriesModel')

exports.createCountry = (req, res) => {
    new Country(req.body)
    .save()
    .then(() => res.status(200).send('Country created sucessfully'))
    .catch(err => res.status(500).send('Could not create country', err))
}

exports.updateCountry = (req, res) => {
    const { name } = req.params
    Country.findOneAndUpdate({ name: name } ,{$set: req.body})
    .then(() => res.status(200).send('Country was updated succesfully'))
    .catch(err => res.status(500).send('Could not update country', err))
}

exports.deleteCountry = (req, res) => {
    const { name } = req.params
    Country.findOneAndDelete({ name: name })
    .then(() => res.status(200).send('Country was deleted succesfully'))
    .catch(err => res.status(500).send('Could not deleted country', err))
}

exports.getOneCountry = (req, res) => {
    const { name } = req.params
    Country.findOne({ name: name })
    .then(country => res.send('Country you are looking for: ' + country))
    .catch(err => res.status(500).send('Could not find country', err))
}