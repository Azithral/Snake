const BodyMovement = ({body}) => {


    return ( 
        body.map((cell,index) => {
            return(<div className="body" style={{top : cell[0] + 'px' , left : cell[1] + 'px'}} key={index} ></div>);            
        })
     );
}
 
export default BodyMovement;