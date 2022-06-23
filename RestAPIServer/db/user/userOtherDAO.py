# 사용자 문서 수정
def modifyUserContent(db, userId, userContent):
    db['user'].update_one(filter={'userId': userId}, update={'$set': {'userContent': userContent}})


# 사용자 문서 조회
def getUserContent(db, userId):
    return db['user'].find_one({'userId': userId})['userContent']