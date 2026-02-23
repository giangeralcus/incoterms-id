import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'

export function useLeaderboard() {
  const [scores, setScores] = useState([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const fetchTopScores = useCallback(async () => {
    if (!supabase) { setLoading(false); return }
    setLoading(true)
    setError(null)
    const { data, error: err } = await supabase
      .from('scores')
      .select('id, username, score, accuracy, scenarios_completed, created_at')
      .order('score', { ascending: false })
      .limit(10)
    setLoading(false)
    if (err) { setError(err.message); return }
    setScores(data || [])
  }, [])

  // Real-time subscription
  useEffect(() => {
    if (!supabase) return
    fetchTopScores()
    const channel = supabase
      .channel('scores-realtime')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'scores' }, () => {
        fetchTopScores()
      })
      .subscribe()
    return () => { supabase.removeChannel(channel) }
  }, [fetchTopScores])

  const submitScore = useCallback(async ({ username, score, accuracy, scenariosCompleted }) => {
    if (!supabase) { setError('Leaderboard unavailable'); return }
    if (submitted) { setError('Already submitted'); return }
    // Sanitize username
    const clean = username.replace(/[<>]/g, '').trim().slice(0, 20)
    if (clean.length < 2) { setError('Username minimal 2 karakter'); return }
    setSubmitting(true)
    setError(null)
    const { error: err } = await supabase
      .from('scores')
      .insert({ username: clean, score, accuracy, scenarios_completed: scenariosCompleted })
    setSubmitting(false)
    if (err) { setError(err.message); return }
    setSubmitted(true)
    fetchTopScores()
  }, [submitted, fetchTopScores])

  return { scores, loading, submitting, submitted, error, submitScore }
}
