

























// var names=['111','222','333']
// var arr=[
//   '123,jjjj','------就看看扩扩扩'
// ]
// class Zj extends React.Component{
//
//   render(){
//
//     console.log(this.props.children)
//
//     return(
//       <div>
//         {names.map(function(name){return <h1>hello,{name}</h1>})}
//         {arr}
//         {this.props.name}
//         {React.Children.map(this.props.children,function(child){
//           return <li>{child}</li>
//         })}
//
//       </div>
//     )
//   }
// }
// box = React.render(
//   <Zj name="zzzbbblll">
//     <h1>这里的内容吗?</h1>
//     <h1>这里的内容吗?</h1>
//   </Zj>,
//   document.getElementById('dome2')
// )



// class Box extends React.Component{
//   render(){
//     return(
//       <div>
//         <List sx={shuzu}/>
//       </div>
//     )
//   }
// }
//
// var shuzu = [
//   {title:'zbl',body:'Nrnrnrnrnrnrn'},
//   {title:'zbl',body:'Nrnrnrnrnrnrn'},
//   {title:'zbl',body:'Nrnrnrnrnrnrn'},
//   {title:'zbl',body:'Nrnrnrnrnrnrn'}
// ]
//
// class List extends React.Component{
//   render(){
//     console.log(this.props.sx);
//     var nodes = this.props.sx.map(function(shuzu){
//       return <ListBox title={shuzu.title}>{shuzu.body}</ListBox>
//     })
//     return(
//       <div>
//         {nodes}
//       </div>
//     )
//   }
// }
//
// class ListBox extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>{this.props.title}</h1>
//         <p>{this.props.children}</p>
//       </div>
//     )
//   }
// }
//
//
// React.render(
//   <Box />,
//   document.getElementById('dome2')
// )





// class Boxone extends React.Component{
//   render(){
//     return(
//       <div>
//         <div>{this.props.zuozhe}</div>
//         <div>-------------{this.props.children}</div>
//       </div>
//     );
//   }
// }
//
// var listsz = [
//   {zuozhe:'作者:zbl1',body:'内容区域'},
//   {zuozhe:'作者:zbl2',body:'内容区域'},
//   {zuozhe:'作者:zbl',body:'内容区域'},
//   {zuozhe:'作者:zbl',body:'内容区域'}
// ];
//
// class List extends React.Component{
//   render(){
//     console.log(this.props.sz)
//     var Nr = this.props.sz.map(function(listsz,index){
//       return (
//         <Boxone key={'eee'+index} zuozhe={listsz.zuozhe}>{listsz.body}</Boxone>
//       )
//     });
//     return(
//       <div>
//         {Nr}
//       </div>
//     );
//   }
// }
//
// class Box extends React.Component{
//   render(){
//     return(
//       <div>
//         <List sz={listsz} />
//       </div>
//     )
//   }
// }
//
// React.render(
//   <Box />,
//   document.getElementById('dome2')
// );
//










// <div></div>
