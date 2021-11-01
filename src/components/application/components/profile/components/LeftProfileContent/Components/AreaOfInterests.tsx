import { useSelector } from 'react-redux'

function AreaOfInterest() {
    const aoi = useSelector((state: any) => state.userInfo['user_interests'])

    return (
        <div className="interests-tags">
            {aoi.map((ele: any) => {
                return <span>{ele.interest}</span>
            })}
        </div>
    )
}
export default AreaOfInterest
