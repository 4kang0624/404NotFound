import datetime


# 유저 정보 저장
def addUser(db, userInfoInput):
    userInfo = {
        "userId": userInfoInput['userId'],
        "password": userInfoInput['password'],
        "email": userInfoInput['email'],
        "loginToken": datetime.datetime.utcnow() + datetime.timedelta(seconds=300),
        "userContent": "",
        "name": "",
        "phoneNumber": "",
        "achieve": []
    }
    db['user'].insert_one(userInfo)


# 아이디 중복 체크
def checkUserId(db, userId):
    if db['user'].find_one({'userId': userId}) is None:
        return True
    else:
        return False


# 이메일 중복 체크
def checkEmail(db, email):
    if db['user'].find_one({'email': email}) is None:
        return True
    else:
        return False
