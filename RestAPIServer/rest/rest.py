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


# 입력 중 아이디 중복 체크
@app.route('/checkUserId', methods=['POST'])
def post_checkUserId():
    param = request.get_json()
    result = db.checkUserId(param)
    return jsonify(result)


# 입력 중 이메일 중복 체크
@app.route('/checkEmail', methods=['POST'])
def post_checkEmail():
    param = request.get_json()
    print(param)
    result = db.checkEmail(param)
    return jsonify(result)


# 회원가입
@app.route('/register', methods=['POST'])
def post_register():
    param = request.get_json()
    result = db.register(param)
    return jsonify(result)


# 로그인
@app.route('/login', methods=['POST'])
def post_login():
    param = request.get_json()
    result = db.login(param)
    return jsonify(result)


# 자동 로그인
@app.route('/autoLogin', methods=['POST'])
def post_autoLogin():
    param = request.get_json()
    result = db.autoLogin(param)
    return jsonify(result)


# 마이페이지 내 정보
@app.route('/getUserData', methods=['POST'])
def post_getUserData():
    param = request.get_json()
    result = db.getUserData(param)
    return jsonify(result)


# 유저 정보 수정
@app.route('/updateUserData', methods=['POST'])
def post_updateUserData():
    param = request.get_json()
    result = db.updateUserData(param)
    return jsonify(result)


@app.route('/deleteUser', methods=['POST'])
def post_deleteUser():
    param = request.get_json()
    result = db.deleteUser(param)
    return jsonify(result)


if __name__ == "__main__":
    app.run()
