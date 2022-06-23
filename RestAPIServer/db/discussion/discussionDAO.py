import datetime
from pymongo import MongoClient


# 새 토론 번호 생성
def getLastestDiscussionNumber(db):
    dis = db['discussion'].estimated_document_count()
    return dis


# 토론 발제
def addDiscussion(db, discussion):
    discussionInfo = {
        "discussionId": getLastestDiscussionNumber(db) + 1,
        "title": discussion['title'],
        "topic": discussion['topic'],
        "userId": discussion['userId'],
        "content": discussion['content'],
        "comment": [],
        "datetime": datetime.datetime.utcnow()
    }
    db['discussion'].insert_one(discussionInfo)


# 제목별 토론 리스트 반환
def getDiscussionByTitle(db, title):
    return db['discussion'].find({'title': title})


# 토론 의견 추가
def addComment(db, discussionId, comment):
    commentInfo = {
        "contents": comment['contents'],
        "userId": comment['userId'],
        "datetime": datetime.datetime.utcnow()
    }
    db['discussion'].update_one({'discussionId': discussionId}, {'$push': {'comment': commentInfo}})


# 토론 상세 조회
def getDiscussionDetail(db, discussionId):
    return db['discussion'].find_one({'discussionId': discussionId})

