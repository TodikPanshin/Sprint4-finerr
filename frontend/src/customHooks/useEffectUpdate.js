import { useEffect, useRef } from "react"


export function useEffectUpdate(callBack, dependencies) {
    const isInitialMount = useRef(true)

    useEffect(() => {

        if (isInitialMount.current) {
            isInitialMount.current = false
            return
        }

        return callBack()
    }, dependencies)
}