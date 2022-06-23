from flask import request, jsonify
from flask import Blueprint
from db import db

userApi = Blueprint("user", __name__)


# 입력 중 아이디 중복 체크
@userApi.route('/check-user-id', methods=['POST'])
def post_checkUserId():
    param = request.get_json()
    result = db.checkUserId(param)
    return jsonify(result)


# 입력 중 이메일 중복 체크
@userApi.route('/check-email', methods=['POST'])
def post_checkEmail():
    param = request.get_json()
    print(param)
    result = db.checkEmail(param)
    return jsonify(result)


# 회원가입
@userApi.route('/register', methods=['POST'])
def post_register():
    param = request.get_json()
    result = db.register(param)
    return jsonify(result)


# 로그인
@userApi.route('/login', methods=['POST'])
def post_login():
    param = request.get_json()
    result = db.login(param)
    return jsonify(result)


# 자동 로그인
@userApi.route('/auto-login', methods=['POST'])
def post_autoLogin():
    param = request.get_json()
    result = db.autoLogin(param)
    return jsonify(result)


# 마이페이지 내 정보
@userApi.route('/get-user-data', methods=['POST'])
def post_getUserData():
    param = request.get_json()
    result = db.getUserData(param)
    return jsonify(result)


# 유저 정보 수정
@userApi.route('/update-user-data', methods=['POST'])
def post_updateUserData():
    param = request.get_json()
    result = db.updateUserData(param)
    return jsonify(result)


# 회원탈퇴
@userApi.route('/delete-user', methods=['POST'])
def post_deleteUser():
    param = request.get_json()
    result = db.deleteUser(param)
    return jsonify(result)


# 사용자 문서 수정
@userApi.route('/modify-user-content', methods=['POST'])
def post_modifyUserContent():
    param = request.get_json()
    result = db.modifyUserContent(param)
    return jsonify(result)


# 사용자 문서 조회
@userApi.route('/get-user-content', methods=['POST'])
def post_getUserContent():
    param = request.get_json()
    result = db.getUserContent(param)
    return jsonify(result)
