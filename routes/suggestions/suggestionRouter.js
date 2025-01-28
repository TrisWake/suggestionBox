const express = require('express')
const router = express.Router()
const {getAllSuggestions, singleSuggestion} = require('../suggestions/model/controller/suggestionController')

router.get('/all-suggestions', getAllSuggestions)
router.get('/single-suggestions/:id', singleSuggestion)


module.exports = router