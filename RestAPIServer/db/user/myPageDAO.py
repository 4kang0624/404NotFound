# 유저 정보 조회
def getUserDataForMyPage(db, userId):
    result = db['user'].find_one({'userId': userId})
    del result['_id']
    del result['password']
    del result['loginToken']
    del result['userContent']
    del result['achieve']
    return result


# 유저 정보 변경
def updateUserInfo(db, userId, userInfo):
    db['user'].update_one(filter={'userId': userId}, update={'$set': userInfo})


# 유저 정보 삭제
def deleteUser(db, userId):
    db['user'].delete_one({'userId': userId})

