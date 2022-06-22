from db.connection import dbConnectionDAO as connDb
from db.document import accessDocumentDAO as docDb
from db.user import registerDAO as regDb
from db.user import loginDAO as loginDb
import jwt


# 문서의 가장 최종버전 반환
def getDocument(title, version=None):
    db = connDb.getDb('document')
    if version is None:
        version = docDb.getLastestVersion(db, title)
    Data = docDb.getOneDocument(db, title, version)
    return Data


# 문서의 로그 리스트 반환 (제목, 유저, 버전, 시간)
def getDocumentLog(title):
    db = connDb.getDb('document')
    log = docDb.getOneDocumentLog(db, title)
    resultLog = []
    for data in log:
        del data['_id']
        del data['title']
        del data['content']
        resultLog.append(data)
    if len(resultLog) == 0:
        return {'result': 'fail'}
    else:
        resultLogDict = {'result': 'success'}
        resultLogDict.update({'log': resultLog})
        return resultLogDict


# 문서 DB에 새로운 데이터 삽입
def insertDocument(data):
    db = connDb.getDb('document')
    if docDb.getLastestVersion(db, data['title']) != 0:
        lastestDocument = getDocument(data['title'])
        del lastestDocument['_id']
        del lastestDocument['version']
        del lastestDocument['datetime']
        if data.keys() != lastestDocument.keys():
            return {'result': 'fail'}
        elif lastestDocument['content'] == data['content']:
            return {'result': 'same'}
        else:
            docDb.insertDocument(db, data)
            return {'result': 'success'}
    else:
        docDb.insertDocument(db, data)
        return {'result': 'success'}


# 아이디 중복 체크 (입력 중)
def checkUserId(idData):
    db = connDb.getDb('user')
    if regDb.checkUserId(db, idData['userId']):
        return {'result': 'success'}
    else:
        return {'result': 'fail'}


# 이메일 중복 체크 (입력 중)
def checkEmail(emailData):
    db = connDb.getDb('user')
    if regDb.checkEmail(db, emailData['email']):
        return {'result': 'success'}
    else:
        return {'result': 'fail'}


# 회원가입 처리
def register(userInfo):
    examData = {"userId": "", "password": "", "email": ""}
    if userInfo.keys() != examData.keys():
        return {'result': 'fail'}
    else:
        db = connDb.getDb('user')
        if regDb.checkEmail(db, userInfo['email']) and regDb.checkUserId(db, userInfo['userId']):
            regDb.addUser(db, userInfo)
            return {'result': 'success'}
        else:
            return {'result': 'fail'}


# 로그인 처리
def login(loginData):
    examData = {"userId": "", "password": ""}
    if loginData.keys() != examData.keys():
        return {'result': 'fail'}
    else:
        db = connDb.getDb('user')
        if regDb.checkUserId(db, loginData['userId']):
            return {'result': 'fail'}
        else:
            userData = loginDb.getUserData(db, loginData['userId'])
            if userData['password'] == loginData['password']:
                token = loginDb.getLoginToken(db, loginData['userId'])
                return {
                    'result': 'success',
                    'token': token
                }
            else:
                return {'result': 'fail'}


# 자동 로그인 처리
def autoLogin(tokenData):
    examData = {"token": ""}
    if tokenData.keys() != examData.keys():
        return {'result': 'fail'}
    else:
        try:
            db = connDb.getDb('user')
            userData = jwt.decode(tokenData['token'], 'secret', algorithms=['HS256'])
            print(userData)
            if loginDb.checkLoginToken(db, userData):
                return {
                    'result': 'success',
                    'userId': userData['userId']
                }
            else:
                return {'result': 'fail'}
        except jwt.exceptions.DecodeError:
            return {'result': 'fail'}

