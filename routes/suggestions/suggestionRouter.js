const express = require('express')
const router = express.Router()
const {getAllSuggestions, 
    singleSuggestion, 
    createSuggestion, 
    updateSuggestion,
    deleteSuggestion} = require('../suggestions/model/controller/suggestionController')

router.get('/all-suggestions', getAllSuggestions)
router.get('/single-suggestions/:id', singleSuggestion)
router.post('/create-suggestion', createSuggestion)
router.put('/update-suggestion', updateSuggestion)
router.delete('delete-suggestion', deleteSuggestion)

module.exports = router