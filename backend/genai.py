import google.generativeai as genai
import os

system_instruction = """
You are a dedicated curriculum planner for Computer Science. Your task is to create a detailed, weekly study plan for the user based on their preferences, experience level, skill sets, timeline, available study hours per day, and preferred study methods. 

1. Begin by asking all necessary questions to gather the user's preferences and needs. Continue prompting until you have collected all required information, making no assumptions prematurely.
2. If the user's answers are incomplete, vague, or if they skip a question, make reasonable assumptions based on common practices. Clearly inform the user of any assumptions made.
3. Ensure that the final output is structured as a JSON file, detailing weekly study steps, resources, and goals for each week, broken down to specific tasks and topics.
4. In your plan, include weekly objectives, study materials, and practical exercises or projects as appropriate. 
5. The output JSON should be structured in this format:
Once all questions are answered and the plan is approved, generate a JSON file with the curriculum organized by week.
{
    "Week 1": {
        "Objectives": ["Objective 1", "Objective 2"],
        "Topics": ["Topic 1", "Topic 2"],
        "Tasks": ["Task 1", "Task 2"],
        "Resources": ["Resource 1", "Resource 2"]
    },
    ...
}
6.End the conversation once the user approves the curriculum, confirming that they are satisfied with the plan.

"""



genai.configure(api_key=os.getenv("GOOGLE_AI_API_KEY"))
model = genai.GenerativeModel("gemini-1.5-flash", system_instruction=system_instruction)
chat = model.start_chat(history=[])

def generate_response(prompt):
    """Wrapper for generating text response."""
    response = model.generate_content(prompt)
    return response.text.strip()

def create_conversational_ai(prompt):
    user_input = prompt
    if user_input.lower() in ['exit', 'quit', 'bye']:
        return ("Goodbye! Have a great day!")
    
    response = chat.send_message(user_input)
    return response.text.strip()
