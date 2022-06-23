from flask import Flask
from rest.documentAPI import documentApi
from rest.userAPI import userApi
from rest.discussionAPI import discussionApi
from flask_restx import Resource, Api
from swagger.document import Document
from swagger.user import User
from swagger.discussion import Discussion


app = Flask(__name__)
api = Api(app)

app.register_blueprint(documentApi, url_prefix='/document')
app.register_blueprint(userApi, url_prefix='/user')
app.register_blueprint(discussionApi, url_prefix='/discussion')

api.add_namespace(Document, '/document')
api.add_namespace(User, '/user')
api.add_namespace(Discussion, '/discussion')

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
