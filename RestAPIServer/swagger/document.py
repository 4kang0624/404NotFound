from flask import request
from flask_restx import Resource, Namespace, fields

discussion = {}
count = 1

Document = Namespace(
    name="/document",
    description="Document DB와의 연동을 위한 API입니다."
)


@Document.route('/get-document')
class GetDocument(Resource):
    @Document.expect(Document.model('Get Document', {
        'title': fields.String(required=True, description="문서 제목"),
        'version': fields.Integer(required=True, description="문서 버전"),
    }))
    def post(self):
        """문서를 불러옵니다 (title만 넣으면 마지막 버전, version과 함께 넣으면 해당 버전)"""
        global count
        global discussion


@Document.route('/get-document-log')
class GetDocumentLog(Resource):
    @Document.expect(Document.model('Get Document Log', {
        "title": fields.String(required=True, description="문서 제목")
    }))
    def post(self):
        """문서의 로그를 반환합니다."""
        global count
        global discussion


@Document.route('/insert-document')
class InsertDocument(Resource):
    @Document.expect(Document.model('Insert Document', {
        "title": fields.String(required=True, description="문서 제목"),
        "content": fields.String(required=True, description="문서 내용"),
        "user": fields.String(required=True, description="작성자"),
    }))
    def post(self):
        """문서를 만들거나 수정합니다."""
        global count
        global discussion
