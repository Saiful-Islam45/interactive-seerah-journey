export type UserRole = 'ADMIN' | 'EDITOR' | 'USER';
export type SubscriptionTier = 'FREE' | 'PREMIUM';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: UserRole;
  subscription_tier: SubscriptionTier;
  date_joined: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
