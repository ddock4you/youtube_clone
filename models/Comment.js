import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    // Video id 값을 가져와 해당하는 video의 코멘트를 표시해주고 싶을 경우 아래의 오브젝트를 이용
    // video: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Video'
    // }
});

// Video.js와 같은 model 변수를 사용해도 괜찮은지
const model = mongoose.model('Comment', CommentSchema);
export default model;