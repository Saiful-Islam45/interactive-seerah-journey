from .models import UserRole, SubscriptionTier

# Mapping features to allowed tiers/roles
FEATURE_ACCESS_CONFIG = {
    'ai_assistant': {
        'allowed_tiers': [SubscriptionTier.PREMIUM],
        'allowed_roles': [UserRole.ADMIN, UserRole.EDITOR],
    },
    'premium_timeline': {
        'allowed_tiers': [SubscriptionTier.PREMIUM],
        'allowed_roles': [UserRole.ADMIN],
    },
    'content_editing': {
        'allowed_tiers': [SubscriptionTier.FREE, SubscriptionTier.PREMIUM],
        'allowed_roles': [UserRole.ADMIN, UserRole.EDITOR],
    }
}
