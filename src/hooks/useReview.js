import { useEffect, useState } from "react"
import './useReview.css'

const useReviews = () =>{
    const [reviews, setReviews] = useState([]);
    useEffect( () =>{
        fetch('allproducts.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return [reviews, setReviews];
}

export default useReviews;