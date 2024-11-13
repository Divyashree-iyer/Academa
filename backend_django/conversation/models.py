from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class UserPlan(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plan_json = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)