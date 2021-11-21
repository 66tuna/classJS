// (function(){
// // 컴포넌트

// function ProSource(){
//     return(
//         <div>
//             welcome
//         </div>
//     )
// }

// // 출력
// const box = document.getElementById('box');
// ReactDOM.render(
//     <ProSource />,
//     box
// )

// })()

(function () {
    //컴포넌트

    function ProImg(props) {
        return (
            <img src={`./data/${props.color}.jpg`} alt="상세페이지" />
        );
    }

    function ProSize(props) {
        function optionSize() {
            // let sizes = window.Indata.allSize;
            return props.sizes.map((num) => {
                return (<option value={num} key={num}>{num}</option>)
            });
        }

        //onChange
        function onSizeChange(e){
            // console.log(e.target.value);
            props.hSizeChange(e.target.value);
        }
        return (
            <p className="field">
                <label htmlFor="size">size:</label>
                <select
                    id="size"
                    name="size"
                    onChange={onSizeChange}
                    defaultValue={props.size}>
                    {optionSize()}
                </select>
            </p>
        );
        // onChange랑 defaultValue가 뭔지 모르겠다 
        //target 개념이 안잡혀있는것 같다.
    }

    function ProColor(props) {
        function optionCikir(){
            // let colors = window.Indata.allColor;
            // console.log(colors);
            return props.colors.map((str)=>{
                return(<option value={str} key={str}>{str}</option>)
            });
        }

        function onColorChange(e){
            // console.log(e.target.value)
            props.hColorChange(e.target.value);
        }
        return (
            <p className="field">

                <label htmlFor="color">color:</label>
                <select id="color" name="color" onChange={onColorChange} defaultValue={props.color}>
                    {optionCikir()}
                </select>
            </p>
        );
    }

    function ProSource(props) {
        //state
        let [size, setSize] = React.useState(8);
        let [sizes, setSizes] = React.useState(window.Indata.allSize);

        let [color, setColor] = React.useState('blue');
        let [colors, setColors] = React.useState(window.Indata.allColor);
        
        function hSizeChange(selectSize){
            let ableColors = window.Indata.bySize[selectSize];
            setColors(ableColors);
            setSize(selectSize);
        }

        function hColorChange(selectColor){
            let ableSize = window.Indata.byColor[selectColor];
            setSizes(ableSize);
            setColor(selectColor);
        }
        return (
            <div className="custome">
                <div className="pic">
                    <ProImg color={color} />
                </div>

                <div className="selector">
                    <ProSize size={size} sizes={sizes} hSizeChange={hSizeChange}/>
                    <ProColor color={color} colors={colors} hColorChange={hColorChange}/>
                </div>
            </div>

        )
    }


    //export
    const box = document.getElementById('box');
    ReactDOM.render(
        <ProSource />,
        box
    )

})()