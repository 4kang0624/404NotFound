from flask import request
from flask_restx import Resource, Namespace, fields

discussion = {}
count = 1

User = Namespace(
    name="/user",
    description="User DB와의 연동을 위한 API입니다."
)


@User.route('/check-user-id')
class CheckUserId(Resource):
    @User.expect(User.model('Check User Id', {
        "userId": fields.String(required=True, description="아이디")
    }))
    def post(self):
        """유저의 아이디가 중복인지 체크합니다 (회원가입 기능에서 사용)"""
        global count
        global discussion


@User.route('/check-email')
class CheckEmail(Resource):
    @User.expect(User.model('Check Email', {
        "email": fields.String(required=True, description="이메일")
    }))
    def post(self):
        """유저의 이메일이 중복인지 체크합니다 (회원가입과 이메일 변경 기능에서 사용)"""
        global count
        global discussion


@User.route('/register')
class Register(Resource):
    @User.expect(User.model('Register', {
        "userId": fields.String(required=True, description="아이디"),
        "password": fields.String(required=True, description="비밀번호"),
        "email": fields.String(required=True, description="이메일")
    }))
    def post(self):
        """회원 정보를 등록합니다"""
        global count
        global discussion


@User.route('/login')
class Login(Resource):
    @User.expect(User.model('Login', {
        "userId": fields.String(required=True, description="아이디"),
        "password": fields.String(required=True, description="비밀번호")
    }))
    def post(self):
        """로그인 기능을 수행하며, 토큰을 생성합니다."""
        global count
        global discussion


@User.route('/auto-login/<token>')
class AutoLogin(Resource):
    def get(self):
        """토큰 값을 비교해 자동 로그인 기능을 수행합니다."""
        global count
        global discussion


@User.route('/get-user-data')
class GetUserData(Resource):
    @User.expect(User.model('Get User Data', {
        "userId": fields.String(required=True, description="아이디")
    }))
    def post(self):
        """유저 정보를 수정할 때 표시할 유저의 정보를 조회합니다"""
        global count
        global discussion


@User.route('/update-user-data')
class UpdateUserData(Resource):
    @User.expect(User.model('Update User Data', {
        "userId": fields.String(required=True, description="아이디"),
        "name": fields.String(required=True, description="비밀번호"),
        "email": fields.String(required=True, description="이메일"),
        "phoneNumber": fields.String(required=True, description="전화번호"),
        "password": fields.String(required=True, description="비밀번호")
    }))
    def post(self):
        """유저의 정보를 업데이트합니다"""
        global count
        global discussion



@User.route('/delete-user')
class DeleteUser(Resource):
    @User.expect(User.model('Delete User', {
        "userId": fields.String(required=True, description="아이디")
    }))
    def post(self):
        """유저를 삭제합니다"""
        global count
        global discussion


@User.route('/modify-user-content')
class ModifyUserContent(Resource):
    @User.expect(User.model('Modify User Content', {
        "userId": fields.String(required=True, description="아이디"),
        "userContent": fields.String(required=True, description="내용")
    }))
    def post(self):
        """사용자 문서를 수정합니다"""
        global count
        global discussion



@User.route('/get-user-content')
class GetUserContent(Resource):
    @User.expect(User.model('Get User Content', {
        "userId": fields.String(required=True, description="아이디")
    }))
    def post(self):
        """사용자 문서를 조회합니다"""
        global count
        global discussion
