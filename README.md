# ! 404 Not Found
Code**WiKi**

SWUniv Joint Hackathon Project

## Introduction
> Life is short, You need Code**Wiki**.
> 
> 인생은 짧다. 당신에겐 **코드위키**가 필요하다.

컴퓨터 공학이나 프로그래밍에 관한 전반적인 내용을 다루는 위키


```asciidoc
+ 개발자 | 김병철 | 배재대학교 | 리더
+ 개발자 | 박상현 | 인제대학교 | 영상제공
+ 개발자 | 박건형 | 삼육대학교 | 자료취합
+ 개발자 | 김지현 | 숙명여자대학교 | 서버관리
+ 디자이너 | 김형섭 | 상명대학교 | 소통
```

## 코드위키의 이용방법
![image](https://user-images.githubusercontent.com/87464704/175434248-99883e87-1ea0-4b5e-9a68-d4c8bdb8040a.png)
- 코드위키는 상단의 버튼을 눌러 로그인을 할 수 있고 문서 토론을 진행할 수 있습니다.
- 검색창에 검색을 하면 키워드와 관련된 내용이 하단에 나타납니다.

![image](https://user-images.githubusercontent.com/87464704/175434542-a61f2d0a-7ceb-4f02-bd87-8bfff5686742.png)
- 아이디와 패스워드를 입력할 수 있고 만일 없을 경우 계정을 만들 수 있습니다.

## Installation
* Python Package
```console
 > pip install flask
 > pip install pymongo
 > pip install flask_restx
 > pip install PyJWT
```
* React Package


## Database Structure (MongoDB)
* Document
```json
{
  "title": "", 
  "contents": "",
  "user": "",
  "version": 0,
  "datetime": ""
}
```
* User
```json
{
  "userId": "",
  "password": "",
  "email": "",
  "loginToken": "",
  "userContent": "",
  "name": "",
  "phoneNumber":"",
  "achieve": []
}
```
* Discussion
```json
{
  "discussionNumber": 0,
  "title": "",
  "topic": "",
  "userId": "",
  "content": "",
  "comment":[{
    "content": "",
    "userId": "",
    "datetime": ""
  }],
  "datetime": ""
}
```
