from .models import User, UserRole, SubscriptionTier
from .features_config import FEATURE_ACCESS_CONFIG
from django.core.exceptions import PermissionDenied

class FeatureService:
    @staticmethod
    def can_access_feature(user, feature_name):
        """
        Check if a user has access to a specific feature based on role and tier.
        """
        if not user.is_authenticated:
            return False
            
        config = FEATURE_ACCESS_CONFIG.get(feature_name)
        if not config:
            return True # Feature not restricted
            
        # Admin bypass
        if user.role == UserRole.ADMIN:
            return True
            
        is_allowed_role = user.role in config.get('allowed_roles', [])
        is_allowed_tier = user.subscription_tier in config.get('allowed_tiers', [])
        
        return is_allowed_role or is_allowed_tier

class AuthService:
    @staticmethod
    def register_user(email, password, first_name='', last_name='', role=UserRole.USER):
        """
        Service to handle user registration.
        """
        if User.objects.filter(email=email).exists():
            raise ValueError("Email already registered")
            
        user = User.objects.create_user(
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            role=role
        )
        return user

    @staticmethod
    def update_subscription(user, tier):
        """
        Update user subscription tier.
        """
        if tier not in SubscriptionTier.values:
            raise ValueError("Invalid subscription tier")
        user.subscription_tier = tier
        user.save()
        return user
