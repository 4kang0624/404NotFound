from flask import request, jsonify
from flask import Blueprint
from db import db


documentApi = Blueprint("document", __name__)


# 문서 가져오기 (title만 넣으면 마지막 버전, version과 함께 넣으면 해당 버전)
@documentApi.route('/get-document', methods=['POST'])
def post_getDocument():
    try:
        param = request.get_json()
        title = param['title']
        try:
            version = param['version']
        except KeyError:
            version = None
        data = {'result': 'success'}
        if version is None:
            data.update(db.getDocument(title))
        else:
            data.update(db.getDocument(title, version))
        del data['_id']
        return jsonify(data)
    except TypeError:
        return jsonify({'result': 'fail'})


# 특정 문서의 로그 반환 (title json으로 입력)
@documentApi.route('/get-document-log', methods=['POST'])
def post_getDocumentLog():
    param = request.get_json()
    title = param['title']
    data = db.getDocumentLog(title)
    return jsonify(data)


# 문서 수정 또는 입력하기
@documentApi.route('/insert-document', methods=['POST'])
def post_insertDocument():
    param = request.get_json()
    result = db.insertDocument(param)
    return jsonify(result)
