from flask import Flask, request, jsonify, render_template
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api = Api(app)

@app.route("/home")
@app.route("/")



def home():
    return render_template("home.html")

@app.route("/img", methods=["POST"])
def img():
    
    image = request.get_json(force=True)['img']

    print(image)

    resp = {"test": "json"}
    print(resp)
    return resp
    




    




if __name__ == '__main__':
    app.run(debug=True)