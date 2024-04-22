import { useEffect } from "react";

export const useObserver = (ref, callback1, callback2) => {
    const observer = useRef();
    useEffect(() => {
        if (observer.current) observer.current.disconnect();
        const cb = function (entries) {
            if (entries[0].isIntersecting) {
                callback1();
            }
            if (!entries[0].isIntersecting) {
                callback2()
            }
        }
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current);
    })
}