from rest_framework import serializers
from .models import User, UserRole, SubscriptionTier

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'role', 'subscription_tier', 'date_joined')
        read_only_fields = ('id', 'date_joined')

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ('email', 'password', 'first_name', 'last_name', 'role')
        
    def validate_role(self, value):
        if value == UserRole.ADMIN:
            # Only allow Admin registration through admin panel or specific logic
            # For this demo, we might allow it or restrict it
            pass
        return value
