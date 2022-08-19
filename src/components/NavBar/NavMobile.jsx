import { FaBars, FaTimes } from "react-icons/fa";
import styled from 'styled-components';
import {useState} from 'react';
import { Link } from "react-router-dom";
import style from './Nav.module.css';

const Container = styled.div` 
    display: flex; 
    
    @media(min-width: 801px){
        display: none; 
    }
`; 

const Menu = styled.div`
    display: flex; 
    flex-direction: column; 
    Position: fixed; 
    top: 67px; 
    left: ${({open}) => open ? "0":"-100%"}; 
    width: 100%; 
    bottom: 0; 
    transition: 0.5s all ease; 
    background-color: black; 
    z-index: 1000; 
`; 

const MenuEnlaces = styled.a`
    padding: 20px 30px; 
    font-size: 20px; 
    text-align: justify; 
    color: white; 

    &:hover{
        background-color: white; 
        color: black; 
        transition: 0.6s all ease; 
    }
`;

const ButtonBurger = styled.button`
    font-size: 35px; 
    margin: 15px 0; 
    border: none; 
    background-color: transparent; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
`;

const subMenu = {
    display: "flex", 
    flexDirection: "column",
    paddingLeft: "30px"
}

export const NavMobile = () =>{
    const [show, setShow] =  useState(false); 
    return (
        <Container>
            <ButtonBurger onClick={() => setShow(!show)}>
                {show ? <FaTimes />:<FaBars /> }
            </ButtonBurger>
            
            <Menu open = {show}>
                <Link onClick={() => setShow(!show)} className={style.MenuBotones} to="/"> Inicio </Link>
                {/*<MenuEnlaces href="/"> Inicio </MenuEnlaces>*/}
                <MenuEnlaces onClick={() => setShow(!show)} href="#"> Institucional </MenuEnlaces>
                <div style={subMenu}>
                    <Link onClick={() => setShow(!show)} className={style.MenuBotones} to="/nosotros"> Nosotros </Link>
                    <Link onClick={() => setShow(!show)} className={style.MenuBotones} to="/valores"> Valores conalep </Link>
                </div>
                <MenuEnlaces onClick={() => setShow(!show)} href="#"> Oferta educativa </MenuEnlaces>
                <div style={subMenu}>
                    <Link onClick={() => setShow(!show)} className={style.MenuBotones} to="/informatica"> PTB en Informática </Link>
                    <Link onClick={() => setShow(!show)} className={style.MenuBotones} to="/administracion"> PTB en Administración  </Link>
                    <Link onClick={() => setShow(!show)} className={style.MenuBotones} to="/enfermeria"> PTB en Enfermería  </Link>
                </div>
                <Link onClick={() => setShow(!show)} className={style.MenuBotones} to="/contacto"> Contacto </Link>
            </Menu>
        </Container>
        
    ); 
}