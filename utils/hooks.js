import { useEffect, useState } from 'react'

export function useMediaQuery (query) {
    if (typeof window === 'undefined') return false

    const mediaMatch = window.matchMedia(query)

    const [matches, setMatches] = useState(mediaMatch.matches)
  
    useEffect(() => {
        function handler (event) {
            setMatches(event.matches)
        }
    
        mediaMatch.addListener(handler)

        return () => mediaMatch.removeListener(handler)
    })

    return matches
  }