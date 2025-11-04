import Note from "../models/Note.js";

export const getAllNotes = async(req, res) => {
    try{
        const notes = (await Note.find()).sort({ createdAt: -1 });
        res.status(200).json(notes);
    }
    catch(error){
        res.status(500).json({message:"Error retrieving notes"});
    }
}

export const getNoteById = async(req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({message:"Note not found"});
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({message:"Error retrieving note"});
    }
}    

export const createNotes = async(req,res) => {
    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content});
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(500).json({message:"Error creating note"});
    }
}

export const updateNotes = async(req, res) => {
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content});
        if(!updatedNote){
            return  res.status(404).json({message:"Note not found"});
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json({message:"Error updating note"});
    }
}

export const deleteNotes = async(req, res) => {
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote){
            return res.status(404).json({message:"Note not found"});
        }
        res.status(200).json({message:"note deleted successfully"});
    } catch(error){
        res.status(500).json({message:"Error deleting note"});
    }
}    
    