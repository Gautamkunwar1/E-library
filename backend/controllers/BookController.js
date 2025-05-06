import book from "../model/bookSchema.js";
import path from "path"
import upload from "../uploads/upload.js";

export const addBook = async (req, res) => {
    const { isbn, bookName, author, publishYear, desc, genre } = req.body;
    const isbnRegex = /^(97[89])[- ]?\d{1,5}[- ]?\d{1,7}[- ]?\d{1,7}[- ]?\d$/;

    if (!isbn || !bookName || !author || !publishYear || !desc || !genre) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.files || !req.files.image || !req.files.pdf) {
        return res.status(400).json({ message: "Missing image or pdf" });
    }

    const imageFile = req.files.image[0]; // ✅ Correct way to extract file
    const pdfFile = req.files.pdf[0];

    if (!isbnRegex.test(isbn)) {
        return res.status(400).json({ message: "Provide a valid ISBN number" });
    }

    try {
        const existingBook = await book.findOne({ isbn });
        if (existingBook) {
            return res.status(400).json({ message: "Book already exists in the database" });
        }

        const newBook = await book.create({
            isbn,
            bookName,
            author,
            publishYear,
            desc,
            genre,
            image: imageFile.filename, // ✅ Now it's defined
            pdf: pdfFile.filename,
        });

        return res.status(201).json({
            message: "Book added successfully",
            book: newBook,
        });
    } catch (error) {
        console.error(`Error in addBook controller: ${error.message}`);
        return res.status(500).json({ message: "Server Error" });
    }
};


export const getAllBook = async (req, res) => {
    try {
        const allBook = await book.find();
        return res.status(200).json({ message: "Book details found successfully", allBook });
    } catch (error) {
        return res.status(500).json({ message: "Server Error" })
    }
}