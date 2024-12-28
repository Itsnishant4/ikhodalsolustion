const mongoose = require('mongoose');


const mockupSchema = new mongoose.Schema({
title: { type: String, required: true },
imageUrl: { type: String, required: true }
})

const Mockup = mongoose.model('mockup', mockupSchema)

module.exports = Mockup
