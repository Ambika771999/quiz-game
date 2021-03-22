from flask import Flask, render_template, request, jsonify
import json


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/ques', methods=['GET'])
def api():
    quesDBFile = open('database.json', 'r')
    quesList = json.load(quesDBFile)
    quesDBFile.close()

    level = request.args['level']

    return jsonify([
        { 'ques': x['ques'], 'ans': x['ans'] } for x in quesList['level']
    ])


if __name__ == '__main__':
    app.run(debug=True)
