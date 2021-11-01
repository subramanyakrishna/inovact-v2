import { useSelector } from "react-redux";

function AreaOfInterest(props: any) {
    const data = [
      "Java",
      "API",
      "Java",
      "Problem Solving",
      "OOP Concepts",
      "OOP Concepts",
      "API",
      "API",
      "AOI 1",
      "API",
      "API",
      "API",
      "Problem Solving",
      "API",
      "API",
      "AOI 1"
    ];
    // const userInterests = useSelector((state: any)=>state.userInfo).area_of_interests;
    // const allInterests = useSelector((state: any)=>state.allInterests);
    // const userAOI = allInterests.filter((ele: any)=>userInterests.map((int: any)=>int.id).includes(ele.id));
    // console.log(userAOI);
    return (
      <div className="interests-tags">
        {data.map((ele: any) => {
          return <span>{ele}</span>;
        })}
      </div>
    );
  }
  export default AreaOfInterest;
  