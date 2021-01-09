import React,{useState} from 'react'

const Results = ({results}) => {

    const [displayResults, setDisplayResults] = useState(false)

    return (
        <>
            {results && <button className = "ti-button"  onClick = {() => setDisplayResults(!displayResults)}> {displayResults ? "Hide " : "Show "} Results</button>}
            {displayResults && 
            (<div style = {{marginTop:'2rem'}}>
                {results.map((resSet) => (
                    <div className = "result-container" style = {{display:'flex'}}>
                        <img className = "podium-pic" src = {resSet.podiumPic && resSet.podiumPic.fluid.src} width = "216" alt = "No Podium Picture" style = {{display:'inline-block'}}></img>
                        <div style = {{display:'inline-block', margin: '0rem 1rem'}}>
                        <p className = "result-header">{resSet.division}</p>
                        <p className = "result-text"><b>1.</b> {resSet.firstPlace}</p>
                        <p className = "result-text"><b>2.</b>  {resSet.secondPlace}</p>
                        <p className = "result-text"><b>3.</b>  {resSet.thirdPlace}</p>
                        </div>
                    </div>
                ))}
            </div>)}
        </>
    )
}

export default Results