import { ref, computed, readonly } from 'vue'
import type { Database } from '@/services/supabase'
import { supabase } from '@/services/supabase'

type Tables = Database['public']['Tables']
type Profile = Tables['profiles']['Row']
type ContactSubmission = Tables['contact_submissions']['Row']

export function useDatabase() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Profile operations
  const getProfile = async (userId: string) => {
    try {
      loading.value = true
      error.value = null

      const { data, error: fetchError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (fetchError) throw fetchError

      return { data, error: null }
    } catch (err) {
      const dbError = err as Error
      error.value = dbError.message
      return { data: null, error: dbError.message }
    } finally {
      loading.value = false
    }
  }

  const updateProfile = async (userId: string, updates: Partial<Profile>) => {
    try {
      loading.value = true
      error.value = null

      const { data, error: updateError } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', userId)
        .select()
        .single()

      if (updateError) throw updateError

      return { data, error: null }
    } catch (err) {
      const dbError = err as Error
      error.value = dbError.message
      return { data: null, error: dbError.message }
    } finally {
      loading.value = false
    }
  }

  const createProfile = async (profile: Omit<Profile, 'created_at' | 'updated_at'>) => {
    try {
      loading.value = true
      error.value = null

      const { data, error: createError } = await supabase
        .from('profiles')
        .insert(profile)
        .select()
        .single()

      if (createError) throw createError

      return { data, error: null }
    } catch (err) {
      const dbError = err as Error
      error.value = dbError.message
      return { data: null, error: dbError.message }
    } finally {
      loading.value = false
    }
  }

  // Contact form submissions
  const submitContactForm = async (submission: Omit<ContactSubmission, 'id' | 'created_at'>) => {
    try {
      loading.value = true
      error.value = null

      const { data, error: submitError } = await supabase
        .from('contact_submissions')
        .insert(submission)
        .select()
        .single()

      if (submitError) throw submitError

      return { data, error: null }
    } catch (err) {
      const dbError = err as Error
      error.value = dbError.message
      return { data: null, error: dbError.message }
    } finally {
      loading.value = false
    }
  }

  const getContactSubmissions = async (limit = 50) => {
    try {
      loading.value = true
      error.value = null

      const { data, error: fetchError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit)

      if (fetchError) throw fetchError

      return { data, error: null }
    } catch (err) {
      const dbError = err as Error
      error.value = dbError.message
      return { data: null, error: dbError.message }
    } finally {
      loading.value = false
    }
  }

  // Real-time subscriptions
  const subscribeToContactSubmissions = (callback: (payload: any) => void) => {
    const subscription = supabase
      .channel('contact_submissions')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'contact_submissions',
        },
        callback,
      )
      .subscribe()

    return subscription
  }

  // File storage operations
  const uploadAvatar = async (file: File, userId: string) => {
    try {
      loading.value = true
      error.value = null

      const fileExt = file.name.split('.').pop()
      const fileName = `${userId}-${Date.now()}.${fileExt}`

      const { data, error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(fileName, file)

      if (uploadError) throw uploadError

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from('avatars').getPublicUrl(fileName)

      return { data: publicUrl, error: null }
    } catch (err) {
      const storageError = err as Error
      error.value = storageError.message
      return { data: null, error: storageError.message }
    } finally {
      loading.value = false
    }
  }

  const deleteAvatar = async (fileName: string) => {
    try {
      loading.value = true
      error.value = null

      const { error: deleteError } = await supabase.storage.from('avatars').remove([fileName])

      if (deleteError) throw deleteError

      return { error: null }
    } catch (err) {
      const storageError = err as Error
      error.value = storageError.message
      return { error: storageError.message }
    } finally {
      loading.value = false
    }
  }

  return {
    loading: readonly(loading),
    error: readonly(error),
    getProfile,
    updateProfile,
    createProfile,
    submitContactForm,
    getContactSubmissions,
    subscribeToContactSubmissions,
    uploadAvatar,
    deleteAvatar,
  }
}
