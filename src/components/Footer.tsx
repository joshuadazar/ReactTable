export const Footer = () => {

    const fecha = new Date().toDateString();
    return (
        
        <footer className="page-footer">
          
          <div className="footer-copyright">
            <div className="container">
            {fecha}
            <a className="grey-text text-lighten-4 right" href="/">More Links</a>
            </div>
          </div>
        </footer>
    )
}