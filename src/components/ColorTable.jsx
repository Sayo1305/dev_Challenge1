const ColorTable = ({color})=>{
      return(
            <div className="ColorCol" style={{"backgroundColor": `${color.secondary}`}}>
                  {
                        color.primary <= 300 ? (
                              <>
                                    <div className="ColorColfont">{color.primary}</div>
                                    <div className="ColorColfont">{color.secondary}</div>
                              </>
                        ):
                        (
                              <>
                                    <div className="ColorColfont" style={{"color": "#fff"}}>{color.primary}</div>
                                    <div className="ColorColfont" style={{"color": "#fff"}}>{color.secondary}</div>
                              </>
                        )
                  }
            </div>
      );
}

export default ColorTable;