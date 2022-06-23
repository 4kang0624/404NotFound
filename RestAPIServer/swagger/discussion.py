from flask import request
from flask_restx import Resource, Namespace, fields

discussion = {}
count = 1

Discussion = Namespace(
    name="/discussion",
    description="Discussion DB와의 연동을 위한 API입니다."
)


@Discussion.route('/add-discussion')
class AddDiscussion(Resource):
    @Discussion.expect(Discussion.model('Add Discussion', {
        "title": fields.String(required=True, description="문서 제목"),
        "topic": fields.String(required=True, description="의제"),
        "userId": fields.String(required=True, description="작성자"),
        "content": fields.String(required=True, description="내용"),
    }))
    def post(self):
        """토론을 추가합니다."""


@Discussion.route('/get-discussion-list')
class GetDiscussionList(Resource):
    @Discussion.expect(Discussion.model('Get Discussion List', {
        "title": fields.String(required=True, description="문서 제목")
    }))
    def post(self):
        """토론 목록을 반환합니다."""


@Discussion.route('/get-discussion-detail')
class GetDiscussionDetail(Resource):
    @Discussion.expect(Discussion.model('Get Discussion Detail', {
        "discussionId": fields.Integer(required=True, description="문서 id"),
    }))
    def post(self):
        """토론의 세부 정보를 반환합니다."""


@Discussion.route('/add-discussion-comment')
class AddDiscussionComment(Resource):
    @Discussion.expect(Discussion.model('Add Discussion Comment', {
        "discussionId": fields.Integer(required=True, description="문서 id"),
        "content": fields.String(required=True, description="내용"),
        "userId": fields.String(required=True, description="작성자"),
    }))
    def post(self):
        """토론에 의견을 추가합니다."""
