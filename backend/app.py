from flask import Flask, jsonify
from conversation_controller import conversation_controller
# from controllers.plan_controller import plan_controller
import os
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)
# app.config.from_object(Config)

# Register Blueprints
app.register_blueprint(conversation_controller, url_prefix="/conversation")
# app.register_blueprint(plan_controller, url_prefix="/plan")



@app.route("/dashboard", methods=["GET"])
def dashboard():
    return jsonify({"status": "dashboard"}), 200

if __name__ == "__main__":
    # Run the Flask app
    app.run(host="0.0.0.0", port=5000, debug=True)


