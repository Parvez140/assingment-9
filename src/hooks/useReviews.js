import { useState , useEffect } from "react";

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( ()=>{
        fetch('fakeData/reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);
    return [reviews, setReviews];
}
export default useReviews;