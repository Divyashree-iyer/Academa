from flask import Blueprint, request, jsonify, redirect, url_for
from genai import generate_response, create_conversational_ai
import json
import sys


# Blueprint for conversation routes
conversation_controller = Blueprint("conversation_controller", __name__)

@conversation_controller.route("/", methods=["GET"])
def hello():
    return jsonify({"status": "ok"}), 200

@conversation_controller.route("/start_conversation", methods=["POST"])
def start_conversation():
    data = request.json
    # session = user_sessions.get(user_id, Session(user_id))
    # user_sessions[user_id] = session
    
    response_text = "Hi there! What would you like to learn about today?"
    # return jsonify({"response": response_text, "session_id": session.user_id})
    return jsonify({"response": response_text})

@conversation_controller.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message")
    user_id = data.get("user_id")

    response_text = create_conversational_ai(user_message)
    print(response_text, sys.stdout)
    if "```json\n" in response_text:
        json_start = response_text.find('json\n') + len('json\n') 
        json_end = response_text.find('```', json_start) 
        json_text = response_text[json_start:json_end].strip()
        formatted_json = json.loads(json_text)


    return jsonify({"response": response_text})

