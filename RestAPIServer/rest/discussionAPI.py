from flask import request, jsonify
from flask import Blueprint
from db import db

discussionApi = Blueprint("discussion", __name__)


# 토론 발제
@discussionApi.route('/add-discussion', methods=['POST'])
def post_addDiscussion():
    param = request.get_json()
    result = db.addDiscussion(param)
    return jsonify(result)


# 토론 목록 조회
@discussionApi.route('/get-discussion-list', methods=['POST'])
def post_getDiscussionList():
    param = request.get_json()
    result = db.getDiscussionList(param)
    return jsonify(result)


# 토론 세부사항 조회
@discussionApi.route('/get-discussion-detail', methods=['POST'])
def post_getDiscussionDetail():
    param = request.get_json()
    result = db.getDiscussionDetail(param)
    return jsonify(result)


# 토론 의견 추가
@discussionApi.route('/add-discussion-comment', methods=['POST'])
def post_addDiscussionComment():
    param = request.get_json()
    result = db.addDiscussionComment(param)
    return jsonify(result)
