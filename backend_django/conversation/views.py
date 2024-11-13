from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from .models import UserPlan
import json
from .genai import create_conversational_ai


@csrf_exempt
@require_http_methods(["POST"])
# @login_required
def chat(request):
    data = json.loads(request.body)
    user_message = data.get("message")

    response_text = create_conversational_ai(user_message)
    plan_json = None
    if "```json\n" in response_text:
        json_start = response_text.find('json\n') + len('json\n') 
        json_end = response_text.find('```', json_start) 
        json_text = response_text[json_start:json_end].strip()
        plan_json = json.loads(json_text)
    
    return JsonResponse({
        "response": response_text,
        "plan_json": plan_json,
        "requires_approval": plan_json is not None
    })

@csrf_exempt
@require_http_methods(["POST"])
@login_required
def approve_plan(request):
    data = json.loads(request.body)
    plan_json = data.get("plan_json")
    
    if not plan_json:
        return JsonResponse({"error": "No plan provided"}, status=400)
    
    UserPlan.objects.create(user=request.user, plan_json=plan_json)
    
    return JsonResponse({"message": "Plan approved and saved successfully"})

@require_http_methods(["GET"])
@login_required
def get_user_plan(request):
    user_plan = UserPlan.objects.filter(user=request.user).order_by('-created_at').first()
    
    if user_plan:
        return JsonResponse({"plan": user_plan.plan_json})
    else:
        return JsonResponse({"message": "No approved plan found for this user"}, status=404)