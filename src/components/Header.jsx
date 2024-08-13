 function Header({ text, bgColor, textColor }) {

const headerstyle= {
    backgroundColor:bgColor,
    color: textColor, 
}
  return (
    <header style={headerstyle}>
    <div>
      <div className="container ">
        <h2> {text}</h2>
      </div>
    </div>
    </header>
  )
}

Header.defaultProps ={
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}
export default Header
