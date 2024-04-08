const checkIfDateIsOlder = (mongooseModel) => async (req, res, next) => { 

    if(!req.body.updatedAt){ 
        res.status(400).json({ message: 'Valor recebido não contém informação de quando foi alterado' }); 
        return; 
    } 

    const receivedDate = new Date(req.body.updatedAt); 

    try { 
        const documentId = req.body.id; 
        const storedDocument = await mongooseModel.findById(documentId); 

        if (!storedDocument) { 
            return res.status(404).json({ message: 'Documento não encontrado' }); 
        } 
        const storedDate = storedDocument.updatedAt; 

        if (receivedDate > storedDate) { 
            next(); 
        } else { 
            res.status(400).json({ message: 'Valor recebido é mais antigo que o valor atual armazenado' }); 
        } 
    } catch (error) { 
        res.status(500).json({ message: 'Internal Server Error' }); 
    } 
} 

module.exports = checkIfDateIsOlder;
