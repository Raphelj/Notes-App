export const getAllNotes = (req, res) => {
    res.status(200).send("These are my notes");
}

export const createNotes = (req, res) => {
    res.status(201).json({message:"note created successfully"});
}

export const updateNotes = (req, res) => {
    res.status(200).json({message:"note updated successfully"});
}

export const deleteNotes = (req, res) => {
    res.status(200).json({message:"note deleted successfully"});
}