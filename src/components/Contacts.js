function Contacts(props) {
    return(
        <div className="list">
            { props.contacts.map((contact) => (
                <div className="contact-item" key={ contact.email }>
                    <img className="thumbnail" src={contact.picture.thumbnail} alt="Thumbnail"/>
                    <h3 className="name"> {contact.name.first} {contact.name.last}</h3>
                    <h4 className="home-phone">Home: {contact.phone}</h4>
                    <h4 className="mobile-phone">Mobile: {contact.cell}</h4>
                </div>
            ))}
        </div>
    )
}

export default Contacts