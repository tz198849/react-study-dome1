
class RenSx extends React.Component{
    constructor(props){
        super(props)
        this.state={
            flag : false
        }
    }

    render(){

        return(
                <ul className={this.state.flag?"active":""}>
                    <li>{this.props.rensx.xm}</li>
                    <li>{this.props.rensx.nl}</li>
                    <li>{this.props.rensx.sg}</li>
                    <li>{this.props.rensx.tz}</li>
                    <li>{this.props.rensx.xb}</li>
                    <li><input type="checkbox" onClick={(e)=>{
                        this.setState({flag:e.target.checked});
                        console.log(this.state.flag)
                    }} /></li>
                </ul>
        )
    }
}
var rensx = [
    {xm:'小白',nl:'22',sg:'170cm',tz:'40kg',xb:'男'},
    {xm:'小红',nl:'21',sg:'171cm',tz:'42kg',xb:'女'},
    {xm:'小绿',nl:'21',sg:'171cm',tz:'42kg',xb:'女'},
    {xm:'小红',nl:'21',sg:'171cm',tz:'42kg',xb:'女'},
    {xm:'小绿',nl:'21',sg:'171cm',tz:'42kg',xb:'女'},
    {xm:'小红',nl:'21',sg:'171cm',tz:'42kg',xb:'女'},
    {xm:'小绿',nl:'21',sg:'171cm',tz:'42kg',xb:'女'},
    {xm:'小红',nl:'21',sg:'171cm',tz:'42kg',xb:'女'},
    {xm:'小绿',nl:'21',sg:'171cm',tz:'42kg',xb:'女'},
    {xm:'小红',nl:'21',sg:'171cm',tz:'42kg',xb:'女'},
    {xm:'小绿',nl:'21',sg:'171cm',tz:'42kg',xb:'女'},
    {xm:'小红',nl:'21',sg:'171cm',tz:'42kg',xb:'女'},
    {xm:'小绿',nl:'21',sg:'171cm',tz:'42kg',xb:'女'}
];
class Ren extends React.Component{
    render(){
        return(
            <div className="ren">
                <ul className="renTitbg">
                    <li>姓名</li>
                    <li>年龄</li>
                    <li>身高</li>
                    <li>体重</li>
                    <li>性别</li>
                    <li><input type="checkbox" /></li>
                </ul>
                {rensx.map((sx,index)=>{
                    return <RenSx rensx={sx} key={'ren'+index} />
                })}
            </div>
        )
    }
}
React.render(
    <Ren />,
    document.getElementById('dome3')
)