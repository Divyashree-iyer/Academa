from flask_sqlalchemy import SQLAlchemy

# Initialize the database
db = SQLAlchemy()

# Define a model for storing session data
class UserSession(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String, unique=True, nullable=False)
    curriculum_plan = db.Column(db.JSON, nullable=True)

def save_session(user_id, curriculum_plan):
    user_session = UserSession.query.filter_by(user_id=user_id).first()
    if not user_session:
        user_session = UserSession(user_id=user_id, curriculum_plan=curriculum_plan)
    else:
        user_session.curriculum_plan = curriculum_plan
    db.session.add(user_session)
    db.session.commit()