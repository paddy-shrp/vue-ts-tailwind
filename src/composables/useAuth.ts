import { ref, computed, onMounted, readonly } from 'vue'
import type { User, AuthError } from '@supabase/supabase-js'
import { supabase } from '@/services/supabase'

export function useAuth() {
  const user = ref<User | null>(null)
  const loading = ref(true)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!user.value)

  // Initialize auth state
  onMounted(async () => {
    try {
      // Get initial session
      const {
        data: { session },
      } = await supabase.auth.getSession()
      user.value = session?.user ?? null

      // Listen for auth changes
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async (event, session) => {
        user.value = session?.user ?? null
        loading.value = false
      })

      // Cleanup subscription on unmount
      return () => subscription.unsubscribe()
    } catch (err) {
      error.value = 'Failed to initialize authentication'
      loading.value = false
    }
  })

  // Sign up with email and password
  const signUp = async (email: string, password: string, fullName?: string) => {
    try {
      loading.value = true
      error.value = null

      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (signUpError) throw signUpError

      return { data, error: null }
    } catch (err) {
      const authError = err as AuthError
      error.value = authError.message
      return { data: null, error: authError.message }
    } finally {
      loading.value = false
    }
  }

  // Sign in with email and password
  const signIn = async (email: string, password: string) => {
    try {
      loading.value = true
      error.value = null

      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) throw signInError

      return { data, error: null }
    } catch (err) {
      const authError = err as AuthError
      error.value = authError.message
      return { data: null, error: authError.message }
    } finally {
      loading.value = false
    }
  }

  // Sign in with OAuth provider
  const signInWithProvider = async (provider: 'google' | 'github' | 'discord') => {
    try {
      loading.value = true
      error.value = null

      const { data, error: oAuthError } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (oAuthError) throw oAuthError

      return { data, error: null }
    } catch (err) {
      const authError = err as AuthError
      error.value = authError.message
      return { data: null, error: authError.message }
    } finally {
      loading.value = false
    }
  }

  // Sign out
  const signOut = async () => {
    try {
      loading.value = true
      error.value = null

      const { error: signOutError } = await supabase.auth.signOut()

      if (signOutError) throw signOutError

      user.value = null
      return { error: null }
    } catch (err) {
      const authError = err as AuthError
      error.value = authError.message
      return { error: authError.message }
    } finally {
      loading.value = false
    }
  }

  // Reset password
  const resetPassword = async (email: string) => {
    try {
      loading.value = true
      error.value = null

      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })

      if (resetError) throw resetError

      return { error: null }
    } catch (err) {
      const authError = err as AuthError
      error.value = authError.message
      return { error: authError.message }
    } finally {
      loading.value = false
    }
  }

  // Update user profile
  const updateProfile = async (updates: { full_name?: string; avatar_url?: string }) => {
    try {
      loading.value = true
      error.value = null

      const { error: updateError } = await supabase.auth.updateUser({
        data: updates,
      })

      if (updateError) throw updateError

      return { error: null }
    } catch (err) {
      const authError = err as AuthError
      error.value = authError.message
      return { error: authError.message }
    } finally {
      loading.value = false
    }
  }

  return {
    user: readonly(user),
    loading: readonly(loading),
    error: readonly(error),
    isAuthenticated,
    signUp,
    signIn,
    signInWithProvider,
    signOut,
    resetPassword,
    updateProfile,
  }
}
