const Suggestion = require('../Suggestion')
const Suggestions = require('../Suggestion')

const getAllSuggestions = async (req, res) =>{
try {
    const {id} = req.params
    const allSuggestions = await Suggestions.find({})
    res.json({message:"All suggestions found", payload: allSuggestion})
} catch (error) {
    res.status(500).json({message:"Server Error", error: error.message})
}
}
 
const singleSuggestion = async (req, res)=>{
    const {id} = req.params
    try {
        const foundSuggestion = await Suggestions.findById(_id)
        res.json(Suggestion)
    }catch (error) {
        res.status(500).json({message:"Suggestion not found"})
    }
}

const createSuggestion = async (req, res)=>{
    const {title, author, suggestion, anonymous} = req.body
    try {
        const newSuggestion = new Suggestion({
            title,
            author: author || "anonymous",
            suggestion,
            anonymous: anonymous || false
        })
        await newSuggestion.save()
        res.json({message:"Suggestion created.", payload: newSuggestion})
    } catch (error) {
        res.status(500).json({message:"Failed to create suggestion", error: error.message})
    }
}

const updateSuggestion = async (req, res)=>{
    const {id} = req.params
    const {title, suggestion} = req.body
    try {
        Suggestions.findById(
            id,
            {title, suggestion},
            {new: true}
        )
        
    } catch (error) {
        
    }
}

module.exports = {
    getAllSuggestions,
    singleSuggestion
}