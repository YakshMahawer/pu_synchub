from flask import Flask, request, jsonify
import pymongo
from pymongo import MongoClient

app = Flask(__name__)
cluster = MongoClient('mongodb+srv://yakshmahawer:fZdDSYRANzjQsfkc@synchub.shfybci.mongodb.net/?retryWrites=true&w=majority&appName=SyncHub')
db = cluster['test']
collection = db['users']

# Create operation
@app.route('/create', methods=['POST', 'GET'])
def create():
    data = request.get_json()
    if data:
        result = collection.insert_one(data)
        return jsonify({"message": "Document created successfully", "id": str(result.inserted_id)}), 201
    else:
        return jsonify({"message": "Failed To Add Data"}), 400

if __name__ == '__main__':
    app.run(debug=True)