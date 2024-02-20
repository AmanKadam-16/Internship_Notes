import './App.css';

function App4(){

    const LLM=["ChatGPT","Gemini","Llama-2","Claude","Bing","Perplexity"]
    const Result = LLM.map((llm,index)=><h2 key={index}>{llm} - Index is {index}</h2>)

    return(
        <><hr />
        <p>Below is Example of List & Mapping in React. (App4.jsx)</p>
        <h3>{Result}</h3>
        </>
    );
}
export default App4;