from db.connection import dbConnectionDAO as connDao
from db.document import accessDocumentDAO as docDao
from db.user import registerDAO as regDao
from db.user import loginDAO as loginDao
from db.user import myPageDAO as mpDao
from db.user import userOtherDAO as othDao
from db.discussion import discussionDAO as disDao
import jwt


# 문서의 가장 최종버전 반환
def getDocument(title, version=None):
    db = connDao.getDb('document')
    if version is None:
        version = docDao.getLastestVersion(db, title)
    Data = docDao.getOneDocument(db, title, version)
    return Data


# 문서의 로그 리스트 반환 (제목, 유저, 버전, 시간)
def getDocumentLog(title):
    db = connDao.getDb('document')
    log = docDao.getOneDocumentLog(db, title)
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
    db = connDao.getDb('document')
    if docDao.getLastestVersion(db, data['title']) != 0:
        lastestDocument = getDocument(data['title'])
        del lastestDocument['_id']
        del lastestDocument['version']
        del lastestDocument['datetime']
        if data.keys() != lastestDocument.keys():
            return {'result': 'fail'}
        elif lastestDocument['content'] == data['content']:
            return {'result': 'same'}
        else:
            docDao.insertDocument(db, data)
            return {'result': 'success'}
    else:
        docDao.insertDocument(db, data)
        return {'result': 'success'}


# 문서 타이틀 검색
def getMatchTitleList(search):
    db = connDao.getDb('document')
    docData = docDao.findByMatch(db, search)
    resultList = []
    for data in docData:
        if data['title'] not in resultList:
            resultList.append(data['title'])
    return {"matchData": resultList}


# 최근 문서 리스트 반환
def getRecentDocumentList(count):
    db = connDao.getDb('document')
    recentData = docDao.getRecentDocument(db, count)
    resultList = []
    print(recentData)
    for data in recentData:
        resultList.append({
            'title': data['title'],
            'version': data['version']
        })
    return {"recentData": resultList}


# 아이디 중복 체크 (입력 중)
def checkUserId(idData):
    db = connDao.getDb('user')
    if regDao.checkUserId(db, idData['userId']):
        return {'result': 'success'}
    else:
        return {'result': 'fail'}


# 이메일 중복 체크 (입력 중)
def checkEmail(emailData):
    db = connDao.getDb('user')
    if regDao.checkEmail(db, emailData['email']):
        return {'result': 'success'}
    else:
        return {'result': 'fail'}


# 회원가입 처리
def register(userInfo):
    examData = {"userId": "", "password": "", "email": ""}
    if userInfo.keys() != examData.keys():
        return {'result': 'fail'}
    else:
        db = connDao.getDb('user')
        if regDao.checkEmail(db, userInfo['email']) and regDao.checkUserId(db, userInfo['userId']):
            regDao.addUser(db, userInfo)
            return {'result': 'success'}
        else:
            return {'result': 'fail'}


# 로그인 처리
def login(loginData):
    examData = {"userId": "", "password": ""}
    if loginData.keys() != examData.keys():
        return {'result': 'fail'}
    else:
        db = connDao.getDb('user')
        if regDao.checkUserId(db, loginData['userId']):
            return {'result': 'fail'}
        else:
            userData = loginDao.getUserData(db, loginData['userId'])
            if userData['password'] == loginData['password']:
                token = loginDao.getLoginToken(db, loginData['userId'])
                return {
                    'result': 'success',
                    'token': token
                }
            else:
                return {'result': 'fail'}


# 자동 로그인 처리
def autoLogin(tokenCookie):
    try:
        db = connDao.getDb('user')
        userData = jwt.decode(tokenCookie, 'secret', algorithms=['HS256'])
        if loginDao.checkLoginToken(db, userData):
            return {
                'result': 'success',
                'userId': userData['userId']
            }
        else:
            return {'result': 'fail'}
    except jwt.exceptions.DecodeError:
        return {'result': 'fail'}


# 마이페이지 정보 확인
def getUserData(idData):
    db = connDao.getDb('user')
    if regDao.checkUserId(db, idData['userId']):
        return {'result': 'fail'}
    else:
        userData = {'result': 'success'}
        userData.update(mpDao.getUserDataForMyPage(db, idData['userId']))
        return userData


# 유저 정보 수정
def updateUserData(userData):
    sampleData = {"userId": "", "password": "", "email": "", "name": "", "phoneNumber": ""}
    if userData.keys() != sampleData.keys():
        return {'result': 'fail'}
    else:
        db = connDao.getDb('user')
        if regDao.checkUserId(db, userData['userId']) or not regDao.checkEmail(db, userData['email']):
            if userData['email'] == getUserData(userData)['email']:
                userId = userData['userId']
                del userData['userId']
                mpDao.updateUserInfo(db, userId, userData)
                return {'result': 'success'}
            return {'result': 'fail'}
        else:
            userId = userData['userId']
            del userData['userId']
            mpDao.updateUserInfo(db, userId, userData)
            return {'result': 'success'}


# 회원 탈퇴
def deleteUser(userData):
    db = connDao.getDb('user')
    if regDao.checkUserId(db, userData['userId']):
        return {'result': 'fail'}
    else:
        userId = userData['userId']
        mpDao.deleteUser(db, userId)
        return {'result': 'success'}


# 사용자 문서 수정
def modifyUserContent(userData):
    db = connDao.getDb('user')
    if regDao.checkUserId(db, userData['userId']):
        return {'result': 'fail'}
    othDao.modifyUserContent(db, userData['userId'], userData['userContent'])
    return {'result': 'success'}


# 사용자 문서 조회
def getUserContent(userIdData):
    db = connDao.getDb('user')
    if regDao.checkUserId(db, userIdData['userId']):
        return {'result': 'fail'}
    else:
        userContent = othDao.getUserContent(db, userIdData['userId'])
        return {'result': 'success', 'userContent': userContent}


# 토론 발제
def addDiscussion(discussionData):
    examData = {"title": "", "topic": "", "userId": "", "content": ""}
    db = connDao.getDb('discussion')
    if discussionData.keys() != examData.keys():
        return {'result': 'fail'}
    else:
        disDao.addDiscussion(db, discussionData)
        return {'result': 'success'}


# 토론 목록 조회
def getDiscussionList(discussionData):
    db = connDao.getDb('discussion')
    discussionList = disDao.getDiscussionByTitle(db, discussionData['title'])
    result = []
    for discussion in discussionList:
        del discussion['_id']
        result.append(discussion)
    if len(result) == 0:
        return {'result': 'success', 'discussionList': []}
    else:
        return {'result': 'success', 'discussionList': result}


# 토론 상세 조회
def getDiscussionDetail(discussionIdData):
    db = connDao.getDb('discussion')
    discussionDetail = disDao.getDiscussionDetail(db, discussionIdData['discussionId'])
    del discussionDetail['_id']
    result = {'result': 'success'}
    result.update(discussionDetail)
    return result


# 토론 의견 추가
def addDiscussionComment(discussionCommentData):
    examData = {"discussionId": 0, "contents": "", "userId": ""}
    db = connDao.getDb('discussion')
    if discussionCommentData.keys() != examData.keys() or disDao.getLastestDiscussionNumber(db) < discussionCommentData['discussionId']:
        return {'result': 'fail'}
    else:
        disId = discussionCommentData['discussionId']
        del discussionCommentData['discussionId']
        disDao.addComment(db, disId, discussionCommentData)
        return {'result': 'success'}