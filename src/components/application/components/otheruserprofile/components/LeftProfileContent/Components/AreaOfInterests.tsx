function AreaOfInterest() {
    const data = [
        'Java',
        'API',
        'Java',
        'Problem Solving',
        'OOP Concepts',
        'OOP Concepts',
        'API',
        'API',
        'AOI 1',
        'API',
        'API',
        'API',
        'Problem Solving',
        'API',
        'API',
        'AOI 1',
    ]
    return (
        <div className="interests-tags">
            {data.map((ele: any, key: any) => {
                return <span key={key}>{ele}</span>
            })}
        </div>
    )
}
export default AreaOfInterest
