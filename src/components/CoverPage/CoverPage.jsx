import styled from 'styled-components';

const Container = styled.div`
    position: relative; 
    background: url(${({bg}) => bg}); 
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: center center; 
    width: 100%; 
    height: ${({h}) => h + "px"}; 
`; 

const SubContainer = styled.div`
    position: absolute; 
    width: 100%; 
    height: 100%; 
    background-color: rgb(0,0,0,0.5); 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
`; 

const title = {
    fontSize: "50px",
    textAlign: "center",
    color: "white",
    fontWeight: "700"
}

export const CoverPage= ({src, text, height}) => {

    return (
        <Container bg={src} h={height}>
            <SubContainer>
                <h1 style={title}> {text} </h1>
            </SubContainer>
        </Container>
    ); 
}