import { useEffect, useState } from "react"
import { RESTUARANTSDETAILS } from "../constants/constant"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
const RestuarantDetails = () => {
    const [resDeatils, setResDetails] = useState(null)

    const {resId} = useParams()
    console.log(resId)

    useEffect(() => {
        fetchRestuarantDetails()
    }, [])

    const fetchRestuarantDetails = async () => {
        const response = await fetch(RESTUARANTSDETAILS + resId)
        const jsonResponse = await response.json()
        const data = jsonResponse.data?.cards[2]?.card?.card?.info
        console.log("details -> "+ data)

        setResDetails(data)
    }

    return resDeatils === null ? (<Shimmer />) : (
        <div>
            <h1>{resDeatils?.name}</h1>
            <h2>{resDeatils?.cuisines?.join(", ")}</h2>
        </div>
    )
}
export default RestuarantDetails