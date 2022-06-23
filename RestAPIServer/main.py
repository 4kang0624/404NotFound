from flask import Flask
from rest.documentAPI import documentApi
from rest.userAPI import userApi
from rest.discussionAPI import discussionApi

app = Flask(__name__)

app.register_blueprint(documentApi, url_prefix='/document')
app.register_blueprint(userApi, url_prefix='/user')
app.register_blueprint(discussionApi, url_prefix='/discussion')

if __name__ == "__main__":
    app.run()
