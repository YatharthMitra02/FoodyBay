import multer from 'multer'

// another way to store the file temperoarily into your system and then upload to the image kit

// Store file in memory (RAM) instead of disk
const storage = multer.memoryStorage();

export const upload = multer({ storage });
