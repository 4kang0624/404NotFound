from flask import Flask, request, jsonify
from db import db

app = Flask(__name__)


# 문서 가져오기 (title만 넣으면 마지막 버전, version과 함께 넣으면 해당 버전)
@app.route('/getDocument', methods=['POST'])
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
@app.route('/getDocumentLog', methods=['POST'])
def post_getDocumentLog():
    param = request.get_json()
    title = param['title']
    data = db.getDocumentLog(title)
    return jsonify(data)


# 문서 수정 또는 입력하기
@app.route('/insertDocument', methods=['POST'])
def post_insertDocument():
    param = request.get_json()
    result = db.insertDocument(param)
    return jsonify(result)


if __name__ == "__main__":
    app.run()