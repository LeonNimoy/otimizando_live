const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    student_id: Number,
    scores: Array,
    class_id: Number
});

module.exports = mongoose.model('grades', gradeSchema);