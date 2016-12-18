// class Zujian1 extends React.Component{
//   render(){
//     return (
//       <div>Zujian1 : 还没有用</div>
//     )
//   }
// }
//
// class Zujian3 extends React.Component{
//   render(){
//     return (
//       <div style={{border:'1px solid red'}}>
//         <h1>{this.props.zuozhe}</h1>
//         <h3>{this.props.children}</h3>
//         <p>{this.props.kkk}</p>
//       </div>
//     )
//   }
// }
//
// class Zujian2 extends React.Component{
//   render(){
//     console.log(shuzu1);//打印一下刚刚定义的一个数组
//
//     var neirong = this.props.shuzu1.map(function(shuzu1,index){
//       return <Zujian3 key={'Zj3-'+index} zuozhe={shuzu1.zuozhe} kkk={shuzu1.kkk}>{shuzu1.body}</Zujian3>
//     })
//
//     return (
//       <div>
//         {neirong}
//       </div>
//     )
//   }
// }
//
// var shuzu1 = [
//   {zuozhe:"zuozhe1", body:"body1",kkk:"ok1"},
//   {zuozhe:"zuozhe2", body:"body2",kkk:"ok1"}
// ];
//
// var shuzu2 = [
//   {zuozhe:"zuozhe1", body:"body1",kkk:"ok1"}
// ];
//
// class Dome1 extends React.Component{
//   constructor(props){
//     super();
//     this.state={
//       zhuangtai:props.cd
//     };
//   }
//   render(){
//     return (
//       <div style={{border:'10px solid black',padding:'10'}}>
//           <h1>Title</h1>
//           <Zujian1 />
//           <Zujian2 shuzu1={this.state.zhuangtai}/>
//       </div>
//     )
//   }
// }
//
// box = React.render(
//   <Dome1 cd={shuzu1}/>,
//   document.getElementById('dome1')
// );
