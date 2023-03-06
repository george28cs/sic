import { Dispatch, SetStateAction, useEffect } from 'react';

export default function useOutsideAlerter(ref: any,isBurgerActive: boolean, setIsBurgerActive:Dispatch<SetStateAction<boolean>> ) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {

            if (isBurgerActive && ref.current && !ref.current.contains(event.target) && (
                !event.target.className.includes("navbar-burger burger") &&
                !event.target.parentElement.className.includes("navbar-burger burger")
            )
            ) {
                setIsBurgerActive(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, isBurgerActive]);
}